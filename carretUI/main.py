from fastapi import FastAPI, UploadFile, Response, Form 
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.encoders import jsonable_encoder
from typing import Annotated
import sqlite3

con = sqlite3.connect('carret.db', check_same_thread=False)
cur = con.cursor()

cur.execute(f"""
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY,
                title TEXT NOT NULL,
                image BLOB,
                price INTEGER NOT NULL,
                created_at INTEGER NOT NULL
            )
            """)

app = FastAPI()

@app.get("/images/{item_id}")
async def get_image(item_id):
    cur = con.cursor()
    image_byte = cur.execute(f"""
                             select image from items where id={item_id}
                             """).fetchone()[0]
    return Response(content=bytes.fromhex(image_byte), media_type="image/*")


@app.get("/items")
async def return_items():
    con.row_factory = sqlite3.Row
    cur = con.cursor()
    item_list = cur.execute(f"""
                select * from items
                """).fetchall()
    
    return JSONResponse(jsonable_encoder(dict(item) for item in item_list))

@app.post("/items")
async def create_item(image:UploadFile, 
                title:Annotated[str, Form()], 
                price:Annotated[int, Form()], 
                description:Annotated[str, Form()], 
                place:Annotated[str, Form()],
                created_at:Annotated[int, Form()]):
    image_bytes = await image.read()
    cur.execute(f"""
                INSERT INTO items(title, image, price, description, place, created_at)
                VALUES ('{title}','{image_bytes.hex()}', {price}, '{description}', '{place}', '{created_at}')
                """)
    con.commit()
    return "200"


app.mount("/", StaticFiles(directory="./frontend", html=True), name="carret")

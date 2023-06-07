from fastapi import FastAPI;
app = FastAPI()

@app.get("/")
async def home():
    return {"message":"안녕하세요 우스입니다."}

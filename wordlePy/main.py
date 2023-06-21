from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import random

app = FastAPI()

app.mount("/wordle", StaticFiles(directory="../wordleJS", html=True), name="wordle")
app.mount("/carret", StaticFiles(directory="../carretUI", html=True), name="carret")


# arr = ["RAMEN","APPLE", "COLOR", "BACKE", "FRONT"]
arr = ["CRAZY"]

@app.get("/answer")
def returnAnswer():
    idx = random.randrange(0, len(arr))
    return arr[idx]
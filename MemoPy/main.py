from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel;

memos = []
app = FastAPI()

class Memo(BaseModel):
    id:str
    content:str

app.mount("/memo", StaticFiles(directory="./static", html=True), name="memo")

@app.post("/memos")
def create_memo(memo:Memo):
    memos.append(memo);
    print(memo)
    return "메모 추가에 성공했습니다."

@app.get("/memos")
def read_memo():
    return memos;

@app.put("/memos/{id}")
def update_memo(update_memo:Memo):
    for memo in memos:
        if update_memo.id  == memo.id:
            memo.content = update_memo.content
            return "메모 수정에 성공했습니다."
    return "id가 존재하지 않습니다"

@app.delete("/memos/{id}")
def delete_memo(id):
    for memo in memos:
        if memo.id == id:
            memos.remove(memo)
            return "메모 삭제에 성공했습니다"
    return "id가 존재하지 않습니다"
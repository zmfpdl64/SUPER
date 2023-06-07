### 프레임워크

프로그램 정해진 순서, 규격에 따라 프로그래밍을 작성한다.

### 라이브러리

작성자가 원하는 방식으로 코드를 작성한다.

### 파이썬 서버 라이브러리

```cmd

pip install uvicorn[standard]

uvicorn main:app --reload

```

### FastAPI Python

```Python
from fastapi import FastAPI;
app = FastAPI()

@app.get("/")
async def home():
    return {"message":"안녕하세요 우스입니다."}
```

### 다양한 프레임워크

- Django
- FastAPI
- Flask

from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="Simulación de Variables Aleatorias")

app.include_router(router)
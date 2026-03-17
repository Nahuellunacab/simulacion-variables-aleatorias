from fastapi import APIRouter

from app.services.random_generators import (
    uniforme_manual, uniforme_numpy,
    exponencial_manual, exponencial_numpy,
    poisson_manual, poisson_numpy,
    normal_manual, normal_numpy
)

from app.services.simulation_service import ejecutar_simulacion



router = APIRouter()

@router.get("/simular/uniforme")
def simular_uniforme(
    a: float,
    b: float,
    n: int,
    bins: int,
    modo: str = "manual"
):

    generador = uniforme_manual if modo == "manual" else uniforme_numpy

    return ejecutar_simulacion(
        "uniforme",
        generador,
        (a, b),
        n,
        bins
    )


@router.get("/simular/exponencial")
def simular_exponencial(
    lmbda: float,
    n: int,
    bins: int,
    modo: str = "manual"
):

    generador = exponencial_manual if modo == "manual" else exponencial_numpy

    return ejecutar_simulacion(
        "exponencial",
        generador,
        (lmbda,),
        n,
        bins
    )



@router.get("/simular/poisson")
def simular_poisson(
    lmbda: float,
    n: int,
    bins: int,
    modo: str = "manual"
):

    generador = poisson_manual if modo == "manual" else poisson_numpy

    return ejecutar_simulacion(
        "poisson",
        generador,
        (lmbda,),
        n,
        bins
    )

@router.get("/simular/normal")
def simular_normal(
    media: float,
    desviacion: float,
    n: int,
    bins: int,
    modo: str = "manual"
):

    generador = normal_manual if modo == "manual" else normal_numpy

    return ejecutar_simulacion(
        "normal",
        generador,
        (media, desviacion),
        n,
        bins
    )
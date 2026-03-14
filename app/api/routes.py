from fastapi import APIRouter

from app.services.random_generators import generar_uniforme
from app.services.graph_service import generar_histograma
from app.services.statistics import prueba_chi_cuadrado
from app.utils.export_excel import exportar_excel
from app.services.simulation_service import ejecutar_simulacion



router = APIRouter()


@router.get("/simular/uniforme")
def simular_uniforme(a: float, b: float, n: int, bins: int):

    from app.services.random_generators import generar_uniforme

    return ejecutar_simulacion(
        "uniforme",
        generar_uniforme,
        (a, b),
        n,
        bins
    )


@router.get("/simular/exponencial")
def simular_exponencial(lmbda: float, n: int, bins: int):

    from app.services.random_generators import generar_exponencial

    return ejecutar_simulacion(
        "exponencial",
        generar_exponencial,
        (lmbda,),
        n,
        bins
    )



@router.get("/simular/poisson")
def simular_poisson(lmbda: float, n: int, bins: int):

    from app.services.random_generators import generar_poisson

    return ejecutar_simulacion(
        "poisson",
        generar_poisson,
        (lmbda,),
        n,
        bins
    )

@router.get("/simular/normal")
def simular_normal(media: float, desviacion: float, n: int, bins: int):

    from app.services.random_generators import generar_normal

    return ejecutar_simulacion(
        "normal",
        generar_normal,
        (media, desviacion),
        n,
        bins
    )
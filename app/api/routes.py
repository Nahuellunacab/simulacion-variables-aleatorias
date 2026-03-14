from fastapi import APIRouter

from app.services.random_generators import generar_uniforme
from app.services.graph_service import generar_histograma
from app.services.statistics import prueba_chi_cuadrado
from app.utils.export_excel import exportar_excel

router = APIRouter()


@router.get("/simular/uniforme")
def simular_uniforme(a: float, b: float, n: int, bins: int):

    datos = generar_uniforme(a, b, n)

    generar_histograma(datos, bins, "results/hist_uniforme.png")

    exportar_excel(datos, "results/datos_uniforme.xlsx")

    test = prueba_chi_cuadrado(datos, bins)

    return {
        "cantidad_generada": n,
        "resultado_chi2": test
    }

@router.get("/simular/exponencial")
def simular_exponencial(lmbda: float, n: int, bins: int):

    from app.services.random_generators import generar_exponencial

    datos = generar_exponencial(lmbda, n)

    generar_histograma(datos, bins, "results/hist_exponencial.png")

    exportar_excel(datos, "results/datos_exponencial.xlsx")

    test = prueba_chi_cuadrado(datos, bins)

    return {
        "distribucion": "exponencial",
        "cantidad_generada": n,
        "resultado_chi2": test
    }

@router.get("/simular/poisson")
def simular_poisson(lmbda: float, n: int, bins: int):

    from app.services.random_generators import generar_poisson

    datos = generar_poisson(lmbda, n)

    generar_histograma(datos, bins, "results/hist_poisson.png")

    exportar_excel(datos, "results/datos_poisson.xlsx")

    test = prueba_chi_cuadrado(datos, bins)

    return {
        "distribucion": "poisson",
        "cantidad_generada": n,
        "resultado_chi2": test
    }

@router.get("/simular/normal")
def simular_normal(media: float, desviacion: float, n: int, bins: int):

    from app.services.random_generators import generar_normal

    datos = generar_normal(media, desviacion, n)

    generar_histograma(datos, bins, "results/hist_normal.png")

    exportar_excel(datos, "results/datos_normal.xlsx")

    test = prueba_chi_cuadrado(datos, bins)

    return {
        "distribucion": "normal",
        "cantidad_generada": n,
        "resultado_chi2": test
    }
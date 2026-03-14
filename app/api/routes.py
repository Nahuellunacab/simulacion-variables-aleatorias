from fastapi import APIRouter

from app.services.random_generators import generar_uniforme
from app.services.graph_service import generar_histograma
from app.services.statistics_tests import prueba_chi_cuadrado
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
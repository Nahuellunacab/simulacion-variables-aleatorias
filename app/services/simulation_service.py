import os

from app.services.graph_service import generar_histograma
from app.services.statistics import prueba_chi_cuadrado
from app.utils.export_excel import exportar_excel


def ejecutar_simulacion(nombre, generador, parametros, n, bins):

    os.makedirs("results", exist_ok=True)

    datos = generador(*parametros, n)

    generar_histograma(datos, bins, f"results/hist_{nombre}.png")

    exportar_excel(datos, f"results/datos_{nombre}.xlsx")

    test = prueba_chi_cuadrado(datos, bins)

    return {
        "distribucion": nombre,
        "cantidad_generada": n,
        "resultado_chi2": test,
        "datos": datos if isinstance(datos, list) else datos.tolist(),
    }
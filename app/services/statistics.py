import numpy as np
from scipy.stats import chisquare


def prueba_chi_cuadrado(datos, bins=10):

    hist, _ = np.histogram(datos, bins=bins)

    esperado = np.ones_like(hist) * np.mean(hist)

    chi2, p_value = chisquare(hist, esperado)

    return {
        "chi2": chi2,
        "p_value": p_value
    }
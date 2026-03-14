import numpy as np


def generar_uniforme(a: float, b: float, n: int):
    return np.random.uniform(a, b, n)


def generar_exponencial(lmbda: float, n: int):
    return np.random.exponential(1 / lmbda, n)


def generar_poisson(lmbda: float, n: int):
    return np.random.poisson(lmbda, n)


def generar_normal(media: float, desviacion: float, n: int):
    return np.random.normal(media, desviacion, n)
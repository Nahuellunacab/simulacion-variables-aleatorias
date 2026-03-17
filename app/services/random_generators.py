import numpy as np
import random
import math

# =========================
# UNIFORME
# =========================

def uniforme_numpy(a, b, n):
    return np.random.uniform(a, b, n).tolist()

def uniforme_manual(a, b, n):
    return [a + (b - a) * random.random() for _ in range(n)]


# =========================
# EXPONENCIAL
# =========================

def exponencial_numpy(lmbda, n):
    return np.random.exponential(1/lmbda, n).tolist()

def exponencial_manual(lmbda, n):
    return [-(1/lmbda) * math.log(1 - random.random()) for _ in range(n)]


# =========================
# NORMAL (Box-Muller)
# =========================

def normal_numpy(media, desviacion, n):
    return np.random.normal(media, desviacion, n).tolist()

def normal_manual(media, desviacion, n):
    datos = []

    for _ in range(n):
        u1 = random.random()
        u2 = random.random()

        z = math.sqrt(-2 * math.log(u1)) * math.cos(2 * math.pi * u2)
        x = media + desviacion * z

        datos.append(x)

    return datos


# =========================
# POISSON (Knuth)
# =========================

def poisson_numpy(lmbda, n):
    return np.random.poisson(lmbda, n).tolist()

def poisson_manual(lmbda, n):
    datos = []

    for _ in range(n):
        L = math.exp(-lmbda)
        k = 0
        p = 1

        while p > L:
            k += 1
            p *= random.random()

        datos.append(k - 1)

    return datos
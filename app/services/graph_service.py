import matplotlib.pyplot as plt


def generar_histograma(datos, bins, filename):

    plt.hist(datos, bins=bins)

    plt.title("Histograma de la distribución")
    plt.xlabel("Valores")
    plt.ylabel("Frecuencia")

    plt.savefig(filename)

    plt.close()
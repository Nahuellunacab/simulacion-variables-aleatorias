import pandas as pd


def exportar_excel(datos, filename):

    df = pd.DataFrame(datos, columns=["valor"])

    df.to_excel(filename, index=False)
# Simulación de Variables Aleatorias

API desarrollada en **Python + FastAPI** para generar variables aleatorias y analizar su comportamiento estadístico.

Este proyecto fue desarrollado como parte del **Trabajo Práctico N°2 de la materia Simulación (UTN)**.

El sistema permite generar valores de distintas distribuciones probabilísticas, visualizar sus histogramas, exportar los datos generados y aplicar pruebas estadísticas para validar los generadores.

---

# Objetivo

Implementar una **librería de generación de variables aleatorias** que permita:

* Generar valores según distintas distribuciones probabilísticas
* Visualizar los resultados
* Analizar estadísticamente los datos generados
* Exportar resultados para su análisis externo

---

# Distribuciones implementadas

La API permite simular las siguientes distribuciones:

* Distribución Uniforme
* Distribución Exponencial
* Distribución Poisson
* Distribución Normal (Gaussiana)

Cada simulación permite generar hasta **50.000 valores aleatorios**.

---

# Funcionalidades

El sistema implementa las siguientes funcionalidades:

* Generación de valores aleatorios
* Construcción de histogramas
* Exportación de datos a Excel
* Prueba estadística Chi-Cuadrado
* API REST para ejecutar simulaciones

---

# Arquitectura del proyecto

El proyecto sigue una estructura modular separando responsabilidades.

```
simulacion-variables-aleatorias
│
├── app
│   ├── main.py
│   │
│   ├── api
│   │   └── routes.py
│   │
│   ├── services
│   │   ├── random_generators.py
│   │   ├── graph_service.py
│   │   ├── statistics_tests.py
│   │   └── simulation_service.py
│   │
│   └── utils
│       └── export_excel.py
│
├── results
│
├── requirements.txt
│
└── README.md
```

---

# Descripción de módulos

## random_generators.py

Contiene las funciones encargadas de generar valores aleatorios para cada distribución utilizando **NumPy**.

Distribuciones implementadas:

* uniforme
* exponencial
* poisson
* normal

---

## graph_service.py

Se encarga de generar histogramas a partir de los valores simulados utilizando **Matplotlib**.

Los gráficos se almacenan en la carpeta:

```
results/
```

---

## statistics_tests.py

Implementa la **prueba Chi-Cuadrado** utilizando SciPy para evaluar si los valores generados se ajustan a la distribución esperada.

Resultado del test:

* estadístico Chi²
* p-value

---

## export_excel.py

Exporta los datos generados a archivos Excel utilizando **Pandas**.

---

## simulation_service.py

Servicio central que ejecuta todo el flujo de simulación:

1. Generar datos
2. Crear histograma
3. Exportar Excel
4. Ejecutar prueba Chi-Cuadrado
5. Devolver resultados

Este módulo evita duplicación de código en los endpoints.

---

# Endpoints disponibles

La API expone los siguientes endpoints:

## Distribución Uniforme

```
GET /simular/uniforme
```

Parámetros:

* a → límite inferior
* b → límite superior
* n → cantidad de valores a generar
* bins → cantidad de intervalos del histograma

Ejemplo:

```
/simular/uniforme?a=0&b=10&n=10000&bins=20
```

---

## Distribución Exponencial

```
GET /simular/exponencial
```

Parámetros:

* lambda → parámetro de la distribución
* n → cantidad de valores
* bins → intervalos del histograma

---

## Distribución Poisson

```
GET /simular/poisson
```

Parámetros:

* lambda → media de la distribución
* n → cantidad de valores
* bins → intervalos del histograma

---

## Distribución Normal

```
GET /simular/normal
```

Parámetros:

* media → media de la distribución
* desviacion → desviación estándar
* n → cantidad de valores
* bins → intervalos del histograma

---

# Resultados generados

Cada simulación genera automáticamente:

* Histograma de la distribución
* Archivo Excel con los valores generados
* Resultado de la prueba Chi-Cuadrado

Los archivos se almacenan en:

```
results/
```

Ejemplo:

```
hist_uniforme.png
datos_uniforme.xlsx
```

---

# Instalación del proyecto

Clonar el repositorio:

```
git clone https://github.com/usuario/simulacion-variables-aleatorias.git
```

Ingresar al proyecto:

```
cd simulacion-variables-aleatorias
```

Crear entorno virtual:

```
python -m venv venv
```

Activar entorno:

Windows

```
venv\Scripts\activate
```

Instalar dependencias:

```
pip install -r requirements.txt
```

---

# Ejecutar la API

Iniciar el servidor:

```
uvicorn app.main:app --reload
```

La API estará disponible en:

```
http://127.0.0.1:8000
```

Documentación automática:

```
http://127.0.0.1:8000/docs
```

---

# Tecnologías utilizadas

* Python
* FastAPI
* NumPy
* Pandas
* Matplotlib
* SciPy
* OpenPyXL

---

# Trabajo Práctico

Materia: **Simulación**

Trabajo Práctico N°2: **Variables Aleatorias**

Consigna:

* Implementar una librería para generar variables aleatorias
* Permitir el ingreso de parámetros
* Visualizar resultados
* Realizar pruebas estadísticas
* Generar gráficos de distribución

---

# Mejoras futuras

Posibles extensiones del proyecto:

* Interfaz web para ejecutar simulaciones
* Visualización interactiva de gráficos
* Comparación entre distribuciones
* Simulación de modelos de Monte Carlo
* Simulación de sistemas de colas

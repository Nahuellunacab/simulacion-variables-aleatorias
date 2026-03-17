# Simulación de Variables Aleatorias

Aplicación **fullstack** desarrollada en **Python + FastAPI + React** para la generación, visualización y validación de variables aleatorias.

Este proyecto fue realizado como parte del **Trabajo Práctico N°2 de la materia Simulación (UTN)**.

Permite generar valores según distintas distribuciones probabilísticas, visualizar los resultados mediante gráficos interactivos, exportar datos y validar los generadores mediante pruebas estadísticas.

---

# 🎯 Objetivo

Desarrollar una librería que permita:

* Generar variables aleatorias
* Parametrizar distribuciones
* Visualizar resultados
* Validar estadísticamente los datos
* Exportar información para análisis externo

---

# ⚙️ Funcionalidades

* Generación de variables aleatorias
* Soporte para múltiples distribuciones
* Visualización mediante histogramas interactivos
* Prueba estadística Chi-Cuadrado
* Exportación de datos a Excel
* API REST
* Interfaz web interactiva

---

# 🧠 Métodos de generación

El sistema permite elegir entre dos enfoques:

### 🔹 Manual (implementación teórica)

Se utilizan métodos matemáticos clásicos:

* Transformada inversa (Exponencial)
* Método de Box-Muller (Normal)
* Algoritmo de Knuth (Poisson)
* Transformación lineal (Uniforme)

### 🔹 Numpy (librería)

Se utilizan funciones optimizadas de `NumPy`.

👉 Esto permite **comparar resultados entre teoría y librerías**, agregando valor académico al proyecto.

---

# 📊 Distribuciones implementadas

* Uniforme
* Exponencial
* Poisson
* Normal (Gaussiana)

Cada simulación permite generar hasta **50.000 valores**.

---

# 🧠 Arquitectura del proyecto

```
simulacion-variables-aleatorias
│
├── app (backend - FastAPI)
│   ├── main.py
│   ├── api
│   │   └── routes.py
│   ├── services
│   │   ├── random_generators.py
│   │   ├── graph_service.py
│   │   ├── statistics.py
│   │   └── simulation_service.py
│   └── utils
│       └── export_excel.py
│
├── frontend (React + Vite)
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│
├── results
├── requirements.txt
└── README.md
```

---

# 🔧 Backend

Desarrollado con **FastAPI**, se encarga de:

* Generar valores aleatorios
* Ejecutar pruebas estadísticas
* Crear histogramas
* Exportar resultados

### Endpoints

```
GET /simular/uniforme
GET /simular/exponencial
GET /simular/poisson
GET /simular/normal
```

Cada endpoint recibe parámetros y devuelve:

* valores generados
* resultado Chi²
* p-value

Además, permite seleccionar el modo:

```
?modo=manual
?modo=numpy
```

---

# 🎨 Frontend

Desarrollado con:

* React
* Vite
* TailwindCSS
* Chart.js

Permite:

* Seleccionar distribución
* Elegir método de generación (manual o numpy)
* Ingresar parámetros
* Ejecutar simulación
* Visualizar histogramas interactivos
* Ver resultados estadísticos
* Descargar archivo Excel

---

# 📂 Resultados generados

Cada simulación produce automáticamente:

* Histograma (`.png`)
* Archivo Excel (`.xlsx`)
* Resultado de la prueba estadística

Ubicación:

```
results/
```

---

# 🚀 Instalación

## Backend

```
git clone https://github.com/usuario/simulacion-variables-aleatorias.git
cd simulacion-variables-aleatorias
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Ejecutar:

```
uvicorn app.main:app --reload
```

---

## Frontend

```
cd frontend
npm install
npm run dev
```

---

# 🌐 Accesos

* Backend: http://127.0.0.1:8000
* Documentación: http://127.0.0.1:8000/docs
* Frontend: http://localhost:5173

---

# 🧪 Validación estadística

Se implementa la prueba **Chi-Cuadrado** para evaluar si los datos generados siguen la distribución teórica.

Resultados:

* Estadístico Chi²
* p-value
* Interpretación del test

---

# 🛠 Tecnologías utilizadas

## Backend

* Python
* FastAPI
* NumPy
* Pandas
* SciPy
* Matplotlib

## Frontend

* React
* Vite
* TailwindCSS
* Chart.js
* Axios

---

# 📚 Trabajo Práctico

Materia: **Simulación**
Trabajo Práctico N°2: **Variables Aleatorias**

Consignas cumplidas:

* ✔ Generación de variables aleatorias
* ✔ Parametrización de distribuciones
* ✔ Visualización de resultados
* ✔ Pruebas estadísticas
* ✔ Generación de gráficos

---

# 🚀 Mejoras futuras

* Comparación visual entre métodos (manual vs numpy)
* Superposición de curvas teóricas
* Simulación de Monte Carlo
* Modelos de colas
* Deploy en la nube

---

# 👨‍💻 Autor

Desarrollado por **Nahuel** en el contexto académico de UTN.
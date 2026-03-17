import { useState } from "react"
import ParameterForm from "../components/ParameterForm"
import api from "../services/api"
import HistogramChart from "../components/HistogramChart"

function SimulatorPage() {

  const [distribution, setDistribution] = useState("uniforme")
  const [modo, setModo] = useState("manual")
  const [result, setResult] = useState(null)

  const handleSimulation = async (params) => {
    try {
      let url = ""

      if (distribution === "uniforme") {
        url = `/simular/uniforme?a=${params.a}&b=${params.b}&n=${params.n}&bins=${params.bins}&modo=${modo}`
      }

      if (distribution === "exponencial") {
        url = `/simular/exponencial?lmbda=${params.lambda}&n=${params.n}&bins=${params.bins}&modo=${modo}`
      }

      if (distribution === "poisson") {
        url = `/simular/poisson?lmbda=${params.lambda}&n=${params.n}&bins=${params.bins}&modo=${modo}`
      }

      if (distribution === "normal") {
        url = `/simular/normal?media=${params.media}&desviacion=${params.desviacion}&n=${params.n}&bins=${params.bins}&modo=${modo}`
      }

      const response = await api.get(url)

      console.log(response.data)

      setResult(response.data)

    } catch (error) {
      console.error("Error en simulación:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Trabaj Práctico 2: Simulación de Variables Aleatorias
        </h1>

        <div className="bg-white p-4 rounded shadow mb-6 text-sm text-gray-700">

            <p className="mb-2">
                Esta aplicación permite simular variables aleatorias utilizando distintas distribuciones probabilísticas.
            </p>

            <p className="mb-2">
                Podés elegir entre dos métodos de generación:
            </p>

            <ul className="list-disc ml-5">
                <li><strong>Manual:</strong> utiliza fórmulas matemáticas clásicas (transformada inversa, Box-Muller, etc.)</li>
                <li><strong>Numpy:</strong> utiliza funciones optimizadas de librerías científicas</li>
            </ul>

            <p className="mt-2">
                Luego se genera un histograma y se aplica una prueba Chi-Cuadrado para validar la distribución.
            </p>

        </div>

        {/* SELECT DISTRIBUCION */}
        <div className="flex gap-4 mb-4">

          <select
            value={distribution}
            onChange={(e) => setDistribution(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="uniforme">Uniforme</option>
            <option value="exponencial">Exponencial</option>
            <option value="poisson">Poisson</option>
            <option value="normal">Normal</option>
          </select>

          {/* SELECT MODO */}
          <select
            value={modo}
            onChange={(e) => setModo(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="manual">Manual (fórmulas)</option>
            <option value="numpy">Numpy (librería)</option>
          </select>

        </div>

        <ParameterForm
          distribution={distribution}
          onSubmit={handleSimulation}
        />

        {result && (
          <div className="mt-6">

            <div className="p-4 bg-white rounded shadow">

              <h2 className="text-xl font-bold mb-2">Resultado</h2>

              <p><strong>Distribución:</strong> {result.distribucion}</p>
              <p><strong>Modo:</strong> {result.modo}</p>
              <p><strong>Chi²:</strong> {result.resultado_chi2.chi2}</p>
              <p><strong>p-value:</strong> {result.resultado_chi2.p_value}</p>

              <p>
                <strong>Interpretación:</strong>{" "}
                {result.resultado_chi2.p_value > 0.05
                    ? "El generador es válido (no se rechaza H0)"
                    : "El generador no se ajusta a la distribución"}
                </p>

              <a
                href={`http://127.0.0.1:8000/results/datos_${result.distribucion}.xlsx`}
                target="_blank"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded"
              >
                Descargar Excel
              </a>

            </div>

            <HistogramChart data={result.datos} />

          </div>
        )}

      </div>
    </div>
  )
}

export default SimulatorPage
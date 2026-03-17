import { useState } from "react"
import ParameterForm from "../components/ParameterForm"
import api from "../services/api"

function SimulatorPage() {

  const [distribution, setDistribution] = useState("uniforme")
  const [result, setResult] = useState(null)

  const handleSimulation = async (params) => {

    let url = ""

    if (distribution === "uniforme") {
      url = `/simular/uniforme?a=${params.a}&b=${params.b}&n=${params.n}&bins=${params.bins}`
    }

    if (distribution === "exponencial") {
      url = `/simular/exponencial?lmbda=${params.lambda}&n=${params.n}&bins=${params.bins}`
    }

    if (distribution === "poisson") {
      url = `/simular/poisson?lmbda=${params.lambda}&n=${params.n}&bins=${params.bins}`
    }

    if (distribution === "normal") {
      url = `/simular/normal?media=${params.media}&desviacion=${params.desviacion}&n=${params.n}&bins=${params.bins}`
    }

    const response = await api.get(url)

    setResult(response.data)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-6">
        Laboratorio de Simulación
      </h1>

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

      <ParameterForm
        distribution={distribution}
        onSubmit={handleSimulation}
      />

      {result && (
        <div className="mt-6 p-4 bg-white rounded shadow">

          <h2 className="text-xl font-bold">Resultado</h2>

          <p>Distribución: {result.distribucion}</p>
          <p>Chi²: {result.resultado_chi2.chi2}</p>
          <p>p-value: {result.resultado_chi2.p_value}</p>

        </div>
      )}

    </div>
  )
}

export default SimulatorPage
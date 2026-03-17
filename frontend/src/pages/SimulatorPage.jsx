import { useState } from "react"

function SimulatorPage() {

  const [distribution, setDistribution] = useState("uniforme")

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

    </div>
  )
}

export default SimulatorPage
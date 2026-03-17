import { useState } from "react"

function ParameterForm({ distribution, onSubmit }) {

  const [params, setParams] = useState({
    a: "",
    b: "",
    lambda: "",
    media: "",
    desviacion: "",
    n: "",
    bins: ""
  })

  const handleChange = (e) => {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(params)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">

      {/* Uniforme */}
      {distribution === "uniforme" && (
        <>
          <input name="a" placeholder="a" onChange={handleChange} className="input" />
          <input name="b" placeholder="b" onChange={handleChange} className="input" />
        </>
      )}

      {/* Exponencial */}
      {distribution === "exponencial" && (
        <input name="lambda" placeholder="lambda" onChange={handleChange} className="input" />
      )}

      {/* Poisson */}
      {distribution === "poisson" && (
        <input name="lambda" placeholder="lambda" onChange={handleChange} className="input" />
      )}

      {/* Normal */}
      {distribution === "normal" && (
        <>
          <input name="media" placeholder="media" onChange={handleChange} className="input" />
          <input name="desviacion" placeholder="desviacion" onChange={handleChange} className="input" />
        </>
      )}

      {/* comunes */}
      <input name="n" placeholder="cantidad de datos" onChange={handleChange} className="input" />
      <input name="bins" placeholder="bins" onChange={handleChange} className="input" />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Simular
      </button>

    </form>
  )
}

export default ParameterForm
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)

function HistogramChart({ data }) {

  if (!data || data.length === 0) return null

  // armamos bins simples
  const bins = 10
  const min = Math.min(...data)
  const max = Math.max(...data)
  const step = (max - min) / bins

  let counts = new Array(bins).fill(0)

  data.forEach((value) => {
    let index = Math.floor((value - min) / step)
    if (index >= bins) index = bins - 1
    counts[index]++
  })

  const labels = counts.map((_, i) =>
    `${(min + i * step).toFixed(1)}`
  )

  const chartData = {
    labels,
    datasets: [
      {
        label: "Frecuencia",
        data: counts
      }
    ]
  }

  return (
    <div className="mt-6">
      <Bar data={chartData} />
    </div>
  )
}

export default HistogramChart
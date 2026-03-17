import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

function HistogramChart({ data }) {

  if (!data || data.length === 0) return null

  // Crear bins (histograma simple)
  const bins = 10
  const min = Math.min(...data)
  const max = Math.max(...data)
  const step = (max - min) / bins

  const labels = []
  const counts = new Array(bins).fill(0)

  for (let i = 0; i < bins; i++) {
    labels.push((min + i * step).toFixed(2))
  }

  data.forEach(value => {
    const index = Math.min(
      Math.floor((value - min) / step),
      bins - 1
    )
    counts[index]++
  })

  const chartData = {
    labels,
    datasets: [
      {
        label: "Frecuencia",
        data: counts,
        backgroundColor: "rgba(59, 130, 246, 0.6)", // azul Tailwind
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 1,
        borderRadius: 6,
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) =>
            `Frecuencia: ${context.raw}`
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Valores"
        }
      },
      y: {
        title: {
          display: true,
          text: "Frecuencia"
        },
        beginAtZero: true
      }
    }
  }

  return (
    <div className="mt-6 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-4 text-center">
        Histograma de la distribución
      </h3>

      <Bar data={chartData} options={options} />
    </div>
  )
}

export default HistogramChart
import React, { useEffect, useState } from 'react'
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip,
  ChartOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { datasetObject } from '../ChartLineSample/config'

Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

const BitcoinChartYear = () => {
  const labels = []
  for (let i = 1; i < 366; i++) {
    labels.push(`${i}`)
  }

  const [chartData, setChartData] = useState(null)
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        align: 'center' as const,
        labels: {
          color: 'white',
        },
      },
    },
  }

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=365&interval=week'
    )
      .then((res) => res.json())
      .then((data) => {
        const dataset: any = datasetObject('info', data.prices.length)
        dataset.label = 'Bitcoin'
        dataset.data = data.prices.map((p) => Math.round(p[1]))
        console.log({ dataset })

        setChartData({ labels, datasets: [dataset] })
      })
  }, [])

  if (chartData) {
    return <Line options={options} data={chartData} className="h-96" />
  }
  return null
}

export default BitcoinChartYear

import React from 'react'
import {
    Chart as ChartJS,
    BarElement,CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'





import {Bar} from 'react-chartjs-2'

ChartJS.register
(
    BarElement,CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)

const TransactionBarGraph = ({savings,expenses,investments}) => {
    const data={
        labels:['Savings','Expenses','Investments'],
        datasets:[
            {
                label:'Count',
                data:[savings.length,expenses.length,investments.length],
                backgroundColor:['#28a745', '#dc3545', '#ffc107'],
                borderColor:'black',
                borderWidth:1,
                borderRadius:5
            }
        ]
    }
    const options={
        scales: {
            x: { 
              title: {
                display: true,
                text: 'Transaction Types',
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Number of Transactions',
              },
            },
          },

    }
  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default TransactionBarGraph

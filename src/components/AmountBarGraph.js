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

const AmountBarGraph = ({savings,expenses,investments}) => {
    const data={
        labels:['Savings','Expenses','Investments'],
        datasets:[
            {
                label:'Amount',
                data:[savings,expenses,investments],
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
                text: 'Amount',
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

export default AmountBarGraph

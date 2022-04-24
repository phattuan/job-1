/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/doughnut_chart.css'

export default function Doughnut_Chart(props) {
  return (
    <div className='container_chart'>
    <svg viewBox="0 0 36 36" class="circular-chart">
       <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        stroke-dasharray={props.chart_solieu}
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
      <img src={props.image}></img>
    </div>
  )
}

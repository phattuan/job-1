/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/doughnut_chart.css'



// let container_detail_chart = document.querySelector('.container_chart .container_detail_chart');;

// container_detail_chart.addEventListener('onmouseover',show_detail_chart);
// container_detail_chart.addEventListener('onmouseout',hidden_detail_chart);

// function show_detail_chart(){
//   container_detail_chart.classList.add('active');
// }
// function hidden_detail_chart(){
//   container_detail_chart.classList.remove('active');
// }
export default function Doughnut_Chart(props) {
  let percent = `${(props.chart_solieu * 440)/100} 440`
  let percent_1 = `${(props.chart_solieu * 220)/100} 220`
  let detail_percent = Number.isInteger(props.chart_solieu);
  console.log(detail_percent)
  return (
    <div className='container_chart'>
      <svg class="circular-chart">
        <circle r="70" cx="70" cy="70" class="pie_bg"/>
        <circle r="35" cx="70" cy="70" class="pie" stroke-dasharray={percent_1}/>
        <circle r="70" cx="70" cy="70" class="pie_bor" stroke-dasharray={percent}/>
      </svg>
      <img src={props.image}></img>
      <div className='container_detail_chart'>
        <span className='circle circle_green'></span>
        <span className='note'>{props.chart_solieu}%</span>
        <span className='circle circle_blue'></span>
        <span className='note'>{Math.round((100 - props.chart_solieu) * 100) / 100}%</span>
      </div>
    </div>
  )
}



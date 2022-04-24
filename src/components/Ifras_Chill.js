/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/ifras_chill.css'
import Doughnut_Chart from './Doughnut_Chart'

export default function Ifras_Chill(props) {
    return (
        <div className='contaier_ifras_chill'>
            <Doughnut_Chart chart_solieu={props.chart_solieu} image={props.image}/>
            <div className='container_row'>
                <span>{props.so}<span id='donvi'>{props.donvi}</span></span>

                <span style={{ textTransform: 'uppercase' }}>{props.name}</span>
            </div>
            <div className='container_row container_border_row'>
                <div className='contaier_row_chill'>
                    <span>vietnam</span>
                    <span>7,423</span>
                </div>
                <div className='contaier_row_chill'>
                    <span>foregin</span>
                    <span>1,920</span>
                </div>
                <div className='border border_top_left'></div>
                <div className='border border_top_right'></div>
                <div className='border border_bottom_left'></div>
                <div className='border border_bottom_right'></div>
            </div>
        </div>
    )
}

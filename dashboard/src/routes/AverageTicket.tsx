
// AverageTicket.tsx
import { useState, useRef, useEffect } from 'react'
import { monthlyProfit, monthlySells, months } from '../dados'
import { Lower } from '../utils/Lower'
import { downgrade } from '../utils/BiggerDowngrade'
import { calc } from '../utils/Media'
import * as d3 from "d3"

import MoreInfo from '../components/MoreInfo'

import "./AverageTicket.css"



const radio = 9/16

const AverageTicket = () => {

    const ticket: number[] = []

    for (let i = 0;  i < 12; i ++) {
        const calc = monthlyProfit[i] / monthlySells[i]
        ticket.push(Math.round(calc))
    }


    const [width, setWidth] = useState(0)
    const divRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if(divRef.current){
            setWidth(divRef.current.offsetWidth + 100 )
        }
    }, [])

    const height = width * radio 
    const chartHeight = (height * 2) / 4

    const margin = {top: 20, left: 27, right: 30, bottom: 50}
    const innerWidth = width - margin.left - margin.right
    const innerHeight = chartHeight - margin.top - margin.bottom

    const max = Math.max(...ticket)
    
    const yScale = d3.scaleLinear().domain([0, max]).range([innerHeight, 0])
    const xScale = d3.scaleLinear().domain([0, ticket.length - 1]).range([0, innerWidth])

    const line = d3.line<number>().y((d) => yScale(d)).x((_, i) => xScale(i)).curve(d3.curveCardinal.tension(0.3))

    const area = d3.area<number>().x((_, i) => xScale(i)).y0(innerHeight).y1((d) => yScale(d)).curve(d3.curveCardinal.tension(0.3))

    const svgLine = line(ticket) || ""
    const svgArea = area(ticket) || ""

    const yTicks = yScale.ticks(5)


    const lower = Lower(ticket)
 
    const {media, totalNumber} = calc(ticket)

    const {down_grade, position} = downgrade(ticket)
    
    
    return (
        <div className='container-ticket' ref={divRef}>
            <svg width={width} height={height}>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#646cffaa" stopOpacity={0.7}/>
                    <stop offset="100%" stopColor="#646cffaa" stopOpacity={0}/>
                </linearGradient>
                <g transform={`translate(${margin.left},${margin.top})`}>
                    {
                        yTicks.map((d, i) => (
                            <text
                                key={i}
                                x={-10}    
                                y={yScale(d)}
                                fontSize={10}
                                fill='white'
                                textAnchor='end'
                                alignmentBaseline='middle'                   
                            >
                                {d}
                            </text>
                        ))
                    }
                    {
                        ticket.map((_, i) => (
                            <text
                                key={i}
                                x={xScale(i)}
                                y={innerHeight + 15}
                                fill='white'
                                textAnchor='end'
                                alignmentBaseline='middle'
                                
                            >
                                {months[i % months.length]}
                            </text>
                        ))
                    }
                    <path d={svgArea} stroke='none' fill="url(#gradient)"/>
                    <path d={svgLine} stroke='#646cffaa' fill='none'/>
                </g>
            </svg>
            <div className='more-info-div'>
                    
                    <MoreInfo title={"Ticked médio"} totalNumber={totalNumber.toString()} down_grade={down_grade} media={media} lower={lower} months={months} position={position}/>
            </div>
        </div>
    )
}

export default AverageTicket
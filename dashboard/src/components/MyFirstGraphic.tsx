
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useRef, useState } from "react"
import { months } from "../dados"
import * as d3 from "d3"
import "./MyFirstGraphic.css"

type propsTypes = {
    data: number[],
    color: string,
    title: string,
    total: string,
    media: string,
    lower: number,
    downgrade: string,
    position: number 

}

const ratio = 9 / 16

const MyFirstGraphic = ({data, color, title, total, media, lower, downgrade, position}: propsTypes) => {

   
    const [width, setWidth] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        if (containerRef.current){
            console.log(containerRef.current.offsetWidth)

            if (containerRef.current.offsetWidth > 553){
                setWidth(containerRef.current.offsetWidth )
            }
            else{
                setWidth(containerRef.current.offsetWidth -20 )

            }
            
        }
    }, [])

    const height = width * ratio 
    const chartHeight = (height * 2) / 4
    // margens (espaço para labels)
    const margin = {top: 20, right: 20, bottom: 30, left:50}
    const innerWidth = width - margin.left - margin.right
    const innerHeight = chartHeight - margin.top - margin.bottom

    const max = Math.max(...data)

    // Escalas 
    const yScale = d3.scaleLinear().domain([0, max]).range([innerHeight, 0])
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, innerWidth])

    const lineFn = d3.line<number>().y((d) => yScale(d)).x((_, i) => xScale(i)).curve(d3.curveCardinal.tension(0.3))

    const areaFn = d3.area<number>().x((_, i) => xScale(i)).y0(innerHeight).y1((d) => yScale(d)).curve(d3.curveCardinal.tension(0.3))

    const svgLine = lineFn(data) ?? ""
    const svgArea = areaFn(data) ?? ""

    const yTicks = yScale.ticks(5)
   
    console.log(width)

  
    return (
        <div className="linechart-container" ref={containerRef}>
            <svg width={width} height={height}>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={color} stopOpacity={0.7}/>
                    <stop offset="100%" stopColor={color} stopOpacity={0}/>
                </linearGradient>
                {/* Translada todo o gráfico para dentro das margens */}
                <g  transform={`translate(${margin.left},${margin.top})`}>
                    {/* Eixo Y */}
                    {
                        yTicks.map((tick, i) => (
                            <text
                                key={i}
                                x={-10}
                                y={yScale(tick)}
                                fontSize={10}
                                fill="white"
                                textAnchor="end"
                                alignmentBaseline="middle"
                            >
                                {tick}
                            </text>
                        ))
                    }
                    {/* Eixo X */}
                    {
                        data.map((_, i) => (
                            <text 
                                key={i}
                                x={xScale(i)}
                                y={innerHeight + 15}
                                fontSize={10}
                                fill="white"
                                textAnchor="middle"
                            >
                                {months[i % months.length]}
                            </text>
                        ))
                    }
                    {/* Linha e área */}
                    <path d={svgArea} stroke="none" fill="url(#gradient)"/>
                    <path d={svgLine} stroke={color} fill="none"/>
                </g>
            </svg>
            <div className="linechart-footer">
                    <h2>{title}</h2>
                    <p>Total: {total}</p>
                    <p>Média dos ganhos: {media}</p>
                    <p>Valor mais baixo: {lower}</p>
                    <p>A maior queda de lucro, de um mês para o outro: {downgrade}, do mês: {months[position]} para {months[position + 1]}</p>
                    
            </div>
        </div>
    )
}

export default MyFirstGraphic
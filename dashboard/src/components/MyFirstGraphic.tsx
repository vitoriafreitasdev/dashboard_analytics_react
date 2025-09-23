
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import "./MyFirstGraphic.css"

type propsTypes = {
    data: number[],
    color: string,
    title: string,
    subtitle: string,
    total: string,
}

const ratio = 9 / 16

const MyFirstGraphic = ({data, color, title, subtitle, total}: propsTypes) => {
    console.log(data)
    const [width, setWidth] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)


    useEffect(() => {
        if (containerRef.current){
            setWidth(containerRef.current.offsetWidth / 2)
        }
    }, [containerRef.current])

    const height = width * ratio 
    const chartHeight = (height * 2) / 4
 // margens (espaço para labels)
    const margin = {top: 20, right: 20, bottom: 30, left:40}
    const innerWidth = width - margin.left - margin.right
    const innerHeight = chartHeight - margin.top - margin.bottom

    const max = Math.max(...data)

    // Escalas 
    const yScale = d3.scaleLinear().domain([0, max]).range([innerHeight, 0])
    const xScale = d3.scaleLinear().domain([0, data.length - 1]).range([0, innerHeight])

    const lineFn = d3.line<number>().y((d) => yScale(d)).x((_, i) => xScale(i)).curve(d3.curveCardinal.tension(0.3))

    const areaFn = d3.area<number>().x((_, i) => xScale(i)).y0(innerHeight).y1((d) => yScale(d)).curve(d3.curveCardinal.tension(0.3))

    const svgLine = lineFn(data) ?? ""
    const svgArea = areaFn(data) ?? ""

    const yTicks = yScale.ticks(5)
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    
    return (
        <div className="linechart-container" ref={containerRef}>
            {/* continuar aqui */}
        </div>
    )
}

export default MyFirstGraphic
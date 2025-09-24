import "./ActiveUsersActive.css"
import * as d3 from "d3"
import { monthlyActiveUsers } from "../dados"
import { useRef, useEffect } from "react"

const ActiveUsers = () => {
    const svgRef = useRef(null)
    const data = monthlyActiveUsers
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    
    useEffect(() => {
        if (!svgRef.current) return
        
        // Limpa SVG existente
        d3.select(svgRef.current).selectAll("*").remove()
        
        const svg = d3.select(svgRef.current)
            .attr("width", 700)
            .attr("height", 350) // Aumentei a altura para caber os meses

        // Escalas
        const xScale = d3.scaleBand()
            .domain(data.map((d, i) => i))
            .range([0, 700])
            .padding(0.1)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([300, 0])

        // Barras
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => xScale(i))
            .attr("y", d => yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("height", d => 300 - yScale(d))
            .attr("fill", "green")
            
            
        // VALORES dentro das barras
        svg.selectAll(".value-label")
            .data(data)
            .enter()
            .append("text")
            .text(d => d)
            .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2)
            .attr("y", d => yScale(d) + 15) // Dentro da barra
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")

        // MESES abaixo das barras
        svg.selectAll(".month-label")
            .data(data)
            .enter()
            .append("text")
            .text((d, i) => months[i % months.length]) // Correto: por elemento
            .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2)
            .attr("y", 320) // Abaixo das barras
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "11px")

    }, [data])

    return (
        <div className="active-users">
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default ActiveUsers
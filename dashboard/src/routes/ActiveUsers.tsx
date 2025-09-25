/* eslint-disable react-hooks/exhaustive-deps */

import * as d3 from "d3"
import { monthlyActiveUsers } from "../dados"
import { useRef, useEffect } from "react"
import { Lower } from '../utils/Lower'
import { downgrade } from '../utils/BiggerDowngrade'
import { calc } from '../utils/Media'

import "./ActiveUsers.css"

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
            .attr("height", 350)

        // Escalas CORRIGIDAS
        const xScale = d3.scaleBand()
            .domain(months.slice(0, data.length)) // ← Usar os meses como domínio
            .range([0, 700])
            .padding(0.1)

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data) || 0]) // ← Adiciona fallback
            .range([300, 0])

        // Barras
        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (_, i) => xScale(months[i]) || 0) // ← Usar meses como referência
            .attr("y", d => yScale(d))
            .attr("width", xScale.bandwidth())
            .attr("height", d => 300 - yScale(d))
            .attr("fill", "#646cffaa")
        
        
        // VALORES dentro das barras
        svg.selectAll(".value-label")
            .data(data)
            .enter()
            .append("text")
            .text(d => d)
            .attr("x", (_, i) => (xScale(months[i]) || 0) + xScale.bandwidth() / 2)
            .attr("y", d => yScale(d) + 15)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")

        // MESES abaixo das barras
        svg.selectAll(".month-label")
            .data(data)
            .enter()
            .append("text")
            .text((_, i) => months[i])
            .attr("x", (_, i) => (xScale(months[i]) || 0) + xScale.bandwidth() / 2)
            .attr("y", 320)
            .attr("text-anchor", "middle")
            .attr("fill", "white")
            .attr("font-size", "11px")

    }, [data, months])
   

  const lower = Lower(data)
 
  const {media, totalNumber} = calc(data)

  const {down_grade, position} = downgrade(data)
    return (
        <div className="active-users">
            <div>
                <svg ref={svgRef}></svg>
            </div>
            <div className="data-container">
                <h2>Usuários ativos</h2>
                <p>Mês com mais usuário: {totalNumber}</p>
                <p>Média: {media}</p>
                <p>Mais baixo: {lower}</p>
                <p>Maior queda de seguidores: {down_grade} no mês: {months[position]} para o mês: {months[position + 1]}</p>
            </div>
        </div>
    )
}

export default ActiveUsers
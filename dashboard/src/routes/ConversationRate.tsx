
// ConversationRate.tsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef } from "react"
import { monthlySells, monthlyVisators, months } from "../dados"
import { Lower } from '../utils/Lower'
import { downgrade } from '../utils/BiggerDowngrade'
import { calc } from '../utils/Media'

import * as d3 from "d3"

import "./ConversationRate.css"

const ConversationRate = () => {
  const svgRef = useRef(null)


  const conversionRate: number[] = []
  for(let i = 0; i < 12; i++){
     const conversion = ( monthlyVisators[i] / monthlySells[i] ) * 100 
     conversionRate.push(Math.round(conversion))
  }

  useEffect(() => {
    if (!svgRef.current) return
        const width: number = 500
        const height: number = 350
   
            d3.select(svgRef.current).selectAll("*").remove()

            const svg = d3.select(svgRef.current).attr("width", width).attr("height", height)

            const xScale = d3.scaleBand().domain(months.slice(0, conversionRate.length)).range([0, width]).padding(0.1)

            const yScale = d3.scaleLinear().domain([0, (d3.max(conversionRate) || 0) + 1]).range([height - 50, 0])

            // aqui desenha o grafico 
            svg.selectAll("rect")
              .data(conversionRate)
              .enter()
              .append("rect")
              .attr("x", (_, i) => xScale(months[i]) || 0)
              .attr("y", (d, _) => yScale(d))
              .attr("width", xScale.bandwidth())
              .attr("height", d => 300 - yScale(d) )
              .attr("fill", "#646cffaa")

            svg.selectAll(".value-label")
              .data(conversionRate)
              .enter()
              .append("text")
              .text(d => d + '%')
              .attr("x", (_, i) => (xScale(months[i]) || 0) + xScale.bandwidth() / 2 )
              .attr("y", d => yScale(d) - 15)
              .attr("text-anchor", "middle")
              .attr("fill", "white")
              .attr("font-size", "12px")
              .attr("font-weight", "bold")

              svg.selectAll(".month-label")
                .data(conversionRate)
                .enter()
                .append("text")
                .text((_, i) => months[i])
                .attr("x", (_, i) => (xScale(months[i]) || 0) + xScale.bandwidth() / 2)
                .attr("y", 320)
                .attr("text-anchor", "middle")
                .attr("fill", "white")
                .attr("font-size", "12px")
                .attr("font-weight", "bold")
    
          
           
        
   
    

  }, [conversionRate])
  
  const lower = Lower(conversionRate)
 
  const {media, totalNumber} = calc(conversionRate)

  const {down_grade, position} = downgrade(conversionRate)
  return (
    <div className="conversation-div">
      <div><svg ref={svgRef}></svg></div>
      <div>
                <h2>Taxa de conversão</h2>
                <p>Mês com a maior taxa: {totalNumber}</p>
                <p>Média: {media}</p>
                <p>Mais baixo: {lower}</p>
                <p>Maior queda: {down_grade}% no mês: {months[position]} para o mês: {months[position + 1]}</p>
            </div>
    </div>
  )
}

export default ConversationRate
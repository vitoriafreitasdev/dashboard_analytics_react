import { useState } from "react"
import {View} from "react-native"
import {Svg, Path} from "react-native-svg"
import * as d3 from "d3"

import {styles} from "./style"


type LineChartProps = {
    data: number[]
    color: string
    title: string
    subtitle: string
}

const CHART_ASPECT_RATIO = 9 / 16

export function LineChart(props: LineChartProps){
    const [width, setWidth] = useState(0)

    const height = width * CHART_ASPECT_RATIO
    const chartHeight = (height * 2) / 4

    const min = Math.min(...props.data)
    const max = Math.max(...props.data)

    const yScale = d3.scaleLinear().domain([min, max]).range([chartHeight, 0])
    const xScale = d3.scaleLinear().domain([0, props.data.length - 1]).range([0, width])

    const lineFn = d3.line<number>().y((d, i) => yScale(d)).x((d, i) => xScale(i)).curve(d3.curveCardinal.tension(0.3))

    const AreaFn = d3.area<number>().x((d, i) => xScale(i)).y((d, i) => yScale(d)).curve(d3.curveCardinal.tension(0.3))

    const svgLine = lineFn(props.data) ?? ""


    return(
        <View style={styles.container} onLayout={(({nativeEvent}) => setWidth(nativeEvent.layout.width))}>
            <Svg width={width} height={height} viewBox={`0 0 ${width} $${height - 12}`}>
                <Path d={svgLine} stroke={props.color} fill="none" strokeWidth={4}/>
            </Svg>
        </View>
    )
}
import React from 'react';

import './styles.css';

interface PropsInfo {
    value?: number,
    valuelabel: string,
    size: number,
    strokewidth: number
}

const MyDonutChart = (props: PropsInfo) => {
    const halfsize = (props.size * 0.5);
    const radius = halfsize - (props.strokewidth * 0.5);
    const circumference = 2 * Math.PI * radius;
    const strokeval = ((props.value! * circumference) / 100);
    const dashval = (strokeval + ' ' + circumference);

    const trackstyle = {strokeWidth: props.strokewidth};
    const indicatorstyle = {
        strokeWidth: props.strokewidth,
        strokeDasharray: dashval,
        stroke: props.value! > 55 ? 'red' : props.value! > 45 ? 'yellow' : '#009688' 
    }
    const rotateval = 'rotate(-90 '+halfsize+','+halfsize+')';

    return (
        <svg width={props.size} height={props.size} className="donutchart">
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle} className="donutchart-track"/>
            <circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle} className="donutchart-indicator"/>
            <text className="donutchart-text" x={halfsize} y={halfsize} style={{textAnchor:'middle'}} >
                <tspan className="donutchart-text-val">{props.value}</tspan>
                <tspan className="donutchart-text-percent">%</tspan>
                <tspan className="donutchart-text-label" dy="0.5em" x={halfsize} y={halfsize+10} fill="#0F084B">{props.valuelabel}</tspan>
            </text>
        </svg>
    );
}

export default MyDonutChart;
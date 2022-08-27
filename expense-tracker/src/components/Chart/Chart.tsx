import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

export type DataPoint = {
    value: number;
    label: string;
};

type propsChart = {
    dataPoints: DataPoint[];
};

const Chart: React.FC<propsChart> = (props) => {
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    key={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;

// Task 2: Create the Reusable ChartComponent
import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ type, data, options})=> {
    const chartRef = useRef(null); //use ref and use effect to manage chart lifecycle
    const chartInstanceRef =useRef(null);
    
    useEffect(()=> {
        const ctx = chartRef.current.getContext('2d');
        if (chartInstanceRef.current){
            chartInstanceRef.current.destroy();
        }
        chartInstanceRef.current = new Chart(ctx, {// accepts type, data, options as props
            type,
            data,
            options
        });
        return ()=> {
            if (chartInstanceRef.current){
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [type, data, options]

    );
    return <canvas ref={chartRef}></canvas>;
}
export default ChartComponent
// Task 3: Implement Specific Chart Components
import ChartComponent from "./ChartComponent";
const BarChart = ({data})=> {
    const barChartData ={
        labels: financial_data.months,
        datasets: [
            {
                label: 'Monthly Sales', //labels and data
                data: financial_data.sales,
                backgroundColor: 'rgba(94, 41, 255, 0.5)',
                borderColor: 'rgba(94, 41, 255, 1)',
                borderWidth: 1,
            },
        ],
    };
    const barChartOptions ={
        scales:{ //chart options
            y: {
                beginAtZero: true,
            },
        },
    };
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions}/>;

};
export default BarChart;
// Task 3: Implement Specific Chart Components
import ChartComponent from "./ChartComponent";
const LineChart = ({data})=> {
    const lineChartData = {
        labels: financial_data.profits,
        datasets: [
            {
                label: 'Monthly Profits', //labels and data
                data: financial_data.profits,
                backgroundColor:'rgba(150, 38, 38, 0.5)',
                borderColor:'rgba(150, 38,38,1)',
                borderWidth: 1,
            },
        ],
    };

    const lineChartOptions ={
        scales: { //chart options
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };
    return <ChartComponent type= 'line' data={lineChartData} options ={lineChartOptions}/>;
};
export default LineChart;
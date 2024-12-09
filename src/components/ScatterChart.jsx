//Task 3: Implement Specific Chart Components
import ChartComponent from "./ChartComponent";
const scatterChart = ({data})=> {
    const scatterChartData ={
        labels: financial_data.expenses, financial_data,profits,
        datasets: [
            {
                label: 'Expenses',
                data: financial_data.expenses,

                label: 'Profits',
                data: financial_data.profits,

                backgroundColor:'rgba(32, 201, 142, 0.5)',
                borderColor:'rgba(32, 201, 142, 1)',
                borderWidth: 1,
            },
        ],
    };

    const scatterChartOptions ={
        scales: {
            x: {
                beginAtZero:true,
            },
            y: {
                beginAtZero: true,
            },
        },
    }; return <ChartComponent type='scatter' data={scatterChartData} options={scatterChartOptions}/>;

};
export default scatterChart;
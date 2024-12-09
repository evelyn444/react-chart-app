// Task 3: Implement Specific Chart Components
import ChartComponent from "./ChartComponent";
const bubbleChart = ({data})=> {
    const bubbleChartData ={
        labels: financial_data.expenses, financial_data,profits,
        datasets:[
            {
                label: 'Expenses',
                data: financial_data.expenses,
                
                label: 'Profits',
                data: financial_data.profits,

                label: 'Sales',
                data: financial_data.sales,

                backgroundColor: 'rgba(130, 70, 109, 0.5)',
                borderColor: 'rgba(130, 70, 109, 1)',
                borderWidth: 1,
            },
           

        ],

    };
    const BubbleChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return <ChartComponent type="bubble" data={bubbleChartData} options={BubbleChartOptions}/>;
};
export default bubbleChart;
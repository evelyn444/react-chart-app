// Task 4: Fetch Data for Charts
import { useState } from 'react'
import '/App.css'

import BarChart from './components/BarChart'
import bubbleChart from './components/BubbleChart'
import scatterChart from './components/ScatterChart'
import lineChart from './components/LineChart'

const[chartData, setChartData] = useState(null);
useEffect(()=> {
  fetch ('/financial_data.json') //fetching from json
  .then((response)=> response.json())
  .then((data)=> setChartData(data));
}, []);


// Task 5: Render Charts in the App
if (!chartData) {
  return <div>Loading</div>;
};
return (
  <div style={{textAlign: 'center'}}>
  <h1> Interactive Charts with React and Chart.js </h1>
  <BarChart data={chartData}/>
  <lineChart data={chartData}/>
  <scatterChart data={chartData}/>
  <bubbleChart data={chartData}/>
  </div>
);
export default App;

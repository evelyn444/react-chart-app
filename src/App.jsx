// Task 4: Fetch Data for Charts
import { useState } from 'react'
import '/App.css'

import BarChart from './components/BarChart'
import bubbleChart from './components/BubbleChart'
import scatterChart from './components/ScatterChart'
import lineChart from './components/LineChart'

const[chartData, setChartData] = useState(null);
useEffect(()=> {
  fetch ('/financial_data.json')
  .then((response)=> response.json())
  .then((data)=> setChartData(data));
}, []);

if (!chartData){
  return <div>Loading</div>
}

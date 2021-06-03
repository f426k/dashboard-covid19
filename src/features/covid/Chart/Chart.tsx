import React from 'react';
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";


const Chart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
  <Line 
    data={{
    labels: dates.map((date) => 
      (new Date(date).getFullYear()) + "-" + (new Date(date).getMonth()+1) + "-" + (new Date(date).getDate())),
      datasets: [
        {
          data: daily.map((data) => data.Confirmed),
          label: "感染者数",
          borderColor: "#3EC1D3",
          showLine: false,
        },
        {
          data: daily.map((data) => data.Recovered),
          label: "回復者数",
          borderColor: "#a1de93",
          showLine: false,
        },
        {
          data: daily.map((data) => data.Deaths),
          label: "死者数",
          borderColor: "#f38181",
          showLine: false,
        },
      ]
    }}
  />
  )
  return (
    <div className={styles.container}>
      {lineChart}
    </div>
  )
}

export default Chart

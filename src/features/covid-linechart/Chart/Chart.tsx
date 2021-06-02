import React from 'react';
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectData, selectDailyData, selectCountry } from "../covidSlice";

const Chart: React.FC = () => {
  const data = useSelector(selectData);
  const dailyData = useSelector(selectDailyData);
  const country = useSelector(selectCountry);

  const barChart = data && (
    <Bar
    data={{
      labels: ["感染者", "回復者", "死者"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "#3EC1D3",
            "#a1de93",
            "#f38181",
          ],
          data: [
            data.confirmed.value,
            data.recovered.value,
            data.deaths.value,
          ],
        },
      ],
    }}
    options={{
      legend: { display: false },
      title: { display: true, text: `Latest status in ${country}` }
    }}
    />
  );

  const lineChart = dailyData[0] && (
    <Line 
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: "感染者",
            borderColor: "#3EC1D3",
            fill: "true",
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: "死者",
            borderColor: "#f38181",
            fill: "true",
          },
        ]
      }}
    />
  )

  return (
    <div className={styles.container}>
      {country.length ? barChart : lineChart}
    </div>
  );
};

export default Chart

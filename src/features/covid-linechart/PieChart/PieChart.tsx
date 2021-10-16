import React from 'react';
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectData } from "../covidLinechartSlice";


const PieChart: React.FC = () => {
  const data = useSelector(selectData);
  const motality = 
  data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

  const pieChart = data && (
    <Doughnut 
      data = {{
        labels: ["感染者", "死者"],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.deaths.value,
            ],
            backgroundColor: [
              "#3EC1D3",
              "#f38181",
            ],
            hoverBackgroundColor: ["#37adbd", "#da7474"],
            borderColor: ["transparent", "transparent"]
          },
        ],
      }}
      options={{
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
          },
        },
      }}
    />
  )

  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          致死率 {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  )
}

export default PieChart

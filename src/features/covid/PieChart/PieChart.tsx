import React from 'react';
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";


const PieChart: React.FC = () => {
  const daily = useSelector(selectDaily);
  const motality = 
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

    const pieChart = daily[0] && (
      <Doughnut 
        data = {{
          labels: ["感染者数", "死者数"],
          datasets: [
            {
              data: [
                daily[daily.length - 1].Confirmed,
                daily[daily.length - 1].Deaths,
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
      <Typography align="center" color="textSecondary" gutterBottom>
        致死率 {motality.toFixed(2)} [%]
      </Typography>
      {pieChart}
    </>
  )
}

export default PieChart

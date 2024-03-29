import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, Grid } from "@material-ui/core";
import styles from "./DashBoard.module.css";
import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import Cards from '../Cards/Cards';
import Chart from '../Chart/Chart';
import PieChart from '../PieChart/PieChart';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
  bar: {
    background: "#38669d"
  }
}));

const DashBoard:React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  var dd = new Date();
  //「年」を取得する
  var YYYY = dd.getFullYear();
  //「月」を取得する
  var MM = dd.getMonth()+1;
  //「日」を取得する
  var DD = dd.getDate();

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("japan"));
  }, [dispatch]);
  return (
    <div>
      <AppBar position="absolute" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 live Dashboard
          </Typography>
          <div>
            <Typography variant="body1">
              {YYYY + "/" + MM + "/" + DD}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
        <Link to="/linechart" className={styles.text}>
          <div className={styles.link}>
            世界の推移を見る
          </div>
        </Link>      
    </div>
  );
};

export default DashBoard

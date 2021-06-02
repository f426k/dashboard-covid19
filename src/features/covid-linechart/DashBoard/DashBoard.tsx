import React, { useEffect } from 'react';
import styles from "./DashBoard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import Cards from '../Cards/Cards';
import PieChart from '../PieChart/PieChart';
import Chart from '../Chart/Chart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const LineDashBoard: React.FC = () => {
  const classes = useStyles();
  var dd = new Date();
  //「年」を取得する
  var YYYY = dd.getFullYear();
  //「月」を取得する
  var MM = dd.getMonth()+1;
  //「日」を取得する
  var DD = dd.getDate();

  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <div>
      {" "}
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Covid 19 Live Dashboard
          </Typography>
          {data && (
            <Typography variant="body1">
              {YYYY + "/" + MM + "/" + DD}
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
      <Link to="/">Home</Link>
    </div>
  )
}

export default LineDashBoard

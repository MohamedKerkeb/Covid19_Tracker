import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Contaminés
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">{new Date(lastUpdate).toTimeString().slice(0, 9)}</Typography> */}
            <Typography variant="body2">Nombre de cas de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Guérisons
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography> */}
            <Typography variant="body2">Nombre de guérisons de COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Morts
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            {/* <Typography color="textSecondary">{new Date(lastUpdate).toLocaleDateString()}</Typography> */}
            <Typography variant="body2">Nombre de morts à cause COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

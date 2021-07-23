import React from "react";
import { Typography, Container, Grid, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
// import { blue } from '@material-ui/core/colors';

const Footer = () => {
  const classes = useStyles();
  return (
    <>
            <div className={classes.appBarSpacer} />
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography variant="h6" align="center" gutterBottom>
              CONTACT US
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
            >
              <p>(306) 949-9121</p>
              <p>info@alehsaanhousing.ca</p>
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} lg={6} align="center">
            <Typography variant="h6" align="center" gutterBottom>
              FOLLOW US
            </Typography>
            <IconButton>
              <TwitterIcon
                color="primary"
                style={{ fontSize: 40, margin: 20 }}
              />
            </IconButton>

            <IconButton>
              <FacebookIcon
                color="primary"
                style={{ fontSize: 40, margin: 20}}
              />
            </IconButton>
            <IconButton>
              <InstagramIcon
                color="secondary"
                style={{ fontSize: 40, margin: 20 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
    </>
  );
};

export default Footer;

import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

function Welcome() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            backgroundColor: "#926AA6",
            paddingLeft: "30px",
            height: "20vh",
          }}
        >
          <Paper
            style={{
              marginTop: "5vh",
              marginLeft: "30%",
              width: "50vw",
              height: "10vh",
            }}
          >
            <Typography variant="h5" style={{ padding: "2vh" }}>
              Hey User, welcome to your Dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",
            backgroundColor: "#E9897E",
            paddingLeft: "30px",
            height: "80vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              textAlign: "center",
              backgroundColor: "#FDAC53",
              paddingLeft: "30px",

              height: "100%",
            }}
          >
            here create your classes
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              textAlign: "center",
              backgroundColor: "#00A170",
              paddingLeft: "30px",
              height: "100%",
            }}
          >
            here view your classes
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Welcome;

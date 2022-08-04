import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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

            paddingLeft: "30px",
            height: "100%",
          }}
        >
          here something goes like welcome message on paper
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          style={{
            textAlign: "center",

            paddingLeft: "30px",
            height: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            style={{
              textAlign: "center",

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

import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";

function Welcome() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            textAlign: "center",
            backgroundColor: "#926AA6",
            paddingLeft: "30px",
            height: "20vh",
          }}
        >
          <Paper
            style={{
              display: "flex",
              marginTop: "2vh",
              marginLeft: "27%",
              width: "50vw",
              height: "15vh",
              marginBottom: "5vh",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{ padding: "2vh", marginTop: "2vh", color: "#926AA6" }}
            >
              <strong>Hey User, welcome to your Dashboard</strong>
            </Typography>
          </Paper>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            textAlign: "center",
            backgroundColor: "#E9897E",
            padding: "30px",
            height: "80vh",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            align="center"
            style={{
              textAlign: "center",
              backgroundColor: "#FDAC53",
            }}
          >
            <Link to="create" style={{ textDecoration: "none" }}>
              <Paper
                elevation={23}
                style={{
                  marginLeft: "27%",
                  marginTop: "12vh",
                  width: "50%",
                  height: "50%",
                  marginBottom: "20px",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ paddingTop: "25%" }} align="center">
                  {" "}
                  Create class here
                </Typography>
              </Paper>
            </Link>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            xl={6}
            align="center"
            style={{
              textAlign: "center",
              backgroundColor: "#00A170",
            }}
          >
            <Link to="view" style={{ textDecoration: "none" }}>
              <Paper
                elevation={23}
                style={{
                  marginTop: "12vh",
                  marginLeft: "27%",

                  width: "50%",
                  height: "50%",
                  marginBottom: "20px",
                  justifyContent: "center",
                }}
              >
                <Typography style={{ paddingTop: "25%" }} align="center">
                  {" "}
                  View class here
                </Typography>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Welcome;

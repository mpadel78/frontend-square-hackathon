import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";

function CreateClass() {
  return (
    <>
      {" "}
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
              style={{ padding: "2vh", marginTop: "1vh", color: "#926AA6" }}
            >
              <strong>Hey User, Create your class offering</strong>
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
            height: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            xl={12}
            align="center"
            style={{
              textAlign: "center",
              backgroundColor: "#FDAC53",
              height: "100vh",
            }}
          >
            <Paper
              elevation={23}
              style={{
                margin: "3vw",
                marginTop: "2vh",
                width: "93%",
                height: "90%",
                marginBottom: "20px",
                justifyContent: "center",
              }}
            >
              <form>
                <Grid
                  container
                  spacing={1}
                  direction={"column"}
                  alignItems={"center"}
                  style={{
                    padding: 5,

                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "inline-block",
                  }}
                >
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                      Add music/ dance class
                    </Typography>
                    <br />
                    <br />
                  </Grid>

                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                      label="Class Name"
                      type="text"
                      autoFocus
                      required
                    ></TextField>
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField label="Music Type" required></TextField>
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField label="Zoom link" required></TextField>
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                      id="date"
                      label="Start Date"
                      type="date"
                      sx={{ width: 200 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                      id="date"
                      label="End Date"
                      type="date"
                      sx={{ width: 200 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <br />
                  <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                    <TextField
                      label="Times a week?"
                      type="number"
                      required
                    ></TextField>
                  </Grid>

                  <br />

                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      type="submit"
                      style={{
                        borderRadius: 50,
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default CreateClass;

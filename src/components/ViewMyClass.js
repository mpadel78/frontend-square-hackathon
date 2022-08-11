import React, { useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

function ViewMyClass() {
  const records = [
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Piano by Manish",
      type: "Classic Piano",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
    {
      name: "Guitar by Lacey",
      type: "Modern guitar",
      start: "mm/dd/yyyy",
      end: "mm/dd/yyyy",
      frequency: 3,
      zoom: "zoom link",
    },
  ];

  //using UseEffect hooks

  const [info, setInfo] = React.useState(records);

  React.useEffect(() => {
    setInfo(records);
    // eslint-disable-next-line
  }, []);

  const requestSearch = (searchedVal) => {
    const filteredRows = info.filter((row) => {
      return row.item.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setInfo(filteredRows);
    console.log(info);
  };

  const cancelSearch = (searchedVal) => {
    setInfo(records);
  };
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
              <strong>Hey User, View your classes</strong>
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
              backgroundColor: "#00A170",
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
                overflowY: "auto",
              }}
            >
              <TableContainer>
                <Table>
                  <TableHead style={{ backgroundColor: "#926AA6" }}>
                    <TableRow>
                      <TableCell>Class name</TableCell>
                      <TableCell align="center">Music Type</TableCell>
                      <TableCell align="center">Start Date</TableCell>
                      <TableCell align="center">End Date</TableCell>
                      <TableCell align="center">Frequency in a week</TableCell>
                      <TableCell align="center">Zoom Link</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {info.map((res) => (
                      <TableRow>
                        <TableCell component="th" scope="rh">
                          {res.name}
                        </TableCell>
                        <TableCell align="center">{res.type}</TableCell>

                        <TableCell align="center">{res.start}</TableCell>
                        <TableCell align="center">{res.end}</TableCell>
                        <TableCell align="center">{res.frequency}</TableCell>
                        <TableCell align="center">{res.zoom}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ViewMyClass;

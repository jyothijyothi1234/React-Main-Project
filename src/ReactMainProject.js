import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

function Appli() {
  const [userid, setUserId] = useState();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState([]);
  const [isfilter, setIsFilter] = useState("");

  useEffect(() => {
   const FilterData= result.filter((item)=>item.userid !==isfilter)
    setResult(FilterData)
    setIsFilter("")
  
  }, [isfilter,result]);

  return (
    <Grid Container xs={12}>
      <Grid
        Container
        item
        xs={12}
        sx={{
          border: "12px solid white",
          marginTop: "150px",
          paddingBottom: "150px",
          marginLeft: "500px",
          justifyContent: "center",
          marginRight: "500px",
          marginBottom: "150px",
          backgroundColor: "burlywood",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "20px",
            marginTop: "100px",
            paddingRight: "130px",
            marginBottom: "10px",
            marginRight: "100px",
          }}
        >
          User Id:
        </Typography>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="User Id"
          sx={{ marginBottom: "20px", width: "20vw" }}
          onChange={(e) => setUserId(e.target.value)}
        />

        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "20px",
            paddingRight: "145px",
            marginBottom: "10px",
            marginRight: "100px",
          }}
        >
          TASK:
        </Typography>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="New Task..."
          sx={{ marginBottom: "20px", width: "20vw" }}
          onChange={(e) => setTask(e.target.value)}
        />

        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: "20px",
            paddingRight: "90px",
            marginBottom: "10px",
            marginRight: "100px",
           
          }}
        >
          Description:
        </Typography>
      

        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          placeholder="Description"
          defaultValue=""
          sx={{width: "20vw" , marginBottom: "20px"}}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />
        <Button
          sx={{
            backgroundColor: "green",
            color: "white",
            paddingLeft: "70px",
            paddingRight: "70px",
          }}
          onClick={() => setResult([...result, { userid, task, description }])}
        >
          ADD
        </Button>
      </Grid>
      <Headinhg />

      {result.map((item) => (
        <Card
          userid={item.userid}
          task={item.task}
          description={item.description}
          setIsFilter={setIsFilter}
        />
      ))}

    </Grid>
  );
}

function Headinhg() {
  return (
    <Grid Container xs={12}>
      <Grid
        Container
        item
        xs={12}
        sx={{
          border: "0px solid white",
          display: "flex",
          justifyContent: "space-around",
          marginLeft: "150px",
          marginRight: "150px",
          backgroundColor: "blue",
        }}
      >
        <h3>USER ID</h3>
        <h3> TASK </h3>
        <h3> DESCRIPTION </h3>
        <h3> REMOVE </h3>
      </Grid>
    </Grid>
  );
}

function Card(Props) {
  return (
    <Grid
      Container
      xs={12}
      sx={{
        border: "0px solid white",
        display: "flex",
        justifyContent: "space-around",
        marginLeft: "150px",
        marginRight: "150px",
        backgroundColor: "burlywood",
        paddingTop: "100px",
        paddingBottom: "100px",
        marginTop: "0px",
        marginBottom: "0px",
      }}
    >
      <h3>{Props.userid} </h3>
      <p> {Props.task}</p>
      <p> {Props.description} </p>
      <Button
        sx={{
          backgroundColor: "red",
          color: "white",
          borderRadius: "20px",
          height: "2vh",
          width: "6vw",
        }}
        onClick={()=>Props.setIsFilter(Props.userid)}
      >
        close
      </Button>
    </Grid>

  );
}

export default Appli;

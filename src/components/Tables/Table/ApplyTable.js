import React from "react";
// import useStyles from "./styles";
// import moment from "moment";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Title from "../../dashboard/Title"
import { Button} from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const datas=[{
  date:'July 23, 2021',
  firstName:'John',
  lastName:'Doe',
  email:"test9@test.com",
  role:"basic",
  active:'no',
  userId:235300689,
},
{
  date:'July 22, 2021',
  firstName:'John',
  lastName:'Doe',
  email:"test9@test.com",
  role:"basic",
  active:'no',
  userId:235300690,
}
]


const ApplyTable = ({ setCurrentId }) => {
  // const investment = useSelector((state) => state.investment);
  const classes = useStyles();
  // const dispatch = useDispatch();
  const handleEdit=()=>{

  }

  return (
    <div>
      <Title>Apply List</Title>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow textAlign='center'>
              <TableCell align="right">DATE</TableCell>
              <TableCell align="right">FIRST_NAME</TableCell>
              <TableCell align="right">LAST_NAME</TableCell>
              <TableCell align="right">EMAIL</TableCell>
              <TableCell align="right">ROLE</TableCell>
              <TableCell align="right">ACTIVE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow key={data.userId}>
                <TableCell align="right">{data.date}</TableCell>
                <TableCell align="right">{data.firstName}</TableCell>
                <TableCell align="right">{data.lastName}</TableCell>
                <TableCell align="right">{data.email}</TableCell>
                <TableCell align="right">{data.role}</TableCell>
                <TableCell align="right">{data.active}</TableCell>
                <TableCell align="right"  ><Button component={Link} to="/edit">EDIT</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApplyTable;


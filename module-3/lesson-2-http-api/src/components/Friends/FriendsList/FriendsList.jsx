import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

class FriendsList extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow hover>
              <TableCell>First name</TableCell>
              <TableCell align="right">Last name</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.friends.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => this.props.onFriendDeleted(row.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default FriendsList;

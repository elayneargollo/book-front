import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Sytle.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { cadastro } from '../../routes/paths';
import { deleteById, getAllAccount } from "../../services/api/login";
import PersonIcon from '@material-ui/icons/Person';
import Modal from '../../components/modal/Modal';

export default function User() {

  const classes = useStyles();
  const [users, setUsers] = React.useState({ "empty": "true", "dir": [] });
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let history = useHistory();


  useEffect(() => {
    async function getItems() {

      try {
        const { data } = await getAllAccount();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        swal("Ocorreu um erro", "", "error");
      }
    }
    getItems();
  }, []);
  
  const register = () => {
    history.replace(cadastro); 
  }

  const deleteUser = (id) => {
    async function deleteUserId() {
      const response = await deleteById(id);
      swal("", response, "success");
    }
    deleteUserId();
    refreshPage();
  }

  const editUser = (row) => {
    setIsOpen(true);
    setUser(row);
  }

  function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 1000);
  }

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else {

    return (
      <div>
        {isOpen && <Modal user={user} setIsOpen={setIsOpen} />}
        <div className='espacamento'>
          <h1>Registered Users</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow >
                  <StyledTableCell>Username</StyledTableCell>
                  <StyledTableCell align="right">Registration</StyledTableCell>
                  <StyledTableCell align="right">Password</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((row) => (
                  <StyledTableRow key={row.username}>
                    <TableCell component="th" scope="row">
                    {row.username} 
                    </TableCell>
                    <TableCell title="registration user" align="right">{row.id}</TableCell>
                    <TableCell title="password user" align="right">{row.password}</TableCell>
                    <TableCell title="role user" align="right">{row.role}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => deleteUser(row.id)}
                        title="delete user">
                        <DeleteIcon color="error"/>
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        onClick={() => editUser(row)}
                        title="edit user">
                        <EditIcon color="primary"/>
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className='novoUser'>
          <Button 
          size="small" 
          variant="contained" 
          color="primary"
          onClick={() => register()}>
          <PersonIcon/>
           New user
          </Button>
        </div>
      </div>
    );
  }
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


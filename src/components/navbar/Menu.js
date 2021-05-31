import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { livros, login, cadastro, user } from '../../routes/paths';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LockOpen from '@material-ui/icons/LockOpen';
import Home from '@material-ui/icons/Home';
import PersonAdd from '@material-ui/icons/PersonAdd';
import ExitToApp from '@material-ui/icons/ExitToApp';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function ButtonAppBar() {

  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const redirectLogin = () => {
    setAnchorEl(null);
    history.push(login);
  }

  const redirectBook = () => {
    setAnchorEl(null);
    history.push(livros);
  }

  const redirectHome = () => {
    setAnchorEl(null);
    history.push("/");
  }

  const redirectRegister = () => {
    setAnchorEl(null);
    history.push(cadastro);
  }

  const redirectUser = () => {
    setAnchorEl(null);
    history.push(user);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <AppsIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={redirectBook}>
              <MenuBookIcon />
            Book</MenuItem>
            <MenuItem
              onClick={redirectLogin}>
              <LockOpen />
            Login</MenuItem>
            <MenuItem
              onClick={redirectRegister}>
              <PersonAdd />
            Register</MenuItem>
            <MenuItem
              onClick={redirectHome}>
              <Home />
              Home</MenuItem>
            <MenuItem
              onClick={redirectUser}>
              <PersonIcon />
            User</MenuItem>
          </Menu>
          <Button 
          color="inherit" 
          onClick={redirectLogin}>
               <ExitToApp />
            Entrar</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
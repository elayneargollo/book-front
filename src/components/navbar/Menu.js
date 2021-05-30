import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { livros, login, cadastro, user } from '../../routes/paths';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

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
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={redirectBook}>Book</MenuItem>
            <MenuItem onClick={redirectLogin}>Login</MenuItem>
            <MenuItem onClick={redirectRegister}>Register</MenuItem>
            <MenuItem onClick={redirectHome}>Home</MenuItem>
            <MenuItem onClick={redirectUser}>User</MenuItem>
          </Menu>
          <Button color="inherit" onClick={redirectLogin}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
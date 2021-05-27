import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createStyles, makeStyles} from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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

  const handleClick = () => {
    history.push("/login");
  }

  const menu = () => {
    history.push("/livros");
  }

  return (
    <div  className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  className={classes.menuButton}  color="inherit" aria-label="menu">
          <MenuIcon onClick={menu}/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Menu
          </Typography>
          <Button color="inherit" onClick={handleClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
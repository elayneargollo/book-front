import React, { Component } from "react";
import { getBook } from "../../services/api/book";
import '../livros/Sytle.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Imagem from '../../assets/img/imagem.jpg';

export default class Livros extends Component {

  state = {
    books: [],
  }

  async componentDidMount() {
    const result = await getBook();
    this.setState({ books: result })
  }

  render() {

    const { books } = this.state;

    return (
      <div >

        <Grid container spacing={3} justify="center" alignItems="center" display='grid'>
          {books.map(book => (

            <Grid item xs={5}>
              <Paper textAlign='center'>
                <Card>

                  <CardHeader
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={book.title}
                    subheader={book.category}
                  />
                  <div className="media">
                    <CardMedia
                      image={Imagem}
                      title="Paella dish"
                    />
                  </div>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Detalhe
                  </Button>
                    <Button size="small" color="primary">
                      Comprar
                  </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))};
        </Grid>
      </div >
    );
  }
}
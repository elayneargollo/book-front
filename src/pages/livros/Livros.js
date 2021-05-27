import React, { Component } from "react";
import { getBook } from "../../services/api/book";
import '../livros/Sytle.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

export default class Livros extends Component {

  state = {
    books: [],
  }

  async componentDidMount() {
    const result = await getBook();
    this.setState({ books: result })
  }

  comprar = () => {
    alert("criar rota para comprar");
  }

  detalhar = () => {
    alert("criar rota para detalhar");
  }

  render() {

    const { books } = this.state;

    return (
      <div>

        <Grid container spacing={3} justify="center" alignItems="center" display='grid'>
          {books.map(book => (
            <Grid item xs={5}>
              <Paper textAlign='center'>
                <Card className={styles.root}>
                  <CardHeader
                    title={book.title}
                    subheader={book.category}
                  />
                    <CardMedia
                     className={styles.media}
                      image={'imagem.png'}
                      title={book.title}
                      style={styles.media}
                    />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                      </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={this.detalhar.bind(this)}>
                      Detalhe
                  </Button>
                    <Button size="small" color="primary" onClick={this.comprar.bind(this)}>
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

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
};



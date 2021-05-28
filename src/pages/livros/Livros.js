import React, {useState, useEffect} from "react";
import '../livros/Sytle.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { getBook, getBookById } from "../../services/api/book";
import CircularProgress from '@material-ui/core/CircularProgress';
import './Sytle.css'
import swal from 'sweetalert';

export default function ButtonAppBar() {

  const [books, setBooks] = useState({});
  const [loading, setLoading] = useState(true);

  const detalhar = (id) => {
    async function loadBookId() {
      const response = await getBookById(id);
      swal(response.title, response.description, "");
    }
    loadBookId();
  }

  const comprar = (id) => {
    swal("", "fazer rota", "");
  }

  const useStyles = {
    root: {
      maxWidth: 345,
    },
    media: {
      height: 800,
    },
  };

  useEffect(() => {
    async function loadBookAll() {
      const response = await getBook();
      setBooks(response);
      setLoading(false);
    }
    loadBookAll();
  });

  if (loading) {
    return (
      <div>
        <CircularProgress/>
      </div>
    );
  } else {
    return (
      <div  >
        <div>
          <Grid container spacing={3} justify="center" alignItems="center" display='grid'>
            {books.map(book => (
              <Grid item xs={5}>
                <Paper textAlign='center'>
                  <Card className={useStyles.root}>
                    <CardHeader
                      title={book.title}
                      subheader={book.category}
                    />
                    <CardMedia
                      image={book.imagem}
                      title={book.title}
                      style={useStyles.media}
                    />
                    <CardContent>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary"
                        onClick={() => detalhar(book.id)}>
                        Detalhe
                  </Button>
                      <Button size="small" color="primary"
                        onClick={() => comprar(book.id)}>
                        Comprar
                  </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            ))};
        </Grid>
        </div >
      </div>
    );
  }
}
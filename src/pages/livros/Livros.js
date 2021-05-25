import React, { Component } from "react";
import { getBook, getBookById }  from "../../services/api/book";

export default class Livros extends Component {

  state = {
    books: [],
  }

  async componentDidMount() {
    const result = await getBook();
    this.setState({books: result})

    console.log(await getBookById(2)); // getbyid
  }

  render() {

    const { books } = this.state;

    return (
      <div>
        <h1>Listar os filmes</h1>
        { books.map(book => (
          <li key={book.id}>
            <h2>
              {book.title}
            </h2>
            <p>
              <strong>Categoria: </strong>
              {book.category}
            </p>
            <p>
              <strong>Preco: </strong>
              R$ {book.price}
            </p>
            <p>
              <strong>ISBN: </strong>
              {book.isbn}
            </p>
          </li>
        ))};
      </div>
    );
  }
}
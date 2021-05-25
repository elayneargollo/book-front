import React, { Component } from "react";
import { getBook }  from "../../services/api/book";

export default class Livros extends Component {

  state = {
    books: [],
  }

  async componentDidMount() {
    const result = await getBook();
    this.setState({books: result})
  }

  render() {

    const { books } = this.state;

    return (
      <div>
        <h1>Listar os filmes</h1>
        { books.map(book => (
          <li key={book.isbn}>
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
import React from 'react'
import axios from 'axios'
import './App.css'
import { AddBook, BookItem, Header, BookInfo, NavBar, BookDetail } from './components/Layout'
import Author from './components/Author'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      books: [
        { done: true, text: 'book1', id: 1 },
        { done: false, text: 'book2', id: 2 },
        { done: false, text: 'book3', id: 3 }
      ]
    }
  }

  toggleBookDone (bookId) {
    const newBooks = []

    for (const book of this.state.books) {
      if (book.id === bookId) {
        newBooks.push({
          done: !book.done,
          text: book.text,
          id: book.id
        })
      } else {
        newBooks.push(book)
      }
    }
    this.setState({ books: newBooks })
  }

  render () {
    return (
      <div className='App'>
        <div class="title"><Header /></div>
        <div class='body'>
            <div><NavBar /></div>

            <div>
              <AddBook />
            </div>

            <ul>
              <li>{this.state.books.map((book) => (
                <BookItem key={book.id} book={book} toggleBookDone={() => this.toggleBookDone(book.id)} />
              ))}
              </li>
            </ul>

            <div><BookInfo book='How to JS' /></div>
            <div>
              <BookDetail book='book1' />
              <Author />
            </div>
            <br></br>
            <div><BookInfo book='How to Python' /></div>
            <div><BookDetail book='book1' /></div>
            <div><BookInfo book='How to React' /></div>
            <div><BookDetail book='book1' /></div>
        </div>
      </div>
    )
  }
}

export default App

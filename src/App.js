import React from 'react'
import './App.css'
import BookItem from './components/Layout'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      books: [
        { done: true, text: 'Shoelace', id: 1 },
        { done: false, text: 'Bootstrap', id: 2 },
        { done: false, text: 'Bulma', id: 3 }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    alert('a book was submitted: ' + this.state.value)
    event.preventDefault()
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
        <form onSubmit={this.handleSubmit}>
          <label>
          Add New Book:
            <input type='text' value={this.state.books} onChange={this.handleChange} />
          </label>
          <input type='submit' value='Submit' />
        </form>

        <ul>
          <li>{this.state.books.map((book) => (
            <BookItem key={book.id} book={book} toggleBookDone={() => this.toggleBookDone(book.id)} />
          ))}
          </li>
        </ul>
      </div>
    )
  }
}

export default App

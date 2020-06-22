import React from 'react'

function bookLabelClass (book) {
  if (book.done) {
    return 'done'
  } else {
    return 'undone'
  }
}

function BookItem ({ book, toggleBookDone }) {
  return (
    <li key={book.id}>
      <input id={'book-' + book.id} type='checkbox' checked={book.done} onChange={toggleBookDone} />
      <label className={bookLabelClass(book)} htmlFor={'book-' + book.id}>{book.text}</label>
    </li>
  )
}

export default BookItem

export class AddBook extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit (event) {
    alert('you submitted a book: ' + this.state.value)
    event.preventDefault()
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add New Book:
          <input type='text' value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

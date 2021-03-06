import React, { Component } from 'react'

const Header = props => <h1>Welcome to Books</h1>

class NavBar extends Component {
  render () {
    return [
      <span>home | </span>,
      <span> books | </span>,
      <span> about</span>
    ]
  }
}

class BookDetail extends Component {
  render () {
    return [
      <div>
      <h2>book details</h2>
      <h3>Book Info</h3>
      <h5>title: </h5>
      <h5>author: </h5>
      <h5>book description: </h5>
      <h5>URL: </h5>
      <h5>publisher: </h5>
      <h5>publication date: </h5>
      <h5>description: </h5>
      </div>
    ] 
  }
}

const BookInfo = (props) => {
  console.log(props)
  return React.createElement(
    'div',
    { id: 'book.id', className: 'bookInfo' },
    React.createElement('h1', null, 'This book is:'),
    <div>
      <h1>
        "{props.book}"
      </h1>
    </div>
  )
}

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

class AddBook extends React.Component {
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

export {
  Header,
  BookItem,
  BookInfo,
  NavBar,
  BookDetail,
  AddBook
}

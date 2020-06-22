import React, { Component } from 'react'

class Author extends Component {
    constructor() {
        super()
        this.state = {
            author: 'G Lucas'
        }
    }

changeAuthor() {
    this.setState({
        author: 'https://en.wikipedia.org/wiki/George_Lucas' 
    })
}

  render () {
    return (
        <div>
            <h2>{this.state.author} </h2>
            <button onClick={() => this.changeAuthor()}>more info about the author</button>
        </div>
    )
      
    
  }
}

export default Author

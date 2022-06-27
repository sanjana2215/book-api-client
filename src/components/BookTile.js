import React from 'react'
import './BookTile.css'
function BookTile({book}) {
    console.log(book)
  return (
    <div className='tile'>
       <h3> {book.title}</h3>
       <div className='descr'>
       <div className='author'>{book.author}<br/>
       INR {book.price}
       </div>
       <div className='des'>{book.description}</div>
       </div>
    </div>
  )
}

export default BookTile
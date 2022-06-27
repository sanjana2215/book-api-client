import axios from 'axios';
import React, { useState } from 'react'
import BookTile from './BookTile';
import './GetList.css';

function GetList() {
     const [books,setBook]=useState([]);
     const [click,setClick]=useState(false);
     const handleClick=(e)=>{
        if(!click)
       { axios.get('http://localhost:8080/api/books/')
        .then(res=>
            {
                console.log(res.data)
                setBook(res.data)
                console.log(books)
                setClick(true)
            }
        )}
        
     }
  return (
    <div>
    <div className='button' onClick={handleClick}>getList</div>
    <div className="book">
    {books !== [] &&
          books.map((book)=> 
          {return <BookTile book={book}/>}
          )}
      </div>
</div>
  )
}

export default GetList;
import React ,{ useState }from 'react'
import axios from 'axios';
import './AddNew.css'

function AddNew() {
    const [title,setTitle]=useState("");
    const [des,setDes]=useState("");
    const [author,setAuthor]=useState("");
    const [price,setPrice]=useState(0);
    console.log(typeof(price))
    const handleSubmit =(e) =>
    {
        console.log(typeof(price))
        e.preventDefault();
        axios.post(`http://localhost:8080/api/books`, {
            title:title,
            description:des,
            author:author,
            price:Number(price)
        })
      .then(res => {
        console.log(res);
        if(res.status===200)alert("Created Successfully!!");
        else alert("Unsuccessfu!!");

      })
        setAuthor("");
        setPrice(0); setTitle(""); setDes("");
    }
  return (
    <div className='bodyadd'>
        <div className='add'>
            <h1>Add a new book</h1></div>
        <div className='form'>
            <form onSubmit={handleSubmit}> 
        <div><h4>Book Title</h4>
          <input
            type="text"
            name="Title"
            placeholder="Book Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div><h4>Description</h4>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={des}
            onChange={(e)=>setDes(e.target.value)}
          />
        </div>
        <div><h4>Author</h4>
          <input
            type="text"
            name="Author"
            placeholder="Author"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
          />
        </div>
        <div><h4>price</h4>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e)=>{
                console.log(typeof(price))
                setPrice(e.target.value)}}
    
          />
        </div>
        <div>
          <button className='submit'>Submit </button>
        </div>
        </form>
        </div>
    </div>

  )
}

export default AddNew;
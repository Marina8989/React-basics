import React from 'react'

const Book = ({img, title, author}) => { 
  //attribute, eventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
      alert('hello');
  }
  const complex = (author) => {
     console.log(author);
  }
  return  <article className='book' onMouseOver={()=> {
        console.log(title)
    }}>
    <img src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>Click</button>
    <button type="button" onClick={() => complex(author)}>more complex</button>
  </article>
}

export default Book
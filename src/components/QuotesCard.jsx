import React from 'react'


const QuotesCard = ({color1, phrase, button, setButton}) => {
  return (
    <div className='container-article'>
        <article>
            <p style={{color:`${color1}`}} ><i className="fa-solid fa-quote-left fa-xl"></i>
            {phrase.quote}
             <i className="fa-solid fa-quote-right fa-xl"></i></p>

            <h3 style={{color:`${color1}`}}>{phrase.author}</h3>
            <button style={{backgroundColor:`${color1}`}} onClick={()=>setButton(button + 1)}><i className="fa-solid fa-forward"></i></button>
        </article>
    </div>
  )
}

export default QuotesCard
import React from 'react'
import {Link} from 'react-router-dom'
const Moviecard = ({movie}) => {
  return (
    <div className='movie'>
        {movie.length?(movie.map((item)=>{
          return(
            <Link to={`/movie/${item.id}`}>
            <div className='cardd'>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='moviephoto'/>
            <article>
                <p>اسم الفيلم : {item.title}</p>
                <p>تاريخ الاصدار: {item.release_date}</p>
                <p>عدد المقيمين: {item.vote_count} </p>
                <p>التقييم: {item.vote_average}</p>
            </article>
        </div>
        </Link>
          )  
        })):(<h2>لا يوجد افلام</h2>)}
        
    </div>
    
  )
}

export default Moviecard

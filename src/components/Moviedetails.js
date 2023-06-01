import React, {useEffect,useState}  from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import { Link ,useParams} from 'react-router-dom'
const Moviedetails = () => {
    const [movie,setmovie]=useState([])
    console.log(movie)
    const id=useParams().id
    const getmovie=async (id)=>{
        const url=`https://api.themoviedb.org/3/movie/${id}?language=ar`
        const options = {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQwYzk2NjA5NGFhM2I3NGRmMGI5M2QxMTVkZDliYSIsInN1YiI6IjY0NmU0NmU4Njc0M2ZhMDBlMTI2ODdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJYBli_9K4-oymknZpxc2-7RUO-tSk5uY1Yr4LDhsSo'
          }
        };
        const result= await axios.get(url,options)
        setmovie(result.data)
      }
      useEffect(()=>{
        getmovie(id)
      },[])
  return (
    <div>
      <Row  className='justify-content-center rowground mb-3 p-3'>
        <Col lg="4" className='movieimg'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="film boster" />
        </Col>
        <Col className='d-flex align-items-start flex-column justify-content-center'>
        <p>
          اسم الفيلم:{movie.title}
        </p>
        <p>
        تاريخ الفيلم:{movie.release_date}
        </p>
        <p>
        المقيمين:{movie.vote_count}
        </p>
        <p>
          التقييم:{movie.vote_average}
        </p>
        </Col>
      </Row>
      <Row className='rowground p-3'>
          القصة: { movie.overview} 
      </Row>
      <dvi className='d-flex justify-content-center flex-row mt-2 gap-2'>
        <Link to="/">
        <button className='detailsbttn'>الصفحة الرئيسية</button>
        </Link>
        <a href={movie.homepage}>
        <button className='detailsbttn'>عرض الفيلم</button>
        </a>
      </dvi>
    </div>
  )
}

export default Moviedetails

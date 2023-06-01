import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import axios from 'axios'
import {Container} from 'react-bootstrap'
import { useEffect,useState } from 'react';
import Moviecard from './components/Moviecard';
import Pagintaioncomp from './components/Pagintaioncomp';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Moviedetails from './components/Moviedetails';
function App() {
  const [movies,setmovies]=useState([])
  const [pagecount,setpagecount]=useState(0)
  console.log(movies)
  const getmovies=async ()=>{
    const url='https://api.themoviedb.org/3/movie/popular?language=ar&page=1'
    const options={
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQwYzk2NjA5NGFhM2I3NGRmMGI5M2QxMTVkZDliYSIsInN1YiI6IjY0NmU0NmU4Njc0M2ZhMDBlMTI2ODdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJYBli_9K4-oymknZpxc2-7RUO-tSk5uY1Yr4LDhsSo'
      }}
    const res=await axios.get(url,options)
   setmovies(res.data.results)
    setpagecount(res.data.total_pages)
  }
  const searchmovie=async (word,page=1)=>{
    if(word===""){
      getmovies()
    }else{
      const url = `https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=ar&page=${page}`;
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQwYzk2NjA5NGFhM2I3NGRmMGI5M2QxMTVkZDliYSIsInN1YiI6IjY0NmU0NmU4Njc0M2ZhMDBlMTI2ODdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJYBli_9K4-oymknZpxc2-7RUO-tSk5uY1Yr4LDhsSo'
        }
      };
      const result= await axios.get(url,options)
      setmovies(result.data.results)
      setpagecount(result.data.total_pages)
    }

  }
  const getpage=async (page)=>{
      const url=`https://api.themoviedb.org/3/movie/popular?language=ar&page=${page}`
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQwYzk2NjA5NGFhM2I3NGRmMGI5M2QxMTVkZDliYSIsInN1YiI6IjY0NmU0NmU4Njc0M2ZhMDBlMTI2ODdlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NJYBli_9K4-oymknZpxc2-7RUO-tSk5uY1Yr4LDhsSo'
        }
      };
      const result= await axios.get(url,options)
      setmovies(result.data.results)
    }
   
  useEffect(()=>{
    getmovies()
  },[])
  return (
    <>
    <Navbar searchmovie={searchmovie}/>
    <Container className='container1'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Moviecard movie={movies}/>} />
      <Route path='/movie/:id' element={<Moviedetails/>} />
      <Route path='/' element={<Pagintaioncomp getpage={getpage} pagecount={pagecount}/>} />
    </Routes>
    </BrowserRouter>
    
    </Container>
    </>
  );
}

export default App;

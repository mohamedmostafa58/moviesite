import React from 'react'
import logo from './../images/logo.svg'
const Navbar = ({searchmovie}) => {
    const  togglelist=()=>{
        const form =document.querySelector(".srchform")
        form.classList.toggle("mobile")
    }
  return (
      <nav>
        <img src={logo} alt="logo"/>
        <span className="material-icons listtoggle" onClick={togglelist}>
            list
        </span>
        <div className='srch'>
        <form className='srchform'>
            <input type={"text"} placeholder={"بحث"} onChange={(e)=>{
                searchmovie(e.target.value)
            }}/>
            <button type={"submit"} >
                <span className="material-icons">
                search
                </span>
            </button>
        </form>
        </div>
        
      </nav>
  )
}

export default Navbar

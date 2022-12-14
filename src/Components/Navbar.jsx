import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { toggleAuth } from '../Redux/Login/Action';

export const Navbar=()=> {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(toggleAuth());
    }
  return (
    <div style={{display:"flex", gap:"20px", justifyContent:"center", padding:'20px', backgroundColor:'whitesmoke',marginBottom:'10px'}}>
        <Link style={{color:'blue',textDecoration:'none'}} to="/">Home</Link>
        {/* <Link style={{color:'blue',textDecoration:'none'}} to="/bookings">Bookings</Link> */}
        {
            !isLoggedIn ? (<Link style={{color:'blue',textDecoration:'none'}} to="/login">Login</Link>) : <button style={{border:'none',fontSize:'16px', cursor:'pointer',color:'blue'}} onClick={handleLogout}>Logout</button>
        } 
         {/* <Link style={{color:'blue',textDecoration:'none'}} to="/blogs">Blogs</Link> */}
         {/* <Link style={{color:'blue',textDecoration:'none'}} to="/blogs/create">Blogs Create</Link> */}
         {/* <Link style={{color:'blue',textDecoration:'none'}} to="/blogs/:id/view">Blogs view</Link> */}
         {/* <Link style={{color:'blue',textDecoration:'none'}} to="/blogs/:id/edit">Blogs Edit</Link> */}
        {/* <Link to="login">Login</Link> */}
    </div>
  )
}
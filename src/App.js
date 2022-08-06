import './App.css';
import {Navbar} from './Components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import {IndividualPage} from './Components/Individual';
// import Movie from './Components/Movie/Movie';
import NotFound from './Components/NotFound';

export const  App=() =>{
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/login' element={<Login/>} />


        <Route path='/product/:id' element={<IndividualPage/>} />
        {/* <Route path='/blogs/:id/edit' element={<Edit/>} /> */}
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}
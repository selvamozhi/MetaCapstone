import './App.css';
import HomePage from './HomePage';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import {About,OrderOnline,Menu,Login} from './Sections';
import { useReducer } from 'react';
import BookingPage from './BookingForm';
const initializeTimes={
  availableTimes:["17:00","18:00","19:00","20:00","21:00","22:00"]
};
const updateTimes=(state,action)=>{
  console.log(action);
  console.log(state)
    return state;
}
function Main() {

    //const [availableTimes,updateTime]=useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
    //updateTime(availableTimes);
    const[state,dispatch]=useReducer(updateTimes,initializeTimes);

    return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/orderOnline" element={<OrderOnline/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/booking-form" element={<BookingPage state={state} dispatch={dispatch}/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default Main;

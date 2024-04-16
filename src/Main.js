import './App.css';
import HomePage from './HomePage';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route,useNavigate} from 'react-router-dom';
import {About,OrderOnline,Menu,Login} from './Sections';
import { useReducer,useEffect } from 'react';
import BookingPage from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

const seededGenerator = (timeArray) => {
  const subset = [];
  const numElements = Math.floor(Math.random() * (timeArray.length + 1)); // Random number of elements 

  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * timeArray.length); // Random index within timeArray
    subset.push(timeArray[randomIndex]); // Add element at random index to subset
  }

  return subset;
}

const fetchAPI = (date) => {
  const timeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  var randomSubset = seededGenerator(timeArray);
  while(randomSubset.length===0){
    randomSubset= seededGenerator(timeArray);
  }
  const uniqueTimeArray = randomSubset.filter((value, index, self) => self.indexOf(value) === index);

// Sort in ascending order
uniqueTimeArray.sort((a, b) => {
  // Convert time strings to Date objects for comparison
  const timeA = new Date(`2000-01-01T${a}`);
  const timeB = new Date(`2000-01-01T${b}`);

  // Compare time objects
  return timeA - timeB;
});
return uniqueTimeArray;
};
const submitAPI = formData => true;

const fakeAPI = {
  fetchAPI: fetchAPI,
  submitAPI: submitAPI,
}

function Main() {

  //using Local Storage to get current date
  const currentDate = new Date();
  const dateString = currentDate.toISOString();
  localStorage.setItem('currentDate', dateString);
    //const [availableTimes,updateTime]=useState(["17:00","18:00","19:00","20:00","21:00","22:00"])

    useEffect(()=>{
      initializeTimes();
    })

    const initializeTimes = () => {
      // Initial logic to fetch available times
      // const initialAvailableTimes =["17:00","18:00","19:00","20:00","21:00","22:00"]; // You can replace this with your logic to fetch initial available times
      // return initialAvailableTimes;

      //from API
     return fetchData();
    };
    const updateTimes = (state,action) => {
      return fetchData();
    };
    const fetchData=()=>{
      try {
        //using date from local storage
        const savedDateString = localStorage.getItem('currentDate');
        const savedDate = new Date(savedDateString);
        
        // eslint-disable-next-line
        const availableTimes = fetchAPI(savedDate);

        return availableTimes;
      } catch (error) {
        console.error('Error initializing times:', error);
      }
    }

    const[availableTimes,dispatch]=useReducer(updateTimes,[],initializeTimes);
    const Navigate=useNavigate();
    const submitForm=(formData)=>{
      console.log("data received from bookform component",formData);
      const status=submitAPI(formData);
      if(status){
        Navigate('/booking-form/confirm-booking');
      }
    }
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
      <Route path="/booking-form" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
      <Route path="/booking-form/confirm-booking" element={<ConfirmedBooking/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export  {Main,fakeAPI};

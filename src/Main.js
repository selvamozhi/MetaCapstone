import './App.css';
import HomePage from './HomePage';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import {About,OrderOnline,Menu,Login} from './Sections';
import { useReducer,useEffect } from 'react';
import BookingPage from './BookingForm';


const seededGenerator = (timeArray) => {
  const subset = [];
  const numElements = Math.floor(Math.random() * (timeArray.length + 1)); // Random number of elements between 0 and timeArray.length

  for (let i = 0; i < numElements; i++) {
    const randomIndex = Math.floor(Math.random() * timeArray.length); // Random index within timeArray
    subset.push(timeArray[randomIndex]); // Add element at random index to subset
  }

  return subset;
}

const fetchAPI = (date) => {
  const timeArray = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  
  var randomSubset = seededGenerator(timeArray);
  while(randomSubset.count===0){
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

    //const [availableTimes,updateTime]=useState(["17:00","18:00","19:00","20:00","21:00","22:00"])
    //updateTime(availableTimes);
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
        const today = new Date();
        // eslint-disable-next-line
        const availableTimes = fetchAPI(today);
        return availableTimes;
      } catch (error) {
        console.error('Error initializing times:', error);
      }
    }

    const[state,dispatch]=useReducer(updateTimes,[],initializeTimes);
    console.log("state:",state);
    
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

export  {Main,fakeAPI};

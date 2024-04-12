import './App.css';
import Main from './Main';
import Nav from './Nav';
import Footer from './Footer';
import Header from './Header';
import { Routes, Route} from 'react-router-dom';
import {About,OrderOnline,Menu,Login} from './Sections';
import BookingPage from './BookingForm';
function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/home" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/orderOnline" element={<OrderOnline/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/booking-form" element={<BookingPage/>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;

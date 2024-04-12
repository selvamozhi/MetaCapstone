import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
export default function BookingPage() {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"];
    const occasions=["Birthday","Anniversary","Team Lunch","Cooperate Meeting","Get-together"]
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [BookingformData,setBookingFormData]=useState({
        bookingDate:"",
        bookingTime:"",
        noOfGuest:"",
        occasion:""
    });
    const handleChange=(e)=>{
       if(e.target.name==="occasion"){
        setIsOptionDisabled(true);
       }
        setBookingFormData({
            ...BookingformData,
            [e.target.name]:e.target.value
        });
    }
    const handleSubmit=(e)=>{
       e.preventDefault();
       console.log("while submiting",BookingformData)
       setBookingFormData({
        bookingDate:"",
        bookingTime:"",
        noOfGuest:"",
        occasion:""
       })
       setIsOptionDisabled(false);
    }
  return (
    <>
      <div className="booking-form-class">
        <div className="card">
          <h4 className="card-header">Book Reservation</h4>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="bookingDate">Choose Date</label>
              <input type="date" class="form-control" id="bookingDate" name="bookingDate" value={BookingformData.bookingDate} onChange={handleChange}/>
            </div>

            <div className="form-group">
              <label htmlFor="bookingTime">Choose time</label>
              <select class="form-control" id="bookingTime" name="bookingTime" onChange={handleChange} value={BookingformData.bookingTime}>
                {availableTimes.map((option,index)=><option value={option} >{option}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                class="form-control"
                id="noOfGuest"
                name='noOfGuest'
                placeholder="1"
                min={1}
                max={10}
                value={BookingformData.noOfGuest}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select className="form-control" id="occasion" name='occasion' onChange={handleChange} value={BookingformData.occasion}>
                <option disabled={isOptionDisabled}>Select below</option>
                {occasions.map((occasion,index)=><option value={occasion}>{occasion}</option>)}
              </select>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-warning" onClick={handleSubmit}>
              Make Your reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import React, {  useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
export default function BookingPage({state,dispatch}) {
    const occasions=["Birthday","Anniversary","Team Lunch","Cooperate Meeting","Get-together"];
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);
    const [BookingformData,setBookingFormData]=useState({
        bookingDate:"",
        bookingTime:"",
        noOfGuest:"",
        occasion:""
    });
    const handleChange=(e)=>{
      e.preventDefault();
       if(e.target.name==="occasion"){
        setIsOptionDisabled(true);
       }
       if(e.target.name==="bookingTime"){
        dispatch({date:BookingformData.bookingDate})
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
       dispatch({date:BookingformData.bookingDate})
    }
  return (
    <>
      <div className="booking-form-class">
        <div className="card">
          <h4 className="card-header">Book Now</h4>
          <div className="card-body">
            <div className="form-group">
              <label htmlFor="bookingDate">Choose Date</label>
              <input type="date" className="form-control" id="bookingDate" name="bookingDate" value={BookingformData.bookingDate} onChange={handleChange}  aria-labelledby="BookingDate" aria-required="true"/>
            </div>

            <div className="form-group">
              <label htmlFor="bookingTime">Choose time</label>
              <select className="form-control" id="bookingTime" name="bookingTime" onChange={handleChange} value={BookingformData.bookingTime}  aria-labelledby="bookingTime" aria-required="true">
                {state.map((option,index)=><option value={option} key={index}>{option}</option>)}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                className="form-control"
                id="noOfGuest"
                name='noOfGuest'
                placeholder="1"
                min={1}
                max={10}
                value={BookingformData.noOfGuest}
                onChange={handleChange}
                aria-labelledby="NoOfguest"
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select className="form-control" id="occasion" name='occasion' onChange={handleChange} value={BookingformData.occasion}  aria-labelledby="occasion" aria-required="true">
                <option disabled={isOptionDisabled}>Select below</option>
                {occasions.map((occasion,index)=><option value={occasion} key={index}>{occasion}</option>)}
              </select>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="reserve-btn" onClick={handleSubmit}>
              Make Your reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

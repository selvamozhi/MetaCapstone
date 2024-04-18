import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { useFormik } from "formik";

import * as Yup from 'yup';
export default function BookingPage({availableTimes,dispatch,submitForm}) {
    const occasions=["Birthday","Anniversary","Team Lunch","Cooperate Meeting","Get-together"];
    const [isOptionDisabled, setIsOptionDisabled] = useState(false);

    const formik = useFormik({
      initialValues: {
        bookingDate:"",
        bookingTime:"",
        noOfGuest:"",
        occasion:"",
      },
      onSubmit:(values,{resetForm})=>{
        submitForm(values);
        dispatch({date:formik.values.bookingDate});
        setIsOptionDisabled(false);
        resetForm();
      },

      validationSchema: Yup.object({
        bookingDate:Yup.date().required("Required"),
        bookingTime:Yup.string().required("Required"),
        noOfGuest:Yup.number().required("Required").min(1,"You cannot reserve table with less than 1 person").max(10,"You cannot reserve a table for more than 10 Persons"),
        occasion:Yup.string().required("Required"),
      }),
    });

    const handleChange=(e)=>{
      e.preventDefault();
      setIsOptionDisabled(true);
    }
    const isAnyFieldTouched = () => {
      return Object.keys(formik.touched).some(field => formik.touched[field]);
    };
  
  return (
    <>
      <div className="booking-form-class">
        <div className="card">
          <h4 className="card-header">Book Now</h4>
          <form onSubmit={formik.handleSubmit}>
          <div className="card-body">
          <div className="form-group">
              <label htmlFor="bookingDate">Choose Date</label>
              <input type="date" className="form-control" data-testid="bookingDate" id="bookingDate" name="bookingDate" {...formik.getFieldProps("bookingDate")} aria-labelledby="bookingDate" aria-required="true" required/>
              <h6 className='error-message'>{formik.touched.bookingDate && formik.errors.bookingDate? formik.errors.bookingDate:null}</h6>
          </div>
          <div className="form-group">
              <label htmlFor="bookingTime">Choose time</label>
              <select className="form-control" data-testid="bookingTime" id="bookingTime" name="bookingTime" {...formik.getFieldProps("bookingTime")}  aria-labelledby="bookingTime" aria-required="true" required>
                {availableTimes.map((option,index)=><option value={option} key={index}>{option}</option>)}
              </select>
              <h6 className='error-message'>{formik.touched.bookingTime && formik.errors.bookingTime?formik.errors.bookingTime:null}</h6>
          </div>
          <div className="form-group">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                className="form-control"
                id="noOfGuest"
                data-testid="noOfGuest"
                name='noOfGuest'
                placeholder="1"
                min={1}
                max={10}
                {...formik.getFieldProps("noOfGuest")}
                aria-labelledby="NoOfguest"
                aria-required="true"
                required
              />
            <h6 className='error-message'>{formik.touched.noOfGuest && formik.errors.noOfGuest? formik.errors.noOfGuest:null}</h6>
            </div>
            <div className="form-group">
              <label htmlFor="occasion">Occasion</label>
              <select className="form-control" id="occasion" data-testid="occasion" name='occasion'{...formik.getFieldProps("occasion")} aria-labelledby="occasion" aria-required="true" required onFocus={handleChange}>
                <option disabled={isOptionDisabled}>Select...</option>
                {occasions.map((occasion,index)=><option value={occasion} key={index}>{occasion}</option>)}
              </select>
              <h6 className='error-message'>{formik.touched.occasion && formik.errors.occasion? formik.errors.occasion:null} </h6>
            </div>
              
          </div>
          <div className="card-footer">
            <button type="submit" className="reserve-btn" aria-label="On Click" data-testid="submit-button" disabled={!formik.isValid || !isAnyFieldTouched()}>
              Make Your reservation
            </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

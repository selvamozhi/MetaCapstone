/* eslint-disable testing-library/no-node-access */
import { render, screen,fireEvent } from "@testing-library/react";
import BookingPage from "./BookingForm";

test('Renders the BookingForm heading', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const headingElement = screen.getByText("Book Now");
    const dateElement=screen.getByText("Choose Date");
    const timeElement=screen.getByText("Choose time");
    const countElement=screen.getByText("Number of guests");
    const eventElement=screen.getByText("Occasion");

    expect(headingElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(countElement).toBeInTheDocument();
    expect(eventElement).toBeInTheDocument();
})

test('Button can be submitted', () => {
    const mockState=["17:00","18:00","19:00","20:00","21:00","22:00"]

    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={mockState} dispatch={mockDispatch} submitForm={submitForm}/>);
    const submitButton = screen.getByText('Make Your reservation');
    fireEvent.click(submitButton);
  });

//form validation testing
describe('Form input field validation', () => {
  test('bookingDate input field has correct attributes', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const bookingDateInput = screen.getByTestId('bookingDate');
    expect(bookingDateInput).toHaveAttribute('type', 'date');
    expect(bookingDateInput).toHaveAttribute('required');

    
  });

  test('bookingTime select field has correct attributes', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const bookingTimeSelect = screen.getByTestId("bookingTime");
    
    expect(bookingTimeSelect).toHaveAttribute('required');

  });

  test('noOfGuest input field has correct attributes', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const noOfGuestInput = screen.getByTestId("noOfGuest");
    
    expect(noOfGuestInput).toHaveAttribute('type', 'number');
    expect(noOfGuestInput).toHaveAttribute('required');
    expect(noOfGuestInput).toHaveAttribute('min', '1');
    expect(noOfGuestInput).toHaveAttribute('max', '10');
    
  });

  test('occasion select field has correct attributes', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const occasionSelect = screen.getByTestId('occasion');
    
    expect(occasionSelect).toHaveAttribute('required');
   
  });

  test('submit button has correct attributes', () => {
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm}/>);
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveAttribute('disabled');
 
  });
});  

test("validate message for valid input",()=>{
  const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
    const mockDispatch=jest.fn();
    const submitForm=jest.fn();
    render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm} />);

    const bookingDateInput = screen.getByTestId('bookingDate');
    const bookingTimeInput = screen.getByTestId('bookingTime');
    const noOfGuestInput = screen.getByTestId('noOfGuest');
    const occasionInput = screen.getByTestId('occasion');
    const submitButton = screen.getByTestId('submit-button');

    fireEvent.change(bookingDateInput, { target: { value: '2024-04-20' } });
    fireEvent.change(bookingTimeInput, { target: { value: '12:00' } });
    fireEvent.change(noOfGuestInput, { target: { value: '5' } });
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

   
    fireEvent.click(submitButton);

    expect(screen.queryByText(/Required/)).toBeNull();
  });

  test("validate message for invalid input",()=>{
    const availableTimes=["17:00","18:00","19:00","20:00","21:00","22:00"]
      const mockDispatch=jest.fn();
      const submitForm=jest.fn();
      render(<BookingPage availableTimes={availableTimes} dispatch={mockDispatch} submitForm={submitForm} />);
  
      const bookingDateInput = screen.getByTestId('bookingDate');
      const bookingTimeInput = screen.getByTestId('bookingTime');
      const noOfGuestInput = screen.getByTestId('noOfGuest');
      const occasionInput = screen.getByTestId('occasion');
      const submitButton = screen.getByTestId('submit-button');
  
      fireEvent.change(bookingDateInput, { target: { value: '' } });
      fireEvent.change(bookingTimeInput, { target: { value: '' } });
      fireEvent.change(noOfGuestInput, { target: { value: '' } });
      fireEvent.change(occasionInput, { target: { value: '' } });
  
   
      fireEvent.click(submitButton);
  
   

    

expect(screen.getByTestId('bookingDate').nextElementSibling.textContent.trim()).toBe('');
expect(screen.getByTestId('bookingTime').nextElementSibling.textContent.trim()).toBe(''); 
expect(screen.getByTestId('noOfGuest').nextElementSibling.textContent.trim()).toBe(''); 
expect(screen.getByTestId('occasion').nextElementSibling.textContent.trim()).toBe('');
    });


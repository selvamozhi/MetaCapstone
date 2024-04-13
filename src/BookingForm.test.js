import { render, screen,fireEvent } from "@testing-library/react";
import BookingPage from "./BookingForm";


test('Renders the BookingForm heading', () => {
    const mockState={
        availableTimes:["17:00","18:00","19:00","20:00","21:00","22:00"]
      };
    const mockDispatch=jest.fn();
    render(<BookingPage state={mockState} dispatch={mockDispatch}/>);
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
    const mockState={
        availableTimes:["17:00","18:00","19:00","20:00","21:00","22:00"]
      };
    const mockDispatch=jest.fn();
    render(<BookingPage state={mockState} dispatch={mockDispatch}/>);
    const submitButton = screen.getByText('Make Your reservation');
    fireEvent.click(submitButton);
  });
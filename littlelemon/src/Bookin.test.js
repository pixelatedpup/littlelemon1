import { render, screen } from "@testing-library/react";
import BookingForm from '.components/pages/BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('renders static text in BookingForm', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    
    // Check static labels
    expect(screen.getByText('Choose date')).toBeInTheDocument();
    expect(screen.getByText('Choose time')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
    expect(screen.getByText('Occasion')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Make Your reservation')).toBeInTheDocument();
  });
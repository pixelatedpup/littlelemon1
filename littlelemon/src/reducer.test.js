import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

// Mock props
const mockProps = {
  availableTimes: ['17:00', '18:00'],
  dispatchDateChange: jest.fn(),
  submitForm: jest.fn(),
};

describe('BookingForm - HTML5 Validation', () => {
  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  test('date input has required attribute', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('time select has required attribute', () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test('guests input has required, min, and max attributes', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('occasion select has required attribute', () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe('BookingForm - Client-side Validation and Submission', () => {
  beforeEach(() => {
    render(<BookingForm {...mockProps} />);
  });

  test('submit button is disabled when form is incomplete', () => {
    const submitButton = screen.getByRole('button', {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeDisabled();
  });

  test('submit button is enabled when form is valid', async () => {
    userEvent.type(screen.getByLabelText(/choose date/i), '2025-06-01');
    userEvent.selectOptions(screen.getByLabelText(/choose time/i), '17:00');
    userEvent.type(screen.getByLabelText(/number of guests/i), '4');
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Birthday');

    const submitButton = screen.getByRole('button', {
      name: /make your reservation/i,
    });

    // Wait for form validation state to update
    await screen.findByDisplayValue('4');
    expect(submitButton).toBeEnabled();
  });

  test('calls submitForm with correct data when form is valid', async () => {
    userEvent.type(screen.getByLabelText(/choose date/i), '2025-06-01');
    userEvent.selectOptions(screen.getByLabelText(/choose time/i), '17:00');
    userEvent.type(screen.getByLabelText(/number of guests/i), '2');
    userEvent.selectOptions(screen.getByLabelText(/occasion/i), 'Anniversary');

    const submitButton = screen.getByRole('button', {
      name: /make your reservation/i,
    });

    await screen.findByDisplayValue('2');
    fireEvent.click(submitButton);

    expect(mockProps.submitForm).toHaveBeenCalledWith({
      date: '2025-06-01',
      time: '17:00',
      guests: 2,
      occasion: 'Anniversary',
    });
  });
});

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (!state) {
      navigate("/", { replace: true });
    }
  }, [state, navigate]);

  if (!state) return null; 

  const { date, time, guests, occasion } = state;

  return (
    <div class="display">
      <h1>Booking Confirmed</h1>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3>Guests: {guests}</h3>
      <h3>Occasion: {occasion}</h3>
    </div>
  );
};

export default ConfirmBooking;

import { useState } from "react";

const BookingForm = () =>{
    const [date, setDate] = useState("");
    const[time, setTime]=useState("");
    const[guests, setGuests]=useState("");
    const[occasion, setOccasion]=useState("");
    const[availTimes , setAvailTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"])

    function handleChange(e) {
        e.preventDefault(); 
        console.log({ date, time, guests, occasion });
        const { id, value } = e.target;
        if (id === "res-date") setDate(value);
        else if (id === "res-time") setTime(value);
        else if (id === "guests") setGuests(value);
        else if (id === "occasion") setOccasion(value);
      }
    return(
        <>
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <label htmlFor="res-date">Choose date</label>
            <input value={date} type="date" id="res-date"  onChange={handleChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleChange}>
                {availTimes.map(time => (
                    <option>{time}</option>
                )
                )}

            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
            </form>

    </>
);
}

export default BookingForm;
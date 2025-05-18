import { useState } from "react";

const BookingForm = (props) =>{
    const [date, setDate] = useState("");
    const[time, setTime]=useState("");
    const[guests, setGuests]=useState("");
    const[occasion, setOccasion]=useState("");
    const availTimes = props.availableTimes;
    const dispatch = props.dispatchDateChange;
    // const[availTimes , setAvailTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"])
    function handleChange(e) {
        const { id, value } = e.target;
    
        if (id === "res-date") {
          setDate(value);
          dispatch(value); // Fetch new times for selected date
          console.log("Available Times:", availTimes);
        } else if (id === "res-time") {
          setTime(value);
        } else if (id === "guests") {
          setGuests(value);
        } else if (id === "occasion") {
          setOccasion(value);
        }
      }
    

      function handleSubmit(e){
        e.preventDefault();
        console.log({ date, time, guests, occasion });
      }
    return( 
            <div className="bookingForm">
                <h2 style={{color:"#f4ce14"}}>Reserve a Table</h2>
                <form 
                onSubmit={handleSubmit}
                style={{ 
                display: 'flex', 
                flexDirection: 'column',
                maxWidth: '200px', 
                gap: '20px',
                color:'#edefee' }}>
                <label htmlFor="res-date">Choose date</label>
                <input 
                    value={date} 
                    type="date" 
                    id="res-date"  
                    onChange={handleChange}
                    className="entries"
                />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleChange} className="entries">
                    <option value="">Select a time</option>
                    {availTimes.map((time,index) => (
                        <option key={index} value={time}>
                            {time}
                        </option>
                    )
                    )}

                </select>

                <label htmlFor="guests">Number of guests</label>
                <input 
                    className="entries"
                    type="number" 
                    placeholder="1" 
                    min="1" 
                    max="10" 
                    id="guests" 
                    value={guests} 
                    onChange={handleChange}
                />

                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    className="entries"
                    value={occasion} 
                    onChange={handleChange}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input 
                    className="bttn"
                    style={{width:"200px"}}
                    type="submit" 
                    value="Make your Reservation" />
                </form>
            </div>
);
}

export default BookingForm;
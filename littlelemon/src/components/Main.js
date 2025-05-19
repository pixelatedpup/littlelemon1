import { useReducer, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import Header from "./Header";
import Nav from "./Nav";
import ConfirmBooking from "./pages/ConfirmBooking";

// Reducer function
function updateTime(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
}

function Main() {
    const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTime, []);

  // Initialize available times on mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    const loadTimes = async () => {
      if (window.fetchAPI) {
        console.log("Fetching initial times for:", today);
        const times = await window.fetchAPI(new Date(today)); 
        console.log("Received times:", times);
        dispatch({ type: "UPDATE_TIMES", payload: times });
      } else {
        console.error("fetchAPI is not available on window");
      }
    };

    loadTimes();
  }, []);

  // Called when user selects a new date
  const updateTimesForDate = async (date) => {
    if (window.fetchAPI) {
      console.log("Fetching times for selected date:", date);
      const newTimes = await window.fetchAPI(new Date(date)); 
      console.log("New times received:", newTimes);
      dispatch({ type: "UPDATE_TIMES", payload: newTimes });
    } else {
      console.error("fetchAPI is not available on window");
    }
  };


  const submitForm = async (formData) => {
    console.log("Main data:", formData);
    
    if (window.submitAPI) {
      try {
        const result = await window.submitAPI(formData); 
        console.log("Main result:", result);
  
        if (result === true) {
            navigate("/confirmBooking", { state: formData });
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (error) {
        console.error("submitAPI error:", error);
        alert("An error occurred while submitting. Please try again.");
      }
    } else {
      console.error("submitAPI is not available on window");
    }
  };
  

  return (
    <main>
      <div className="heading">
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confirmBooking" element={<ConfirmBooking/>}/>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchDateChange={updateTimesForDate}
              submitForm={submitForm}
            />
        
            
          }
        />
      </Routes>
    </main>
  );
}

export default Main;

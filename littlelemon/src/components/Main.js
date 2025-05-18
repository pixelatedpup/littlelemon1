import { useReducer, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import Header from "./Header";
import Nav from "./Nav";

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

  return (
    <main>
      <div className="heading">
        <Header />
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchDateChange={updateTimesForDate}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default Main;

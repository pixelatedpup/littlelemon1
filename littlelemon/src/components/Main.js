import { Routes, Route } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";
import Header from "./Header";
import Nav from "./Nav";
const Main = () =>{

    return (
        <main>

            <div className='heading'>
                <Header></Header>
                <Nav></Nav>
            </div>

            <Routes> 
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>


           
        </main>
    )
}

export default Main;
import BookingForm from "../BookingForm";
const BookingPage = (props) => {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} 
            dispatchDateChange={props.dispatchDateChange}
            submitForm ={props.submitForm}/>
        </>
    );
};

export default BookingPage;
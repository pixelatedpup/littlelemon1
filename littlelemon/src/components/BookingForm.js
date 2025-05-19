import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, dispatchDateChange, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required"),
      time: Yup.string().required("Time is required"),
      guests: Yup.number()
        .required("Number of guests is required")
        .min(1, "Must be at least 1")
        .max(10, "Cannot exceed 10"),
      occasion: Yup.string().required("Occasion is required"),
    }),
    onSubmit: (values) => {
      const formData = {
        ...values,
        guests: Number(values.guests),
      };
      console.log("Submitting:", formData);
      submitForm(formData);
    },
  });

  useEffect(() => {
    console.log("Updated availableTimes:", availableTimes);
  }, [availableTimes]);

  // Watch date change to dispatch available time update
  useEffect(() => {
    if (formik.values.date) {
      dispatchDateChange(formik.values.date);
    }
  }, [formik.values.date, dispatchDateChange]);

  return (
    <div className="bookingForm">
      <h2 style={{ color: "#f4ce14" }}>Reserve a Table</h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "200px",
          gap: "20px",
          color: "#edefee",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          name="date"
          type="date"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.date}
          className="entries"
        />
        {formik.touched.date && formik.errors.date && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{formik.errors.date}</div>
        )}

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formik.values.time}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="entries"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        {formik.touched.time && formik.errors.time && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{formik.errors.time}</div>
        )}

        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="10"
          placeholder="1"
          className="entries"
          value={formik.values.guests}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.guests && formik.errors.guests && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{formik.errors.guests}</div>
        )}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          className="entries"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && (
          <div style={{ color: "red", fontSize: "0.8rem" }}>{formik.errors.occasion}</div>
        )}

        <input
          className="bttn"
          style={{ width: "200px" }}
          type="submit"
          value="Make your Reservation"
          disabled={!formik.isValid || !formik.dirty}
        />
      </form>
    </div>
  );
};

export default BookingForm;

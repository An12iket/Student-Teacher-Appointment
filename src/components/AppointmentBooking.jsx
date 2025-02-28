// src/components/AppointmentBooking.js
import React, { useState } from "react";
import "./AppointmentBooking.css";
import { db } from "../util/firebase";
import { collection, addDoc } from "firebase/firestore";
import RedirectButton from "./RedirectComponent";


const AppointmentBooking = () => {
  const [formData, setFormData] = useState({
    teacher: "",
    date: "",
    time: "",
    message: "",
  });
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add message to Firestore
      await addDoc(collection(db, "appointment_data"), {
        formData: formData
      });
      setSnackbarMessage("Your appointment has been booked successfully!");
      setSnackbarVisible(true);
      setFormData({ teacher: "", date: "", time: "", message: "" }); // Reset form
    } catch (error) {
      setSnackbarMessage(`Error booking appointment: ${error.message}`);
      setSnackbarVisible(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  return (
    <>
    <div className="redirect_btn"><RedirectButton/></div>
    <div className="appointment-booking">
       <nav className="nav">
          <a href="/student-dashboard">View Dashboard</a>
        </nav>
      <h2>Book an Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="teacher">Select Teacher:</label>
        <select
          id="teacher"
          name="teacher"
          value={formData.teacher}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose a Teacher --</option>
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
          <option value="Emily Johnson">Emily Johnson</option>
        </select>

        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

      
        <label htmlFor="message">Message (Optional):</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter the purpose of the appointment..."
          rows={4}
        ></textarea>

        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>

      {/* Snackbar for notifications */}
      {snackbarVisible && (
        <div className="snackbar">
          {snackbarMessage}
          <button onClick={handleCloseSnackbar} className="snackbar-close">X</button>
        </div>
      )}
    </div>
    </>
  );
};

export default AppointmentBooking;

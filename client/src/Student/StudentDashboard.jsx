// StudentDashboard.jsx
import React, { useState } from "react";
import '../Dashboard/venues.css';
import img1 from "../assets/img1.jpg";
import welcome from "../Dashboard/welcome.png"; // Add your welcome image URL here
import { Link } from "react-router-dom";
import StudentTable from "./StudentTable";
import StudentNavbar from "./StudentNavbar";

function StudentDashboard() {
  const groundsInfo = {
    title: "Grounds",
    imageSrc: img1, // Replace with the actual image URL
    description: "Explore our wide range of outdoor grounds suitable for sports events, concerts, and more. Our well-maintained grounds provide the perfect backdrop for your activities."
  };



  const [bookings, setBookings] = useState([
    { bookingId: 1, name: 'John Doe', venue: 'Basketball Court', startTime: '3:00 PM', endTime: '5:00 PM', status: 'Booked', paymentInfo: 'Paid' },
    { bookingId: 2, name: 'Jane Smith', venue: 'Football Ground', startTime: '2:30 PM', endTime: '4:30 PM', status: 'Booked', paymentInfo: 'Paid' },
  ]);

  const addBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  return (
    <div>
      <StudentNavbar />
      <section className="dashboard-section">
        <div className="container">
          <div className="welcome-message">
            <div className="welcome-content">
              <h2>Welcome to VeBook</h2>
              <p>Explore the various venues within the DBIT Campus for your events and gatherings. Whether you need outdoor grounds or indoor halls, we have the perfect platform for you.</p>
            </div>
            <div className="welcome-image">
              <img
                src={welcome}
                alt="Welcome Image"
                className="img-fluid"
              />
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Venues</h2>

          <div className="row">
            <div className="col-md-6">
              <div className="dashboard-card">
                <img
                  src={groundsInfo.imageSrc}
                  className="dashboard-img"
                  alt={groundsInfo.title}
                />
                <div className="dashboard-info">
                  <h3>{groundsInfo.title}</h3>
                  <p>{groundsInfo.description}</p>

                  <Link to="/student-grounds" className="btn btn-outline-success">Know More</Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Include the FacultyTable component within the JSX */}
          <StudentTable bookings={bookings} addBooking={addBooking} />
        </div>
      </section>
    </div>
  );
}

export default StudentDashboard;

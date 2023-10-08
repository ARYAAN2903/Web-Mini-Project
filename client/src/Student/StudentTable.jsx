import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const tableStyle = {
  borderCollapse: 'collapse',
  width: '100%',
  backgroundColor: '#f2f2f2', // Background color for the table
  border: '2px solid black', // Border color for the table
};

const thStyle = {
  backgroundColor: '#333', // Background color for table header
  color: '#fff', // Text color for table header
  fontWeight: 'bold',
  padding: '8px',
  textAlign: 'left',
};

const tdStyle = {
  padding: '8px 4px',
  borderBottom: '1px solid #ddd',
  textAlign: 'left',
};

const headingStyle = {
  backgroundColor: '#fff', // Background color for the heading
  color: '#333', // Text color for the heading
  padding: '10px',
  textAlign: 'center',
};

class StudentTable extends React.Component {
  render() {
    const { bookings } = this.props;

    return (
      <div>
        <h2 style={headingStyle}>Booking Information</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Booking ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Venue</th>
              <th style={thStyle}>Start Time</th>
              <th style={thStyle}>End Time</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Payment Info</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((row) => (
              <tr key={row.bookingId}>
                <td style={tdStyle}>
                  <Link to={`/cancellation/${row.bookingId}`} style={{ textDecoration: 'none', color: 'blue' }}>
                    {row.bookingId}
                  </Link>
                </td>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.venue}</td>
                <td style={tdStyle}>{row.startTime}</td>
                <td style={tdStyle}>{row.endTime}</td>
                <td style={tdStyle}>{row.status}</td>
                <td style={tdStyle}>{row.paymentInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentTable;

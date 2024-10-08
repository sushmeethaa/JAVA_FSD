import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react';

const RejectAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleReject = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      // Send the PUT request to reject the appointment with authorization
      await axios.put(`http://localhost:8080/api/doctors/rejectAppointment/${appointmentId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      setSuccess('Appointment rejected successfully.');
      setError('');
    } catch (err) {
      setError('Failed to reject appointment.');
      setSuccess('');
      console.error('Error rejecting appointment:', err); // Log the error for debugging
    }
  };

  return (
    <div>
      <h2>Reject Appointment</h2>
      <Form>
        <Form.Input
          label='Appointment ID'
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <Button primary onClick={handleReject}>Reject</Button>
      </Form>
      {/* Success message */}
      {success && <Message positive>{success}</Message>}
      {/* Error message */}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};

export default RejectAppointment;

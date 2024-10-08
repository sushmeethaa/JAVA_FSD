import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react';

const ConfirmAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleConfirm = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      await axios.post(`http://localhost:8080/api/doctors/confirmAppointment/${appointmentId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        },
      });
      setSuccess('Appointment confirmed successfully.');
      setError('');
    } catch (err) {
      setError('Failed to confirm appointment.');
      setSuccess('');
      console.error('Error confirming appointment:', err); // Log the error for debugging
    }
  };

  return (
    <div>
      <h2>Confirm Appointment</h2>
      <Form>
        <Form.Input
          label='Appointment ID'
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <Button primary onClick={handleConfirm}>Confirm</Button>
      </Form>
      {success && <Message positive>{success}</Message>}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};

export default ConfirmAppointment;

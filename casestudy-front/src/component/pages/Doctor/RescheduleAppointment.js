import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react';

const RescheduleAppointment = () => {
  const [appointmentId, setAppointmentId] = useState('');
  const [newDate, setNewDate] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleReschedule = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      // Send the PUT request to reschedule the appointment with authorization
      await axios.put(
        `http://localhost:8080/api/doctors/rescheduleAppointment/${appointmentId}`,
        {
          appointmentDate: newDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the request headers
          },
        }
      );
      setSuccess('Appointment rescheduled successfully.');
      setError('');
    } catch (err) {
      setError('Failed to reschedule appointment.');
      setSuccess('');
      console.error('Error rescheduling appointment:', err); // Log the error for debugging
    }
  };

  return (
    <div>
      <h2>Reschedule Appointment</h2>
      <Form>
        <Form.Input
          label='Appointment ID'
          value={appointmentId}
          onChange={(e) => setAppointmentId(e.target.value)}
        />
        <Form.Input
          label='New Date (YYYY-MM-DD)'
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
        />
        <Button primary onClick={handleReschedule}>Reschedule</Button>
      </Form>
      {/* Success message */}
      {success && <Message positive>{success}</Message>}
      {/* Error message */}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};

export default RescheduleAppointment;

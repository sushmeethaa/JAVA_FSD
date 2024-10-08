import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal, Message } from 'semantic-ui-react';

const RequestAppointment = ({ open, onClose }) => {
  const [id, setId] = useState('');          // Patient ID
  const [doctorId, setDoctorId] = useState(''); // Doctor ID
  const [date, setDate] = useState('');      // Appointment date
  const [message, setMessage] = useState(''); // Message for feedback

  // Function to handle appointment request
  const handleRequestAppointment = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Prepare the request parameters
      const params = new URLSearchParams({
        patientId: id,     // Patient ID from input
        doctorId: doctorId, // Doctor ID from input
        date: date,        // Date from input
      });

      // Make the POST request
      await axios.post(`http://localhost:8080/api/patients/requestApp?${params}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage('Appointment request submitted successfully.');
    } catch (error) {
      console.error('Error requesting appointment:', error);
      setMessage('Failed to request appointment. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>Request Appointment</Modal.Header>
      <Modal.Content>
        {message && (
          <Message color={message.includes('successfully') ? 'green' : 'red'}>
            {message}
          </Message>
        )}
        <Form>
          {/* Input for Patient ID */}
          <Form.Input
            label='Patient ID'
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setMessage(''); // Clear message on input change
            }}
            required
          />

          {/* Input for Doctor ID */}
          <Form.Input
            label='Doctor ID'
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />

          {/* Input for Appointment Date */}
          <Form.Input
            label='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type='date'
            required
          />

          {/* Button to Request Appointment */}
          <Button primary onClick={handleRequestAppointment}>
            Request Appointment
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default RequestAppointment;

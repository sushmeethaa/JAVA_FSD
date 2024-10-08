import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal } from 'semantic-ui-react';

const CancelAppointment = ({ open, onClose, patientId }) => {
  const [appointmentId, setAppointmentId] = useState('');
  const [message, setMessage] = useState('');

  const handleCancelAppointment = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/patients/cancelApp/${patientId}/${appointmentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('Appointment canceled successfully.');
    } catch (error) {
      console.error('Error canceling appointment:', error);
      setMessage('Failed to cancel appointment. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>Cancel Appointment</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form>
          <Form.Input label='Appointment ID' value={appointmentId} onChange={(e) => setAppointmentId(e.target.value)} required />
          <Button primary onClick={handleCancelAppointment}>Cancel Appointment</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default CancelAppointment;

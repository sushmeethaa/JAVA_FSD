import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, List, Message, Form } from 'semantic-ui-react';

const ViewAppointment = ({ open, onClose }) => {
  const [patientId, setPatientId] = useState(''); // State to hold the input patient ID
  const [appointments, setAppointments] = useState([]); // State to store appointment data
  const [message, setMessage] = useState(''); // State to store messages for the user

  // Function to fetch appointments based on the patientId input
  const fetchAppointments = async () => {
    if (!patientId) {
      setMessage('Please enter a valid Patient ID.'); // Check if patient ID is provided
      return;
    }

    try {
      const token = localStorage.getItem('token'); // Retrieve the token for authentication
      const response = await axios.get(`http://localhost:8080/api/patients/viewApp/${patientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAppointments(response.data); // Set the appointments in state
      setMessage(''); // Clear any previous messages
    } catch (error) {
      console.error('Error fetching appointments:', error);
      setMessage('Failed to load appointments.'); // Update the message on error
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>View Appointments</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label='Patient ID'
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder='Enter Patient ID'
            required
          />
          <Button primary onClick={fetchAppointments}>
            Fetch Appointments
          </Button>
        </Form>
        {message && <Message negative>{message}</Message>} {/* Show error message if exists */}
        {appointments.length > 0 ? (
          <List divided style={{ marginTop: '20px' }}>
            {appointments.map((appointment, index) => (
              <List.Item key={index}>
                <List.Content>
                  <List.Description>{`Appintment Id: ${appointment.id}`}</List.Description>
                  <List.Description>{`Status: ${appointment.status}`}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        ) : (
          <p style={{ marginTop: '20px' }}>No appointments found.</p> // Message when no appointments exist
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewAppointment;

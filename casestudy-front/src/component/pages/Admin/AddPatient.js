import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal, Header } from 'semantic-ui-react';

const AddPatient = ({ open, onClose }) => {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });
  const [message, setMessage] = useState('');

  const handlePatientChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handlePatientSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8080/api/admin/addPatient',
        patient,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`Patient ${response.data.firstName} ${response.data.lastName} added successfully!`);
      setPatient({ // Clear the form after successful submission
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error adding patient:', error);
      setMessage('Failed to add patient. Please check the details.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'> {/* Modal centered and size adjusted */}
      <Modal.Header>Add Patient</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form>
          <Form.Input
            label='First Name'
            name='firstName'
            value={patient.firstName}
            onChange={handlePatientChange}
            required
          />
          <Form.Input
            label='Last Name'
            name='lastName'
            value={patient.lastName}
            onChange={handlePatientChange}
            required
          />
          <Form.Input
            label='Date of Birth'
            name='dateOfBirth'
            value={patient.dateOfBirth}
            onChange={handlePatientChange}
            type='date'
            required
          />
          <Form.Input
            label='Gender'
            name='gender'
            value={patient.gender}
            onChange={handlePatientChange}
            required
          />
          <Form.Input
            label='Email'
            name='email'
            value={patient.email}
            onChange={handlePatientChange}
            type='email'
            required
          />
          <Form.Input
            label='Phone Number'
            name='phoneNumber'
            value={patient.phoneNumber}
            onChange={handlePatientChange}
            required
          />
          <Button primary onClick={handlePatientSubmit}>Add Patient</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default AddPatient;

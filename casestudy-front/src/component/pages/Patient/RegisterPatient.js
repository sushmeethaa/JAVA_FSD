import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal, Message } from 'semantic-ui-react';
const RegisterPatient = ({ open, onClose }) => {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phoneNumber: '',
  });

  const [registeredPatient, setRegisteredPatient] = useState(null); 
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); 
  const handlePatientChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };
  const handlePatientSubmit = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post(
        'http://localhost:8080/api/patients/addInfo',
        patient,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setMessage(`Patient ${response.data.firstName} ${response.data.lastName} registered successfully!`);
      setIsError(false); 
      setRegisteredPatient(response.data);
      setPatient({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.error('Error registering patient:', error);
      setMessage('Failed to register patient. Please check the details.');
      setIsError(true); // Set error state to true for message display
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>Add Your Information</Modal.Header>
      <Modal.Content>
        {message && (
          <Message color={isError ? 'red' : 'green'}>
            {message}
          </Message>
        )}
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

        {/* Display the registered patient details after successful registration */}
        {registeredPatient && (
          <div style={{ marginTop: '20px' }}>
            <h3>Registered Patient Details</h3>
            <p><strong>Patient ID:</strong> {registeredPatient.id}</p>
            <p><strong>First Name:</strong> {registeredPatient.firstName}</p>
            <p><strong>Last Name:</strong> {registeredPatient.lastName}</p>
            <p><strong>Date of Birth:</strong> {registeredPatient.dateOfBirth}</p>
            <p><strong>Gender:</strong> {registeredPatient.gender}</p>
            <p><strong>Email:</strong> {registeredPatient.email}</p>
            <p><strong>Phone Number:</strong> {registeredPatient.phoneNumber}</p>
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default RegisterPatient;

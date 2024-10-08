import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal } from 'semantic-ui-react';

const UpdatePatientInfo = ({ open, onClose, patientId }) => {
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

  const handlePatientUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:8080/api/patients/updatePatientInfo/${patientId}`, patient, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage(`Patient ${response.data.firstName} ${response.data.lastName} updated successfully!`);
    } catch (error) {
      console.error('Error updating patient information:', error);
      setMessage('Failed to update patient information. Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>Update Patient Information</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form>
          <Form.Input label='First Name' name='firstName' value={patient.firstName} onChange={handlePatientChange} required />
          <Form.Input label='Last Name' name='lastName' value={patient.lastName} onChange={handlePatientChange} required />
          <Form.Input label='Date of Birth' name='dateOfBirth' value={patient.dateOfBirth} onChange={handlePatientChange} type='date' required />
          <Form.Input label='Gender' name='gender' value={patient.gender} onChange={handlePatientChange} required />
          <Form.Input label='Email' name='email' value={patient.email} onChange={handlePatientChange} type='email' required />
          <Form.Input label='Phone Number' name='phoneNumber' value={patient.phoneNumber} onChange={handlePatientChange} required />
          <Button primary onClick={handlePatientUpdate}>Update Patient</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default UpdatePatientInfo;

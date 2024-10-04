import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Modal, Header } from 'semantic-ui-react';
const AddDoctor = ({ open, onClose }) => {
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    availability: '',
    experience: '',
    qualification: '',
    designation: '',
    email: '',
  });
  const [message, setMessage] = useState('');

  const handleDoctorChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };
  const handleDoctorSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8080/api/admin/addDoctor',
        doctor,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(`Doctor ${response.data.firstName} ${response.data.lastName} added successfully!`);
      setDoctor({ 
        firstName: '',
        lastName: '',
        specialization: '',
        availability: '',
        experience: '',
        qualification: '',
        designation: '',
        email: '',
      });
    } catch (error) {
      console.error('Error adding doctor:', error);
      setMessage('Failed to add doctor. Please check the details.');
    }
  };
  return (
    <Modal open={open} onClose={onClose} centered>
      <Modal.Header>Add Doctor</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form>
          <Form.Input
            label='First Name'
            name='firstName'
            value={doctor.firstName}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Last Name'
            name='lastName'
            value={doctor.lastName}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Specialization'
            name='specialization'
            value={doctor.specialization}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Availability'
            name='availability'
            value={doctor.availability}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Experience (years)'
            name='experience'
            type='number'
            value={doctor.experience}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Qualification'
            name='qualification'
            value={doctor.qualification}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Designation'
            name='designation'
            value={doctor.designation}
            onChange={handleDoctorChange}
            required
          />
          <Form.Input
            label='Email'
            name='email'
            value={doctor.email}
            onChange={handleDoctorChange}
            type='email'
            required
          />
          <Button primary onClick={handleDoctorSubmit}>Add Doctor</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default AddDoctor;

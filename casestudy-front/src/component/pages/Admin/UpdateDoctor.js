import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'semantic-ui-react';

function UpdateDoctor({ open, onClose, doctorId }) {
  const [doctor, setDoctor] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    experience: '',
    qualification: '',
    designation: '',
    email: '',
  });

  useEffect(() => {
    if (doctorId) {
      fetchDoctorDetails(doctorId);
    }
  }, [doctorId]);

  const fetchDoctorDetails = (id) => {
    axios.get(`http://localhost:8080/api/doctors/${id}`)
      .then(response => {
        setDoctor(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the doctor details!', error);
      });
  };

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:8080/api/admin/updateDoctor/${doctorId}`, doctor)
      .then(response => {
        console.log('Doctor updated successfully', response.data);
        onClose();
      })
      .catch(error => {
        console.error('There was an error updating the doctor!', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Update Doctor</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="First Name"
            name="firstName"
            value={doctor.firstName}
            onChange={handleChange}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            value={doctor.lastName}
            onChange={handleChange}
          />
          <Form.Input
            label="Specialization"
            name="specialization"
            value={doctor.specialization}
            onChange={handleChange}
          />
          <Form.Input
            label="Experience"
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
          />
          <Form.Input
            label="Qualification"
            name="qualification"
            value={doctor.qualification}
            onChange={handleChange}
          />
          <Form.Input
            label="Designation"
            name="designation"
            value={doctor.designation}
            onChange={handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button primary onClick={handleSubmit}>Update</Button>
      </Modal.Actions>
    </Modal>
  );
}
export default UpdateDoctor;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'semantic-ui-react';

function UpdatePatient({ open, onClose, patientId }) {
  const [patient, setPatient] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (patientId) {
      fetchPatientDetails(patientId);
    }
  }, [patientId]);

  const fetchPatientDetails = (id) => {
    axios.get(`http://localhost:8080/api/patients/${id}`)
      .then(response => {
        setPatient(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the patient details!', error);
      });
  };

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:8080/api/admin/updatePatient/${patientId}`, patient)
      .then(response => {
        console.log('Patient updated successfully', response.data);
        onClose();
      })
      .catch(error => {
        console.error('There was an error updating the patient!', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Update Patient</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="First Name"
            name="firstName"
            value={patient.firstName}
            onChange={handleChange}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            value={patient.lastName}
            onChange={handleChange}
          />
          <Form.Input
            label="Email"
            name="email"
            value={patient.email}
            onChange={handleChange}
          />
          <Form.Input
            label="Phone Number"
            name="phoneNumber"
            value={patient.phoneNumber}
            onChange={handleChange}
          />
          <Form.Input
            label="Date of Birth"
            name="dateOfBirth"
            value={patient.dateOfBirth}
            onChange={handleChange}
            type="date"
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
export default UpdatePatient;

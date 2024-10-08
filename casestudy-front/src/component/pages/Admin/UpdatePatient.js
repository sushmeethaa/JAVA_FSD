import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'semantic-ui-react';

function UpdatePatient({ open, onClose }) {
  // State to hold the entered Patient ID
  const [patientId, setPatientId] = useState('');
  
  // State to hold the patient details
  const [patient, setPatient] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch patient details based on the entered ID
  const fetchPatientDetails = () => {
    if (!patientId) return;

    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');

    axios
      .get(`http://localhost:8080/api/admin/viewPatient/${patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        setPatient(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Patient not found or an error occurred!');
        setLoading(false);
        console.error('Error fetching patient details:', error);
      });
  };

  // Handle changes in form fields
  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  // Handle form submission to update the patient details
  const handleSubmit = () => {
    if (!patientId) return;

    setLoading(true);
    const token = localStorage.getItem('token');

    axios
      .put(
        `http://localhost:8080/api/admin/updatePatient/${patientId}`,
        {
          ...patient,
          id: patientId, // Ensure the ID is correctly passed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      )
      .then((response) => {
        console.log('Patient updated successfully', response.data);
        setLoading(false);
        onClose(); // Close the modal after successful update
      })
      .catch((error) => {
        setError('Error updating patient details!');
        setLoading(false);
        console.error('Error updating patient details:', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Update Patient</Modal.Header>
      <Modal.Content>
        <Form>
          {/* Input for manually entering the Patient ID */}
          <Form.Input
            label="Patient ID"
            name="id"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder="Enter Patient ID to fetch details"
          />
          <Button primary onClick={fetchPatientDetails} disabled={!patientId}>
            Fetch Patient Details
          </Button>

          {/* If patient details are fetched successfully, populate the form */}
          {patient.id && (
            <>
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
            </>
          )}

          {/* Display error message if any */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          primary
          onClick={handleSubmit}
          disabled={!patientId || !patient.firstName || loading}
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default UpdatePatient;

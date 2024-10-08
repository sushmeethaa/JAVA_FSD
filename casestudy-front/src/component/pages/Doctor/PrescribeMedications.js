import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react';

const PrescribeMedications = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [medicationDetails, setMedicationDetails] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // Handler for submitting prescription details
  const handlePrescription = async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage

      // Create a medication object to send to the backend
      const medication = {
        doctor: { id: doctorId },         // Include doctor entity
        patient: { id: patientId },       // Include patient entity
        medicationDetails,                // Medication details as a string
      };

      // Post prescription details to the backend API with authorization
      await axios.post(`http://localhost:8080/api/doctors/prescriptions/${doctorId}`, medication, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
      });

      setSuccess('Medication prescribed successfully.');
      setError('');
      // Reset input fields after successful submission
      setDoctorId('');
      setPatientId('');
      setMedicationDetails('');
    } catch (err) {
      setError('Failed to prescribe medication.');
      setSuccess('');
      console.error('Error prescribing medication:', err.response ? err.response.data : err); // Log specific error response
    }
  };

  return (
    <div>
      <h2>Prescribe Medications</h2>
      <Form>
        {/* Input field for Doctor ID */}
        <Form.Input
          label='Doctor ID'
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
        />
        {/* Input field for Patient ID */}
        <Form.Input
          label='Patient ID'
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        />
        {/* Text area for Medication Details */}
        <Form.TextArea
          label='Medication Details'
          value={medicationDetails}
          onChange={(e) => setMedicationDetails(e.target.value)}
        />
        {/* Submit button */}
        <Button primary onClick={handlePrescription}>Submit</Button>
      </Form>
      {/* Success message */}
      {success && <Message positive>{success}</Message>}
      {/* Error message */}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};

export default PrescribeMedications;

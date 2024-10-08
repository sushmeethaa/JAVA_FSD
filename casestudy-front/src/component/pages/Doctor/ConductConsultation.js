import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Message } from 'semantic-ui-react';

const ConductConsultation = () => {
  const [doctorId, setDoctorId] = useState('');
  const [patientId, setPatientId] = useState('');
  const [record, setRecord] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const handleConsultation = async () => {
    try {
        const token = localStorage.getItem('token'); // Retrieve the token from local storage
        await axios.post(`http://localhost:8080/api/doctors/consultations/${doctorId}?patientId=${patientId}&record=${encodeURIComponent(record)}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`, // Add the token to the request headers
            },
        });
        setSuccess('Consultation recorded successfully.');
        setError('');
        // Clear input fields
        setDoctorId('');
        setPatientId('');
        setRecord('');
    } catch (err) {
        setError('Failed to record consultation.');
        setSuccess('');
        console.error('Error recording consultation:', err); // Log the error for debugging
    }
};
  return (
    <div>
      <h2>Conduct Consultation</h2>
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
        {/* Text area for Consultation Details */}
        <Form.TextArea
          label='Consultation Details'
          value={record}
          onChange={(e) => setRecord(e.target.value)}
        />
        {/* Submit button */}
        <Button primary onClick={handleConsultation}>Submit</Button>
      </Form>
      {/* Success message */}
      {success && <Message positive>{success}</Message>}
      {/* Error message */}
      {error && <Message negative>{error}</Message>}
    </div>
  );
};

export default ConductConsultation;

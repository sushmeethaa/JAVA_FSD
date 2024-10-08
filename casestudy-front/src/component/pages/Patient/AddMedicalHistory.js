import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form, Message, Loader } from 'semantic-ui-react';

const AddMedicalHistory = ({ open, onClose }) => {
  const [doctorId, setDoctorId] = useState(''); 
  const [patientId, setPatientId] = useState(''); 
  const [recordDetails, setRecordDetails] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [success, setSuccess] = useState(false); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (open) {
      setLoading(false); // Set loading to false when the modal opens since we no longer fetch doctors
    }
  }, [open]);

  const handleSubmit = async () => {
    if (!doctorId || !patientId || !recordDetails) {
      setMessage('Please fill in all fields.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const requestBody = {
        doctor: { id: doctorId },
        patient: { id: patientId },
        recordDetails,
      };

      await axios.post('http://localhost:8080/api/patients/addMedHistory', requestBody, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);
      setMessage('Medical history added successfully.');
      setRecordDetails('');
      setDoctorId('');
      setPatientId('');
    } catch (error) {
      console.error('Error adding medical history:', error);
      setMessage('Failed to add medical history. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} centered size='small'>
      <Modal.Header>Add Medical History</Modal.Header>
      <Modal.Content>
        {message && (
          <Message negative={!success} positive={success}>
            {message}
          </Message>
        )}
        {loading ? (
          <Loader active inline='centered' />
        ) : (
          <Form>
            <Form.Input
              label='Patient ID'
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder='Enter Patient ID'
            />
            <Form.Input
              label='Doctor ID'
              value={doctorId}
              onChange={(e) => setDoctorId(e.target.value)}
              placeholder='Enter Doctor ID'
              required
            />
            <Form.TextArea
              label='Medical Record Details'
              value={recordDetails}
              onChange={(e) => setRecordDetails(e.target.value)}
              placeholder='Enter details of the medical record...'
              required
            />
            <Button primary onClick={handleSubmit}>
              Add Medical History
            </Button>
          </Form>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddMedicalHistory;

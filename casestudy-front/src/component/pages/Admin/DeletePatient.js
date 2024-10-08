import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Input, Message } from 'semantic-ui-react';

function DeletePatient({ open, onClose, onPatientDeleted = () => {} }) {
  const [patientId, setPatientId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [patientExists, setPatientExists] = useState(false);

  // Function to check if the patient with given ID exists
  const handleCheckPatient = () => {
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
        if (response.data) {
          setPatientExists(true); // If patient is found, set patientExists to true
        } else {
          setError('Patient not found! Please check the ID and try again.');
        }
      })
      .catch((error) => {
        setError('Patient not found or an error occurred while fetching patient details!');
        console.error('Error fetching patient details:', error.response || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Function to handle patient deletion
  const handleDelete = () => {
    if (!patientExists) return; // Do not proceed if patient doesn't exist

    setLoading(true);
    const token = localStorage.getItem('token');

    axios
      .delete(`http://localhost:8080/api/admin/deletePatient/${patientId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        console.log('Patient deleted successfully', response.data);
        onPatientDeleted(); // Callback to refresh the patient list
        setPatientExists(false); // Reset state
        onClose();
      })
      .catch((error) => {
        setError('There was an error deleting the patient. Please try again.');
        console.error('Error deleting patient:', error.response || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Delete Patient</Modal.Header>
      <Modal.Content>
        <p>Enter the ID of the patient you want to delete and check if it exists:</p>
        <Input
          placeholder="Patient ID"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <Button primary onClick={handleCheckPatient} loading={loading}>
          Check Patient
        </Button>
        {error && <Message negative>{error}</Message>}
        {patientExists && <Message positive>Patient with ID {patientId} exists. You can now delete.</Message>}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button negative onClick={handleDelete} disabled={!patientExists || loading}>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeletePatient;

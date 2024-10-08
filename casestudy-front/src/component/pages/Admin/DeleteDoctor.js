import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Input, Message } from 'semantic-ui-react';

function DeleteDoctor({ open, onClose, onDoctorDeleted = () => {} }) {
  const [doctorId, setDoctorId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [doctorExists, setDoctorExists] = useState(false);

  const handleCheckDoctor = () => {
    if (!doctorId) return;

    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');

    axios
      .get(`http://localhost:8080/api/admin/viewDoctor/${doctorId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        if (response.data) {
          setDoctorExists(true); // If doctor is found, set doctorExists to true
        } else {
          setError('Doctor not found! Please check the ID and try again.');
        }
      })
      .catch((error) => {
        setError('Doctor not found or an error occurred while fetching doctor details!');
        console.error('Error fetching doctor details:', error.response || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = () => {
    if (!doctorExists) return; // Do not proceed if doctor doesn't exist

    setLoading(true);
    const token = localStorage.getItem('token');

    axios
      .delete(`http://localhost:8080/api/admin/deleteDoctor/${doctorId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        console.log('Doctor deleted successfully', response.data);
        onDoctorDeleted(); // Callback to refresh the doctor list
        setDoctorExists(false); // Reset state
        onClose();
      })
      .catch((error) => {
        setError('There was an error deleting the doctor. Please try again.');
        console.error('Error deleting doctor:', error.response || error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Delete Doctor</Modal.Header>
      <Modal.Content>
        <p>Enter the ID of the doctor you want to delete and check if it exists:</p>
        <Input
          placeholder="Doctor ID"
          value={doctorId}
          onChange={(e) => setDoctorId(e.target.value)}
          style={{ marginBottom: '1em' }}
        />
        <Button primary onClick={handleCheckDoctor} loading={loading}>
          Check Doctor
        </Button>
        {error && <Message negative>{error}</Message>}
        {doctorExists && <Message positive>Doctor with ID {doctorId} exists. You can now delete.</Message>}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button negative onClick={handleDelete} disabled={!doctorExists || loading}>
          Delete
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteDoctor;

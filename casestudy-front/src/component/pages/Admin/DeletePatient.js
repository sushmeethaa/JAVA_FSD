import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'semantic-ui-react';

function DeletePatient({ open, onClose, patientId, onPatientDeleted }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/admin/deletePatient/${patientId}`)
      .then(response => {
        console.log('Patient deleted successfully', response.data);
        onPatientDeleted(); // Callback to refresh the patient list
        onClose();
      })
      .catch(error => {
        console.error('There was an error deleting the patient!', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Delete Patient</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this patient?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button negative onClick={handleDelete}>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeletePatient;

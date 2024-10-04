import React from 'react';
import axios from 'axios';
import { Modal, Button } from 'semantic-ui-react';

function DeleteDoctor({ open, onClose, doctorId, onDoctorDeleted }) {
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/admin/deleteDoctor/${doctorId}`)
      .then(response => {
        console.log('Doctor deleted successfully', response.data);
        onDoctorDeleted(); // Callback to refresh the doctor list
        onClose();
      })
      .catch(error => {
        console.error('There was an error deleting the doctor!', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Delete Doctor</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this doctor?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button negative onClick={handleDelete}>Delete</Button>
      </Modal.Actions>
    </Modal>
  );
}
export default DeleteDoctor;

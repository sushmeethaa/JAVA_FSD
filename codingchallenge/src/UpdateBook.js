import React, { useState } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

const UpdateBook = ({ open, onClose }) => {
  const [isbn, setIsbn] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.put(`http://localhost:9000/api/admin/updateBook/${isbn}/${newTitle}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Book updated successfully');
      setIsbn('');
      setNewTitle('');
    } catch (error) {
      setMessage('Failed to update book. Please check the details.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} size='small' centered>
      <Modal.Header>Update Book Title</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form onSubmit={handleUpdateBook}>
          <Form.Input
            label='ISBN'
            type='number'
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
          <Form.Input
            label='New Title'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
          <Button primary type='submit'>Update Book</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default UpdateBook;

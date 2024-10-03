import React, { useState } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

const RemoveBook = ({ open, onClose }) => {
  const [isbn, setIsbn] = useState('');
  const [message, setMessage] = useState('');

  const handleRemoveBook = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`http://localhost:9000/api/admin/removeBook/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Book removed successfully');
      setIsbn('');
    } catch (error) {
      setMessage('Failed to remove book. Please check the details.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} size='small' centered>
      <Modal.Header>Remove Book</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form onSubmit={handleRemoveBook}>
          <Form.Input
            label='ISBN'
            type='number'
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
          <Button primary type='submit'>Remove Book</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default RemoveBook;

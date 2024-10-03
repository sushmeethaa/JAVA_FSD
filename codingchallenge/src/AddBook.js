import React, { useState } from 'react';
import { Modal, Form, Button } from 'semantic-ui-react';
import axios from 'axios';

const AddBook = ({ open, onClose }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBook = async (e) => {
    e.preventDefault();
    const book = { title, author, publicationYear: parseInt(publicationYear, 10) };
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:9000/api/admin/addNewBook', book, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setMessage('Book added successfully');
      setTitle('');
      setAuthor('');
      setPublicationYear('');
    } catch (error) {
      setMessage('Failed to add book. Please check the details.');
    }
  };

  return (
    <Modal open={open} onClose={onClose} size='small' centered>
      <Modal.Header>Add New Book</Modal.Header>
      <Modal.Content>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <Form onSubmit={handleAddBook}>
          <Form.Input
            label='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Form.Input
            label='Author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <Form.Input
            label='Publication Year'
            type='number'
            value={publicationYear}
            onChange={(e) => setPublicationYear(e.target.value)}
            required
          />
          <Button primary type='submit'>Add Book</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};
export default AddBook;

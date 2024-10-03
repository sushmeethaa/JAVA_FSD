import React, { useEffect, useState } from 'react';
import { Modal, List, Button } from 'semantic-ui-react';
import axios from 'axios';

const ViewBooks = ({ open, onClose }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:9000/api/admin/getBooks', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  return (
    <Modal open={open} onClose={onClose} size='small' centered>
      <Modal.Header>View Books</Modal.Header>
      <Modal.Content>
        <List>
          {books.map((book) => (
            <List.Item key={book.isbn}>
              <strong>{book.title}</strong> by {book.author} (Published: {book.publicationYear})
            </List.Item>
          ))}
        </List>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};
export default ViewBooks;

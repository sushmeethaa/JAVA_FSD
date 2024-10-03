import React, { useState } from 'react';
import { Container, Button } from 'semantic-ui-react';
import {  useNavigate } from 'react-router-dom';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import RemoveBook from './RemoveBook';
import ViewBooks from './ViewBooks';
import './BookDashboard.css';
const BookDashboard = () => {
  const [addBookModalOpen, setAddBookModalOpen] = useState(false);
  const [updateBookModalOpen, setUpdateBookModalOpen] = useState(false);
  const [removeBookModalOpen, setRemoveBookModalOpen] = useState(false);
  const [viewBooksModalOpen, setViewBooksModalOpen] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/loginsignup');
  };

  return (
    <Container>
      <h1>Book Management Dashboard</h1>
      <Button primary onClick={() => setAddBookModalOpen(true)}>Add Book</Button>
      <Button primary onClick={() => setUpdateBookModalOpen(true)}>Update Book</Button>
      <Button primary onClick={() => setRemoveBookModalOpen(true)}>Remove Book</Button>
      <Button primary onClick={() => setViewBooksModalOpen(true)}>View Books</Button>
      <AddBook open={addBookModalOpen} onClose={() => setAddBookModalOpen(false)} />
      <UpdateBook open={updateBookModalOpen} onClose={() => setUpdateBookModalOpen(false)} />
      <RemoveBook open={removeBookModalOpen} onClose={() => setRemoveBookModalOpen(false)} />
      <ViewBooks open={viewBooksModalOpen} onClose={() => setViewBooksModalOpen(false)} />
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
};
export default BookDashboard;

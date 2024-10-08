import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'semantic-ui-react';

function AddUser({ open, onClose }) {
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('PATIENT');

  const signupUser = async (e) => {
    e.preventDefault();
    const signupData = { email: signupEmail, password: signupPassword, name, userRole };

    try {
      await axios.post('http://localhost:8080/api/auth/signup', signupData);
      alert('Signup successful! You can now log in.');
      onClose(); // Close the modal after signup
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Add User</Modal.Header>
      <Modal.Content>
        <Form onSubmit={signupUser}>
          <Form.Input
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            required
          />
          <Form.Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            required
          />
          <Form.Select
            label="User Role"
            value={userRole}
            onChange={(e, { value }) => setUserRole(value)}
            options={[
              //{ key: 'patient', text: 'Patient', value: 'PATIENT' },
              // Uncomment the following options if you want to allow adding Doctors or Admins
              { key: 'doctor', text: 'Doctor', value: 'DOCTOR' },
              { key: 'admin', text: 'Admin', value: 'ADMIN' },
            ]}
            required
          />
          <Modal.Actions>
            <Button onClick={onClose}>Cancel</Button>
            <Button primary type="submit">Add User</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
export default AddUser;

import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Table, Message, Modal } from 'semantic-ui-react';

const ViewPatientInfo = ({ open, onClose }) => { // Add open prop
  const [email, setEmail] = useState('');
  const [patientData, setPatientData] = useState(null);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Fetch patient information by email
  const fetchPatientInfo = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await axios.get(`http://localhost:8080/api/patients/viewPatientbyemail/${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPatientData(response.data);
      setMessage(''); // Reset message on successful fetch
      setIsError(false); // Reset error state
    } catch (error) {
      console.error('Error fetching patient data:', error);
      setMessage('Failed to fetch patient data. Please check the email.');
      setIsError(true); // Set error state
      setPatientData(null); // Clear previous data
    }
  };

  return (
    <Modal open={open} onClose={onClose} closeIcon>
      <Modal.Header>View Patient Information by Email</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label='Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Button primary onClick={fetchPatientInfo}>Fetch Patient Info</Button>
        </Form>

        {message && (
          <Message color={isError ? 'red' : 'green'}>
            {message}
          </Message>
        )}

        {patientData && (
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Field</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Patient ID</Table.Cell>
                <Table.Cell>{patientData.id}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>First Name</Table.Cell>
                <Table.Cell>{patientData.firstName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Last Name</Table.Cell>
                <Table.Cell>{patientData.lastName}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Date of Birth</Table.Cell>
                <Table.Cell>{patientData.dateOfBirth}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Gender</Table.Cell>
                <Table.Cell>{patientData.gender}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Email</Table.Cell>
                <Table.Cell>{patientData.email}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Phone Number</Table.Cell>
                <Table.Cell>{patientData.phoneNumber}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewPatientInfo;

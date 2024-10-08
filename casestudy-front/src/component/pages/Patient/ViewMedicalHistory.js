import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Form, Message, Modal } from 'semantic-ui-react';

const ViewMedicalHistory = ({ open, onClose }) => {
  const [patientId, setPatientId] = useState('');
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMedicalHistory = async () => {
    if (!patientId) {
      setMessage('Please enter a Patient ID.');
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/patients/viewMedHistory/${patientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMedicalHistory(response.data);
      setMessage(''); // Clear any previous messages
    } catch (error) {
      console.error('Error fetching medical history:', error);
      setMessage('Failed to load medical history.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!open) {
      setPatientId(''); // Clear patient ID when modal is closed
      setMedicalHistory([]); // Clear medical history when modal is closed
      setMessage(''); // Clear message when modal is closed
    }
  }, [open]);

  return (
    <Modal open={open} onClose={onClose} size='small'>
      <Modal.Header>View Medical History</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label='Patient ID'
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            placeholder='Enter Patient ID'
            required
          />
          <Button primary onClick={fetchMedicalHistory} loading={loading}>
            Fetch Medical History
          </Button>
        </Form>
        {message && <Message negative>{message}</Message>}
        {medicalHistory.length > 0 ? (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Record ID</Table.HeaderCell>
                <Table.HeaderCell>Doctor ID</Table.HeaderCell>
                <Table.HeaderCell>Record Details</Table.HeaderCell>
                <Table.HeaderCell>Patient ID</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {medicalHistory.map((record, index) => (
                <Table.Row key={index}>
                  <Table.Cell>{record.id}</Table.Cell>
                  <Table.Cell>{record.doctor.id}</Table.Cell>
                  <Table.Cell>{record.recordDetails}</Table.Cell>
                  <Table.Cell>{record.patient.id}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        ) : (
          !loading && <p>No medical history found.</p>
        )}
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ViewMedicalHistory;

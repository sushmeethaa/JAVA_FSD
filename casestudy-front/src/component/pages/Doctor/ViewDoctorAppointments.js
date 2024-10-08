import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Message, Input } from 'semantic-ui-react';

const ViewDoctorAppointments = ({ doctorId }) => {
  const [appointments, setAppointments] = useState([]);
  const [inputDoctorId, setInputDoctorId] = useState(doctorId || ''); // Set initial input field to prop value
  const [error, setError] = useState('');

  useEffect(() => {
    if (doctorId) {
      fetchAppointments(doctorId); // Fetch appointments if doctorId is provided initially
    }
  }, [doctorId]);

  // Fetch appointments based on the provided doctor ID
  const fetchAppointments = async (id) => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from local storage
      const response = await axios.get(`http://localhost:8080/api/doctors/appointments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });
      console.log('Fetched appointments:', response.data); // Log fetched data
      setAppointments(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching appointments:', err); // Log the error for more details
      setError('Failed to fetch appointments. Please check the Doctor ID and try again.');
    }
  };

  // Handle fetching appointments when inputDoctorId is manually provided
  const handleFetchAppointments = () => {
    if (inputDoctorId) {
      fetchAppointments(inputDoctorId);
    } else {
      setError('Please provide a valid Doctor ID.');
    }
  };

  return (
    <div>
      <h2>Doctor's Appointments</h2>
      {error && <Message negative>{error}</Message>}
      <Input
        placeholder="Enter Doctor ID"
        value={inputDoctorId}
        onChange={(e) => setInputDoctorId(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Button onClick={handleFetchAppointments} color="blue">
        Fetch Appointments
      </Button>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Appointment ID</Table.HeaderCell>
            <Table.HeaderCell>Patient ID</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {appointments.length > 0 ? (
            appointments.map((appointment) => (
              <Table.Row key={appointment.id}>
                <Table.Cell>{appointment.id}</Table.Cell>
                <Table.Cell>{appointment.patient.id}</Table.Cell>
                <Table.Cell>{appointment.appointmentDate}</Table.Cell>
                <Table.Cell>{appointment.status}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="4" style={{ textAlign: 'center' }}>
                No appointments available.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ViewDoctorAppointments;

import React from 'react';
import { Table, Button } from 'semantic-ui-react';

function ViewPatients({ patients, open, onClose }) {
  return (
    <div style={{ display: open ? 'block' : 'none' }}>
      <h2>Patients List</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Date of Birth</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <Table.Row key={patient.id}>
                <Table.Cell>{patient.id}</Table.Cell>
                <Table.Cell>{patient.firstName}</Table.Cell>
                <Table.Cell>{patient.lastName}</Table.Cell>
                <Table.Cell>{new Date(patient.dateOfBirth).toLocaleDateString()}</Table.Cell>
                <Table.Cell>{patient.gender}</Table.Cell>
                <Table.Cell>{patient.email}</Table.Cell>
                <Table.Cell>{patient.phoneNumber}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan='7'>No patients found.</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}
export default ViewPatients;

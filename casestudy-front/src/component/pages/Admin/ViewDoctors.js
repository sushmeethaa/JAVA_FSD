import React from 'react';
import { Table, Button } from 'semantic-ui-react';
function ViewDoctors({ doctors, open, onClose }) {
  return (
    <div style={{ display: open ? 'block' : 'none' }}>
      <h2>Doctors List</h2>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Specialization</Table.HeaderCell>
            <Table.HeaderCell>Experience</Table.HeaderCell>
            <Table.HeaderCell>Qualification</Table.HeaderCell>
            <Table.HeaderCell>Designation</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {doctors.map((doctor) => (
            <Table.Row key={doctor.id}>
              <Table.Cell>{doctor.firstName}</Table.Cell>
              <Table.Cell>{doctor.lastName}</Table.Cell>
              <Table.Cell>{doctor.specialization}</Table.Cell>
              <Table.Cell>{doctor.experience}</Table.Cell>
              <Table.Cell>{doctor.qualification}</Table.Cell>
              <Table.Cell>{doctor.designation}</Table.Cell>
              <Table.Cell>{doctor.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

export default ViewDoctors;

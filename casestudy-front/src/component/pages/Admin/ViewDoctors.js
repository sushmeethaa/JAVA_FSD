import React, { useState } from 'react';
import { Card, Button, Container, Input } from 'semantic-ui-react';
import './ViewDoctors.css'; // Import the CSS

function ViewDoctors({ doctors, open, onClose }) {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase()); // Convert input to lowercase for case-insensitive search
  };

  // Filter the doctors list based on search query
  const filteredDoctors = doctors.filter((doctor) =>
    doctor.firstName.toLowerCase().includes(searchQuery) ||
    doctor.lastName.toLowerCase().includes(searchQuery) ||
    doctor.specialization.toLowerCase().includes(searchQuery) ||
    doctor.email.toLowerCase().includes(searchQuery)
  );

  return (
    <Container className="container" style={{ display: open ? 'block' : 'none' }}>
      <h2>Doctors List</h2>

      {/* Search Input Field */}
      <Input
        icon='search'
        placeholder='Search by name, specialization, or email...'
        value={searchQuery}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px' }} // Add some spacing below the search bar
      />

      <Card.Group itemsPerRow={3} stackable>
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="card">
              <Card.Content className="card-content">
                <Card.Header className="card-header">{`${doctor.firstName} ${doctor.lastName}`}</Card.Header>
                <Card.Meta className="card-meta">{doctor.specialization}</Card.Meta>
                <Card.Description className="card-description">
                  <strong>ID:</strong> {doctor.id}<br />
                  <strong>Experience:</strong> {doctor.experience} years<br />
                  <strong>Qualification:</strong> {doctor.qualification}<br />
                  <strong>Designation:</strong> {doctor.designation}<br />
                  <strong>Email:</strong> {doctor.email}
                </Card.Description>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Content>
              <Card.Description>No doctors found.</Card.Description>
            </Card.Content>
          </Card>
        )}
      </Card.Group>

      <Button onClick={onClose} style={{ marginTop: '20px' }}>Close</Button>
    </Container>
  );
}
export default ViewDoctors;

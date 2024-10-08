import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'semantic-ui-react';

function UpdateDoctor({ open, onClose }) {
  const [doctorId, setDoctorId] = useState('');
  const [doctor, setDoctor] = useState({
    id: '',
    firstName: '',
    lastName: '',
    specialization: '',
    experience: '',
    qualification: '',
    designation: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fetchDoctorDetails = () => {
    if (!doctorId) return;

    setLoading(true);
    setError('');
    const token = localStorage.getItem('token');

    axios
      .get(`http://localhost:8080/api/admin/viewDoctor/${doctorId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      })
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Doctor not found or an error occurred!');
        setLoading(false);
        console.error('Error fetching doctor details:', error);
      });
  };

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!doctorId) return;

    setLoading(true);
    const token = localStorage.getItem('token');

    axios
      .put(
        `http://localhost:8080/api/admin/updateDoctor/${doctorId}`,
        {
          ...doctor,
          id: doctorId, // Ensure the ID is correctly passed
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in headers
          },
        }
      )
      .then((response) => {
        console.log('Doctor updated successfully', response.data);
        setLoading(false);
        onClose(); // Close the modal after successful update
      })
      .catch((error) => {
        setError('Error updating doctor details!');
        setLoading(false);
        console.error('Error updating doctor details:', error);
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Update Doctor</Modal.Header>
      <Modal.Content>
        <Form>
          {/* Input for manually entering the Doctor ID */}
          <Form.Input
            label="Doctor ID"
            name="id"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            placeholder="Enter Doctor ID to fetch details"
          />
          <Button primary onClick={fetchDoctorDetails} disabled={!doctorId}>
            Fetch Doctor Details
          </Button>

          {/* If doctor details are fetched successfully, populate the form */}
          {doctor.id && (
            <>
              <Form.Input
                label="First Name"
                name="firstName"
                value={doctor.firstName}
                onChange={handleChange}
              />
              <Form.Input
                label="Last Name"
                name="lastName"
                value={doctor.lastName}
                onChange={handleChange}
              />
              <Form.Input
                label="Specialization"
                name="specialization"
                value={doctor.specialization}
                onChange={handleChange}
              />
              <Form.Input
                label="Experience"
                name="experience"
                value={doctor.experience}
                onChange={handleChange}
              />
              <Form.Input
                label="Qualification"
                name="qualification"
                value={doctor.qualification}
                onChange={handleChange}
              />
              <Form.Input
                label="Designation"
                name="designation"
                value={doctor.designation}
                onChange={handleChange}
              />
              <Form.Input
                label="Email"
                name="email"
                value={doctor.email}
                onChange={handleChange}
              />
            </>
          )}

          {/* Display error message if any */}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          primary
          onClick={handleSubmit}
          disabled={!doctorId || !doctor.firstName || loading}
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
export default UpdateDoctor;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button } from 'semantic-ui-react';
import AddDoctor from './pages/Admin/AddDoctor'; // Import the AddDoctor modal
import AddPatient from './pages/Admin/AddPatient'; // Import the AddPatient modal
import ViewDoctors from './pages/Admin/ViewDoctors'; // Import ViewDoctor modal
import ViewPatients from './pages/Admin/ViewPatients'; // Import ViewPatient modal
import './css/UserDashboard.css';

function UserDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const [addDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
  const [addPatientModalOpen, setAddPatientModalOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctorsModalOpen, setDoctorsModalOpen] = useState(false);
  const [patientsModalOpen, setPatientsModalOpen] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get('role');
    setUserRole(role);
    if (role === 'ADMIN') {
      fetchDoctors();
      fetchPatients();
    }
  }, [location]);

  // Fetch doctors with token
  const fetchDoctors = () => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/admin/viewDoctors', {
      headers: {
        Authorization: `Bearer ${token}` // Include token in headers
      }
    })
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching doctors!', error);
      });
  };

  // Fetch patients with token
  const fetchPatients = () => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8080/api/admin/viewPatients', {
      headers: {
        Authorization: `Bearer ${token}` // Include token in headers
      }
    })
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching patients!', error);
      });
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/user');
  };

  return (
    <Container className="user-dashboard-container">
      <h1>Welcome! You are logged in as {userRole}</h1>
      {userRole === 'ADMIN' && (
        <div>
          <Button primary onClick={() => setAddDoctorModalOpen(true)}>Add Doctor</Button>
          <Button primary onClick={() => setAddPatientModalOpen(true)}>Add Patient</Button>
          <Button primary onClick={() => setPatientsModalOpen(true)}>View Patients</Button>
          <Button primary onClick={() => setDoctorsModalOpen(true)}>View Doctors</Button>
          
          <AddDoctor open={addDoctorModalOpen} onClose={() => setAddDoctorModalOpen(false)} />
          <AddPatient open={addPatientModalOpen} onClose={() => setAddPatientModalOpen(false)} />
          <ViewPatients patients={patients} open={patientsModalOpen} onClose={() => setPatientsModalOpen(false)} />
          <ViewDoctors doctors={doctors} open={doctorsModalOpen} onClose={() => setDoctorsModalOpen(false)} />
        </div>
      )}

      {/* Logout Button */}
      <Button onClick={logout}>Logout</Button>
    </Container>
  );
}
export default UserDashboard;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { Container, Button, Tab } from 'semantic-ui-react';
// import AddDoctor from './pages/Admin/AddDoctor';
// import AddPatient from './pages/Admin/AddPatient';
// import ViewDoctors from './pages/Admin/ViewDoctors';
// import ViewPatients from './pages/Admin/ViewPatients';
// import UpdateDoctor from './pages/Admin/UpdateDoctor';
// import UpdatePatient from './pages/Admin/UpdatePatient';
// import DeleteDoctor from './pages/Admin/DeleteDoctor';
// import DeletePatient from './pages/Admin/DeletePatient';
// import AddUser from './pages/Admin/AddUser';
// import ViewAppointments from './pages/Patient/ViewAppointment';
// import ViewMedicalHistory from './pages/Patient/ViewMedicalHistory';
// import AddMedicalHistory from './pages/Patient/AddMedicalHistory';
// import CancelAppointment from './pages/Patient/CancelAppointment';
// import RequestAppointment from './pages/Patient/RequestAppointment';
// import RegisterPatient from './pages/Patient/RegisterPatient';
// import ViewPatientInfo from './pages/Patient/ViewPatientInfo';
// import ViewDoctorAppointments from './pages/Doctor/ViewDoctorAppointments';
// import RescheduleAppointment from './pages/Doctor/RescheduleAppointment';
// import RejectAppointment from './pages/Doctor/RejectAppointment';
// import PrescribeMedications from './pages/Doctor/PrescribeMedications';
// import ConfirmAppointment from './pages/Doctor/ConfirmAppointment';
// import ConductConsultation from './pages/Doctor/ConductConsultation';

// import './css/UserDashboard.css';

// const UserDashboard = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [userRole, setUserRole] = useState('');
//   const [doctors, setDoctors] = useState([]);
//   const [patients, setPatients] = useState([]);
//   const [viewAppointmentsModalOpen, setViewAppointmentsModalOpen] = useState(false);
//   const [viewMedicalHistoryModalOpen, setViewMedicalHistoryModalOpen] = useState(false);
//   const [addMedicalHistoryModalOpen, setAddMedicalHistoryModalOpen] = useState(false);
//   const [requestAppointmentModalOpen, setRequestAppointmentModalOpen] = useState(false);
//   const [cancelAppointmentModalOpen, setCancelAppointmentModalOpen] = useState(false);
//   const [patientId, setPatientId] = useState('');
//   const [doctorId, setDoctorId] = useState('');
//   const [addDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
//   const [addPatientModalOpen, setAddPatientModalOpen] = useState(false);
//   const [doctorsModalOpen, setDoctorsModalOpen] = useState(false);
//   const [patientsModalOpen, setPatientsModalOpen] = useState(false);
//   const [updateDoctorModalOpen, setUpdateDoctorModalOpen] = useState(false);
//   const [deleteDoctorModalOpen, setDeleteDoctorModalOpen] = useState(false);
//   const [updatePatientModalOpen, setUpdatePatientModalOpen] = useState(false);
//   const [deletePatientModalOpen, setDeletePatientModalOpen] = useState(false);
//   const [addUserModalOpen, setAddUserModalOpen] = useState(false);
//   const [registerPatientModalOpen, setRegisterPatientModalOpen] = useState(false);
//   const [viewPatientInfoModalOpen, setViewPatientInfoModalOpen] = useState(false);
//   const [doctorAppointments, setDoctorAppointments] = useState([]);
//   const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const role = queryParams.get('role');
//     const id = queryParams.get('id'); // Assuming patient ID is passed as a query param for patient role
//     setUserRole(role);
//     setPatientId(id);
//     if (role === 'ADMIN') {
//       fetchDoctors();
//       fetchPatients();
//     } else if (role === 'DOCTOR') {
//       setDoctorId(id);
//       fetchDoctorAppointments(id); // Fetch appointments for doctor
//       fetchPatients(); // Fetch patients for doctor to reference
//     } else if (role === 'PATIENT') {
//       getDoctors(); // Fetch doctors when patient logs in
//     }
//   }, [location]);

//   // Fetch doctors with token for ADMIN role
//   const fetchDoctors = () => {
//     const token = localStorage.getItem('token');
//     axios
//       .get('http://localhost:8080/api/admin/viewDoctors', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         setDoctors(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching doctors!', error);
//       });
//   };

//   // Fetch doctors with token for PATIENT role
//   const getDoctors = () => {
//     const token = localStorage.getItem('token');
//     axios
//       .get('http://localhost:8080/api/patients/viewDoctors', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         setDoctors(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching doctors!', error);
//       });
//   };

//   // Fetch patients with token for ADMIN role
//   const fetchPatients = () => {
//     const token = localStorage.getItem('token');
//     axios
//       .get('http://localhost:8080/api/admin/viewPatients', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         setPatients(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching patients!', error);
//       });
//   };

//   const fetchDoctorAppointments = (doctorId) => {
//     const token = localStorage.getItem('token');
//     axios
//       .get(`http://localhost:8080/api/doctors/appointments/${doctorId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => setDoctorAppointments(response.data))
//       .catch((error) => console.error('Error fetching doctor appointments!', error));
//   };

//   // Logout functionality
//   const logout = () => {
//     localStorage.removeItem('token');
//     navigate('/user');
//   };

//   const handleDoctorDeleted = () => {
//     fetchDoctors(); // Refresh the doctor list after deletion
//     console.log('Doctor deleted and doctor list updated.');
//   };

//   // Callback function for when a patient is deleted
//   const handlePatientDeleted = () => {
//     fetchPatients(); // Refresh the patient list after deletion
//     console.log('Patient deleted and patient list updated.');
//   };

//   // Define tab panes for Doctor Role
//   const DoctorPanes = [
//     { menuItem: 'View Appointments', render: () => <Tab.Pane><ViewDoctorAppointments doctorId={doctorId} appointments={doctorAppointments} /></Tab.Pane> },
//     { menuItem: 'Confirm Appointments', render: () => <Tab.Pane><ConfirmAppointment doctorId={doctorId} /></Tab.Pane> },
//     { menuItem: 'Reschedule Appointments', render: () => <Tab.Pane><RescheduleAppointment doctorId={doctorId} /></Tab.Pane> },
//     { menuItem: 'Reject Appointments', render: () => <Tab.Pane><RejectAppointment doctorId={doctorId} /></Tab.Pane> },
//     { menuItem: 'Prescriptions', render: () => <Tab.Pane><PrescribeMedications doctorId={doctorId} /></Tab.Pane> },
//     { menuItem: 'Consultations', render: () => <Tab.Pane><ConductConsultation doctorId={doctorId} /></Tab.Pane> },
//     { menuItem: 'Logout', render: () => <Tab.Pane><Button color="blue" onClick={logout}>Logout</Button></Tab.Pane> },
//   ];

//   // Define tab panes for Patient Role
//   const PatientPanes = [
//     {
//       menuItem: 'Your Profile',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setRegisterPatientModalOpen(true)}>Add Your Information</Button>
//           <Button color="blue" onClick={() => setViewPatientInfoModalOpen(true)}>View Your Information</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'View Doctors',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setDoctorModalOpen(true)}>View Doctors</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Appointments',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setRequestAppointmentModalOpen(true)}>Request Appointment</Button>
//           <Button color="blue" onClick={() => setViewAppointmentsModalOpen(true)}>View Appointments</Button>
//           <Button color="blue" onClick={() => setCancelAppointmentModalOpen(true)}>Cancel Appointment</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Medical History',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setViewMedicalHistoryModalOpen(true)}>View Medical History</Button>
//           <Button color="blue" onClick={() => setAddMedicalHistoryModalOpen(true)}>Add Medical History</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Logout',
//       render: () => <Tab.Pane><Button color="blue" onClick={logout}>Logout</Button></Tab.Pane>,
//     },
//   ];

//   // Define tab panes for Admin Role
//   const AdminPanes = [
//     {
//       menuItem: 'Manage Doctors',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setAddDoctorModalOpen(true)}>Add Doctor</Button>
//           <Button color="blue" onClick={() => setUpdateDoctorModalOpen(true)}>Update Doctor</Button>
//           <Button color="blue" onClick={() => setDeleteDoctorModalOpen(true)}>Delete Doctor</Button>
//           <Button color="blue" onClick={() => setDoctorsModalOpen(true)}>View Doctors</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Manage Patients',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setAddPatientModalOpen(true)}>Add Patient</Button>
//           <Button color="blue" onClick={() => setUpdatePatientModalOpen(true)}>Update Patient</Button>
//           <Button color="blue" onClick={() => setDeletePatientModalOpen(true)}>Delete Patient</Button>
//           <Button color="blue" onClick={() => setPatientsModalOpen(true)}>View Patients</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Users',
//       render: () => (
//         <Tab.Pane>
//           <Button color="blue" onClick={() => setAddUserModalOpen(true)}>Add User</Button>
//         </Tab.Pane>
//       ),
//     },
//     {
//       menuItem: 'Logout',
//       render: () => <Tab.Pane><Button color="blue" onClick={logout}>Logout</Button></Tab.Pane>,
//     },
//   ];

//   return (
//     <Container>
//       <h1>User Dashboard</h1>
//       {userRole === 'ADMIN' && <Tab panes={AdminPanes} />}
//       {userRole === 'PATIENT' && <Tab panes={PatientPanes} />}
//       {userRole === 'DOCTOR' && <Tab panes={DoctorPanes} />}
      
//       {/* Modals for various functionalities */}
//       {addDoctorModalOpen && <AddDoctor onClose={() => setAddDoctorModalOpen(false)} />}
//       {addPatientModalOpen && <AddPatient onClose={() => setAddPatientModalOpen(false)} />}
//       {doctorsModalOpen && <ViewDoctors doctors={doctors} onClose={() => setDoctorsModalOpen(false)} />}
//       {patientsModalOpen && <ViewPatients patients={patients} onClose={() => setPatientsModalOpen(false)} />}
//       {updateDoctorModalOpen && <UpdateDoctor onClose={() => setUpdateDoctorModalOpen(false)} onDoctorDeleted={handleDoctorDeleted} />}
//       {updatePatientModalOpen && <UpdatePatient onClose={() => setUpdatePatientModalOpen(false)} onPatientDeleted={handlePatientDeleted} />}
//       {deleteDoctorModalOpen && <DeleteDoctor onClose={() => setDeleteDoctorModalOpen(false)} onDoctorDeleted={handleDoctorDeleted} />}
//       {deletePatientModalOpen && <DeletePatient onClose={() => setDeletePatientModalOpen(false)} onPatientDeleted={handlePatientDeleted} />}
//       {addUserModalOpen && <AddUser onClose={() => setAddUserModalOpen(false)} />}
//       {viewAppointmentsModalOpen && <ViewAppointments onClose={() => setViewAppointmentsModalOpen(false)} patientId={patientId} />}
//       {viewMedicalHistoryModalOpen && <ViewMedicalHistory onClose={() => setViewMedicalHistoryModalOpen(false)} patientId={patientId} />}
//       {addMedicalHistoryModalOpen && <AddMedicalHistory onClose={() => setAddMedicalHistoryModalOpen(false)} patientId={patientId} />}
//       {cancelAppointmentModalOpen && <CancelAppointment onClose={() => setCancelAppointmentModalOpen(false)} patientId={patientId} />}
//       {requestAppointmentModalOpen && <RequestAppointment onClose={() => setRequestAppointmentModalOpen(false)} patientId={patientId} />}
//       {registerPatientModalOpen && <RegisterPatient onClose={() => setRegisterPatientModalOpen(false)} patientId={patientId} />}
//       {viewPatientInfoModalOpen && <ViewPatientInfo onClose={() => setViewPatientInfoModalOpen(false)} patientId={patientId} />}
//       {doctorModalOpen && <ViewDoctors doctors={doctors} onClose={() => setDoctorModalOpen(false)} />}
//     </Container>
//   );
// };

// export default UserDashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Button, Tab } from 'semantic-ui-react';
import AddDoctor from './pages/Admin/AddDoctor';
import AddPatient from './pages/Admin/AddPatient';
import ViewDoctors from './pages/Admin/ViewDoctors';
import ViewPatients from './pages/Admin/ViewPatients';
import UpdateDoctor from './pages/Admin/UpdateDoctor';
import UpdatePatient from './pages/Admin/UpdatePatient';
import DeleteDoctor from './pages/Admin/DeleteDoctor';
import DeletePatient from './pages/Admin/DeletePatient';
import AddUser from './pages/Admin/AddUser';
import ViewAppointments from './pages/Patient/ViewAppointment';
import ViewMedicalHistory from './pages/Patient/ViewMedicalHistory';
import AddMedicalHistory from './pages/Patient/AddMedicalHistory';
import CancelAppointment from './pages/Patient/CancelAppointment';
import RequestAppointment from './pages/Patient/RequestAppointment';
import RegisterPatient from './pages/Patient/RegisterPatient';
import ViewPatientInfo from './pages/Patient/ViewPatientInfo';
import ViewDoctorAppointments from './pages/Doctor/ViewDoctorAppointments';
import RescheduleAppointment from './pages/Doctor/RescheduleAppointment';
import RejectAppointment from './pages/Doctor/RejectAppointment';
import PrescribeMedications from './pages/Doctor/PrescribeMedications';
import ConfirmAppointment from './pages/Doctor/ConfirmAppointment';
import ConductConsultation from './pages/Doctor/ConductConsultation';

import './css/UserDashboard.css';

const UserDashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctorModalOpen, setDoctorModalOpen] = useState(false);
  const [viewAppointmentsModalOpen, setViewAppointmentsModalOpen] = useState(false);
  const [viewMedicalHistoryModalOpen, setViewMedicalHistoryModalOpen] = useState(false); // Corrected state name
  const [addMedicalHistoryModalOpen, setAddMedicalHistoryModalOpen] = useState(false); // Corrected state name
  const [requestAppointmentModalOpen, setRequestAppointmentModalOpen] = useState(false);
  const [cancelAppointmentModalOpen, setCancelAppointmentModalOpen] = useState(false);
  const [patientId, setPatientId] = useState(''); // ID of the logged-in patient
  const [doctorId, setDoctorId] = useState('');
  const [addDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
  const [addPatientModalOpen, setAddPatientModalOpen] = useState(false);
  const [doctorsModalOpen, setDoctorsModalOpen] = useState(false);
  const [patientsModalOpen, setPatientsModalOpen] = useState(false);
  const [updateDoctorModalOpen, setUpdateDoctorModalOpen] = useState(false);
  const [deleteDoctorModalOpen, setDeleteDoctorModalOpen] = useState(false);
  const [updatePatientModalOpen, setUpdatePatientModalOpen] = useState(false);
  const [deletePatientModalOpen, setDeletePatientModalOpen] = useState(false);
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [registerPatientModalOpen, setRegisterPatientModalOpen] = useState(false);
  const [viewPatientInfoModalOpen, setViewPatientInfoModalOpen] = useState(false);
  const [doctorAppointments, setDoctorAppointments] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const role = queryParams.get('role');
    const id = queryParams.get('id'); // Assuming patient ID is passed as a query param for patient role
    setUserRole(role);
    setPatientId(id);
    if (role === 'ADMIN') {
      fetchDoctors();
      fetchPatients();
          } else if (role === 'DOCTOR') {
            setDoctorId(id);
            fetchDoctorAppointments(id); // Fetch appointments for doctor
            fetchPatients(); // Fetch patients for doctor to reference
          } else if (role === 'PATIENT') {
            getDoctors(); // Fetch doctors when patient logs in
          }
    }, [location]);

  // Fetch doctors with token for ADMIN role
  const fetchDoctors = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/api/admin/viewDoctors', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching doctors!', error);
      });
  };

  // Fetch doctors with token for PATIENT role
  const getDoctors = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/api/patients/viewDoctors', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching doctors!', error);
      });
  };

  // Fetch patients with token for ADMIN role
  const fetchPatients = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:8080/api/admin/viewPatients', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching patients!', error);
      });
  };
 const fetchDoctorAppointments = (doctorId) => {
    const token = localStorage.getItem('token');
    axios
      .get(`http://localhost:8080/api/doctors/appointments/${doctorId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setDoctorAppointments(response.data))
      .catch((error) => console.error('Error fetching doctor appointments!', error));
  };

  // Logout functionality
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/user');
  };

  const handleDoctorDeleted = () => {
    fetchDoctors(); // Refresh the doctor list after deletion
    console.log('Doctor deleted and doctor list updated.');
  };

  // Callback function for when a patient is deleted
  const handlePatientDeleted = () => {
    fetchPatients(); // Refresh the patient list after deletion
    console.log('Patient deleted and patient list updated.');
  };
  const DoctorPanes = [
    { menuItem: 'View Appointments', render: () => <Tab.Pane><ViewDoctorAppointments doctorId={doctorId} appointments={doctorAppointments} /></Tab.Pane> },
    { menuItem: 'Confirm Appointments', render: () => <Tab.Pane><ConfirmAppointment doctorId={doctorId} /></Tab.Pane> },
    { menuItem: 'Reschedule Appointments', render: () => <Tab.Pane><RescheduleAppointment doctorId={doctorId} /></Tab.Pane> },
    { menuItem: 'Reject Appointments', render: () => <Tab.Pane><RejectAppointment doctorId={doctorId} /></Tab.Pane> },
    { menuItem: 'Prescriptions', render: () => <Tab.Pane><PrescribeMedications doctorId={doctorId} /></Tab.Pane> },
    { menuItem: 'Consultations', render: () => <Tab.Pane><ConductConsultation doctorId={doctorId} /></Tab.Pane> },
    { menuItem: 'Logout', render: () => <Tab.Pane><Button color="blue" onClick={logout}>Logout</Button></Tab.Pane> },
      ];

  // Define tab panes for Patient Role
  const PatientPanes = [
    {
      menuItem: 'Your Profile',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setRegisterPatientModalOpen(true)}>Add Your Information</Button>
          <Button color="blue" onClick={() => setViewPatientInfoModalOpen(true)}>View Your Information</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'View Doctors',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setDoctorModalOpen(true)}>View Doctors</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Appointments',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setRequestAppointmentModalOpen(true)}>Request Appointment</Button>
          <Button color="blue" onClick={() => setViewAppointmentsModalOpen(true)}>View Appointments</Button>
          <Button color="blue" onClick={() => setCancelAppointmentModalOpen(true)}>Cancel Appointment</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Medical History',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setViewMedicalHistoryModalOpen(true)}>View Medical History</Button>
          <Button color="blue" onClick={() => setAddMedicalHistoryModalOpen(true)}>Add Medical History</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Logout',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={logout}>Logout</Button>
        </Tab.Pane>
      ),
    },
  ];

  // Define tab panes for Admin Role
  const Adminpanes = [
    {
      menuItem: 'Doctor Management',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setAddDoctorModalOpen(true)}>Add Doctor</Button>
          <Button color="blue" onClick={() => setUpdateDoctorModalOpen(true)}>Update Doctor</Button>
          <Button color="blue" onClick={() => setDeleteDoctorModalOpen(true)}>Delete Doctor</Button>
          <Button color="blue" onClick={() => setDoctorsModalOpen(true)}>View Doctors</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Patient Management',
      render: () => (
        <Tab.Pane>
          <Button color="blue" onClick={() => setAddPatientModalOpen(true)}>Add Patient</Button>
          <Button color="blue" onClick={() => setUpdatePatientModalOpen(true)}>Update Patient</Button>
          <Button color="blue" onClick={() => setDeletePatientModalOpen(true)}>Delete Patient</Button>
          <Button color="blue" onClick={() => setPatientsModalOpen(true)}>View Patients</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'User Management',
      render: () => (
        <Tab.Pane>
          <Button primary onClick={() => setAddUserModalOpen(true)}>Add User</Button>
        </Tab.Pane>
      ),
    },
    {
      menuItem: 'Logout',
      render: () => (
        <Tab.Pane>
          {/* Logout Button in the Settings Tab */}
          <Button color="blue" onClick={logout}>Logout</Button>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Container className="user-dashboard-container">
      <h1>Welcome! You are logged in as {userRole}</h1>
      {userRole === 'PATIENT' && (
        <div>
          <Tab menu={{ color: 'blue', inverted: true, attached: false, tabular: false }} panes={PatientPanes} />

          {/* Modals for Patient Operations */}
          <RegisterPatient open={registerPatientModalOpen} onClose={() => setRegisterPatientModalOpen(false)} />
          <ViewPatientInfo open={viewPatientInfoModalOpen}  onClose={() => setViewPatientInfoModalOpen(false)} />
          <ViewDoctors doctors={doctors} open={doctorModalOpen} onClose={() => setDoctorModalOpen(false)} />
          <RequestAppointment open={requestAppointmentModalOpen} onClose={() => setRequestAppointmentModalOpen(false)} patientId={patientId} />
          <ViewAppointments open={viewAppointmentsModalOpen} onClose={() => setViewAppointmentsModalOpen(false)} patientId={patientId} />
          <ViewMedicalHistory open={viewMedicalHistoryModalOpen} onClose={() => setViewMedicalHistoryModalOpen(false)} patientId={patientId} /> {/* Corrected the modal props */}
          <AddMedicalHistory open={addMedicalHistoryModalOpen} onClose={() => setAddMedicalHistoryModalOpen(false)} patientId={patientId} /> {/* Corrected the modal props */}
          <CancelAppointment open={cancelAppointmentModalOpen} onClose={() => setCancelAppointmentModalOpen(false)} patientId={patientId} />
        </div>
      )}
      {userRole === 'ADMIN' && (
        <div>
          <Tab menu={{ color: 'blue', inverted: true, attached: false, tabular: false }} panes={Adminpanes} />
          {/* Modals for Doctor Operations */}
          <AddDoctor open={addDoctorModalOpen} onClose={() => setAddDoctorModalOpen(false)} />
          <UpdateDoctor open={updateDoctorModalOpen} onClose={() => setUpdateDoctorModalOpen(false)} />
          <ViewDoctors doctors={doctors} open={doctorsModalOpen} onClose={() => setDoctorsModalOpen(false)} />

          {/* Modals for Patient Operations */}
          <AddPatient open={addPatientModalOpen} onClose={() => setAddPatientModalOpen(false)} />
          <UpdatePatient open={updatePatientModalOpen} onClose={() => setUpdatePatientModalOpen(false)} />
          <ViewPatients patients={patients} open={patientsModalOpen} onClose={() => setPatientsModalOpen(false)} />

          {/* Modals for Delete Operations */}
          <DeleteDoctor
            open={deleteDoctorModalOpen}
            onClose={() => setDeleteDoctorModalOpen(false)}
            onDoctorDeleted={handleDoctorDeleted} // Pass the callback function here
          />
          <DeletePatient
            open={deletePatientModalOpen}
            onClose={() => setDeletePatientModalOpen(false)}
            onPatientDeleted={handlePatientDeleted} // Pass the callback function here
          />

          {/* Modals for User Operations */}
          <AddUser open={addUserModalOpen} onClose={() => setAddUserModalOpen(false)} />
        </div>
      )}
      {userRole === 'DOCTOR' && <Tab menu={{ color: 'blue', inverted: true, attached: false, tabular: false }} panes={DoctorPanes} />}
    </Container>
  );
};

export default UserDashboard; 
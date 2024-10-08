// MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import ContactForm from './Contactform';
import Services from './Services';
import User from './User';
import UserDashboard from './UserDashboard';
import AddDoctor from './pages/Admin/AddDoctor';
import AddPatient from './pages/Admin/AddPatient';
import UpdatePatient from './pages/Admin/UpdatePatient';
import UpdateDoctor from './pages/Admin/UpdateDoctor';
import ViewPatients from './pages/Admin/ViewPatients';
import ViewDoctors from './pages/Admin/ViewDoctors';
import DeletePatient from './pages/Admin/DeletePatient';
import DeleteDoctor from './pages/Admin/DeleteDoctor';
import AddUser from './pages/Admin/AddUser';
const MainContent = () => {
  return (
    <Segment basic piled style={{ paddingLeft: 11, background: "transparent" }}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/user' element={<User />} />
        <Route path='/contactform' element={<ContactForm />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path="/adddoctor" element={<AddDoctor />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/updatepatient" element={<UpdatePatient />} />
        <Route path="/updatedoctor" element={<UpdateDoctor />} />
        <Route path="/viewpatients" element={<ViewPatients />} />
        <Route path="/viewdoctors" element={<ViewDoctors />} />
        <Route path="/deletepatient" element={<DeletePatient />} />
        <Route path="/deletedoctor" element={<DeleteDoctor />} />
        <Route path="/adduser" element ={<AddUser/>} />
      </Routes>
    </Segment>
  );
}
export default MainContent;

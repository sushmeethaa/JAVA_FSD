import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './css/User.css';
function User() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('PATIENT');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', loginData);
      const token = response.data.jwt;
      localStorage.setItem('token', token);
      const userId = response.data.userId;
      const role = response.data.userRole; 
      setUserRole(role);
      alert('Login successful!');
      navigate(`/dashboard?role=${role}&id=${userId}`); // Redirect to UserDashboard with query parameters
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed! Please check your credentials.');
    }
  };

  const signupUser = async (e) => {
    e.preventDefault();
    const signupData = { email: signupEmail, password: signupPassword, name, userRole };

    try {
      await axios.post('http://localhost:8080/api/auth/signup', signupData);
      alert('Signup successful! You can now log in.');
      setIsLogin(true);
    } catch (error) {
      console.error('There was an error signing up!', error);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <div className="user-management-container">
      <h1>User Management</h1>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={isLogin ? loginUser : signupUser}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={!isLogin}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={isLogin ? email : signupEmail}
          onChange={(e) => isLogin ? setEmail(e.target.value) : setSignupEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={isLogin ? password : signupPassword}
          onChange={(e) => isLogin ? setPassword(e.target.value) : setSignupPassword(e.target.value)}
          required
        />
        {isLogin ? (
          <button type="submit">Login</button>
        ) : (
          <>
            <select value={userRole} onChange={(e) => setUserRole(e.target.value)} required>
              <option value="PATIENT">Patient</option>
              {/* <option value="DOCTOR">Doctor</option>
              <option value="ADMIN">Admin</option> */}
            </select>
            <button type="submit">Signup</button>
          </>
        )}
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'New User' : 'Already a User'}
        </button>
      </form>
    </div>
  );
}
export default User;

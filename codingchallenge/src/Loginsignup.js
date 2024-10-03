import React, { useState } from 'react';
import axios from 'axios';
const LoginSignup = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [name, setName] = useState('');
  const [userRole, setUserRole] = useState('0'); // Default to Admin
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  // Handle Login Submission
  const loginUser = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    axios
      .post('http://localhost:9000/api/auth/login', loginData)
      .then((response) => {
        const token = response.data.jwt; // Get JWT token from response
        localStorage.setItem('token', token); // Save token in localStorage
        alert('Login successful!');
        onLogin(); // Call the onLogin prop to indicate successful login
      })
      .catch((error) => {
        console.error('There was an error logging in!', error);
        alert('Login failed! Please check your credentials.');
      });
  };

  // Handle Signup Submission
  const signupUser = (e) => {
    e.preventDefault();
    const signupData = {
      email: signupEmail,
      password: signupPassword,
      name,
      userRole: parseInt(userRole, 10), // Convert role to number (0 for Admin, 1 for User)
    };

    axios
      .post('http://localhost:9000/api/auth/signup', signupData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        alert('Signup successful! You can now log in.');
        setIsLogin(true); // Switch to Login form after successful signup
      })
      .catch((error) => {
        console.error('There was an error signing up!', error);
        alert('Signup failed! Please try again.');
      });
  };

  return (
    <div >
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <form onSubmit={isLogin ? loginUser : signupUser} >
        {/* Name Field for Signup */}
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        {/* Email Field */}
        <input
          type="email"
          placeholder="Email"
          value={isLogin ? email : signupEmail}
          onChange={(e) => (isLogin ? setEmail(e.target.value) : setSignupEmail(e.target.value))}
          required
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          value={isLogin ? password : signupPassword}
          onChange={(e) => (isLogin ? setPassword(e.target.value) : setSignupPassword(e.target.value))}
          required
        />

        {/* Role Selector for Signup */}
        {!isLogin && (
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)} style={{ padding: '10px', borderRadius: '5px' }}>
            <option value="0">Admin</option>
            <option value="1">User</option>
          </select>
        )}

        {/* Submit Button */}
        <button type="submit" >
          {isLogin ? 'Login' : 'Signup'}
        </button>

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'New User? Signup' : 'Already a User? Login'}
        </button>
      </form>
    </div>
  );
};
export default LoginSignup;

import   { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import img1 from '../Images/img1.jpg';

const Login = () => {
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const [signupEmailError, setSignupEmailError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [isLoginFormActive, setIsLoginFormActive] = useState(true);

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
    setLoginEmailError('');
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
    setLoginPasswordError('');
  };

  const handleSignupEmailChange = (e) => {
    setSignupEmail(e.target.value);
    setSignupEmailError('');
  };

  const handleSignupPasswordChange = (e) => {
    setSignupPassword(e.target.value);
    setSignupPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError('');
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(loginEmail)) {
      setLoginEmailError('Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordRegex.test(loginPassword)) {
      setLoginPasswordError(
        'Password must contain letters (both uppercase and lowercase), numbers, and one special character. Minimum length is 8 characters.'
      );
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email: loginEmail,
        password: loginPassword,
      });

      console.log(response.data);
      const token = response.data.token; // Extract the token from the response
      console.log('Token:', token); // Log the token to the console
      localStorage.setItem('token', token);
      if (loginEmail === 'admin@gmail.com' && loginPassword === 'Admin@123') {
        navigate('/Admin');
      } else if (response.data.role === 'ADMIN') { 
        navigate('/Admin');
      } else {
        navigate('/Homepage');
      }
    }

     catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(signupEmail)) {
      setSignupEmailError('Please enter a valid email address.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/;
    if (!passwordRegex.test(signupPassword)) {
      setSignupPasswordError(
        'Password must contain letters (both uppercase and lowercase), numbers, and one special character. Minimum length is 8 characters.'
      );
      return;
    }

    if (signupPassword !== confirmPassword) {
      setConfirmPasswordError('Password do not match.');
      return;
    }

    if (name.trim() === '') {
      setNameError('Please enter your name.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        name,
        email: signupEmail,
        password: signupPassword,
        confirmPassword:confirmPassword
      });

      console.log(response.data);

      setIsLoginFormActive(true);
    } catch (error) {
      console.error('Signup failed', error);
    }
  };

  return (
    <body>
      <div className={`login ${isLoginFormActive ? 'login-active' : ''}`}>
        <div className="container">
          <input type="checkbox" id="flip" checked={!isLoginFormActive} onChange={() => setIsLoginFormActive(!isLoginFormActive)} />
          <div className="cover">
            <div className="front">
              <img src={img1} alt="" />
              <div className="text"></div>
            </div>
            <div className="back">
              <img className="backImg" src={img1} alt="" />
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className={`login-form ${isLoginFormActive ? 'active' : ''}`}>
                <div className="title">Login</div>
                <center>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="input-boxes">
                      <div className="input-box">
                        <i className="fas fa-envelope"></i>
                        <input
                          type="text"
                          placeholder="Enter your email"
                          value={loginEmail}
                          onChange={handleLoginEmailChange}
                          required
                        />
                      </div>
                      <div className={`error-message ${loginEmailError ? 'error-visible' : ''}`}>{loginEmailError}</div>
                      <div className="input-box">
                        <i className="fas fa-lock"></i>
                        <input
                          type="password"
                          placeholder="Enter your password"
                          value={loginPassword}
                          onChange={handleLoginPasswordChange}
                          required
                        />
                      </div>
                      <div className={`error-message ${loginPasswordError ? 'error-visible' : ''}`}>{loginPasswordError}</div>
                      <div className="button input-box">
                        <input type="submit" value="Submit" />
                      </div>
                      <div className="text sign-up-text">
                        Don&apos;t have an account? <label htmlFor="flip">Signup now</label>
                      </div>
                    </div>
                  </form>
                </center>
              </div>
              <div className={`signup-form ${isLoginFormActive ? '' : 'active'}`}>
                <div className="title">Signup</div>
                <form onSubmit={handleSignupSubmit}>
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user"></i>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleNameChange}
                        required
                      />
                    </div>
                    <div className={`error-message ${nameError ? 'error-visible' : ''}`}>{nameError}</div>
                    <div className="input-box">
                      <i className="fas fa-envelope"></i>
                      <input
                        type="text"
                        placeholder="Enter your email"
                        value={signupEmail}
                        onChange={handleSignupEmailChange}
                        required
                      />
                    </div>
                    <div className={`error-message ${signupEmailError ? 'error-visible' : ''}`}>{signupEmailError}</div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        value={signupPassword}
                        onChange={handleSignupPasswordChange}
                        required
                      />
                    </div>
                    <div className={`error-message ${signupPasswordError ? 'error-visible' : ''}`}>{signupPasswordError}</div>
                    <div className="input-box">
                      <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                    </div>
                    <div className={`error-message ${confirmPasswordError ? 'error-visible' : ''}`}>{confirmPasswordError}</div>
                    <div className="button input-box">
                      <input type="submit" value="Submit" />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account? <label htmlFor="flip">Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
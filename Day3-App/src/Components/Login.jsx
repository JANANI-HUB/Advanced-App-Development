import './Login.css';
import { Link } from 'react-router-dom';
import img1 from '../Images/img1.jpg'
const Login = () => {
  return (
    <body>
    <div className="login">
    <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src={img1} alt=""/>
        <div className="text">
          
        </div>
      </div>
      <div className="back">
        <img className="backImg" src={img1} alt=""/>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
           <center>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              
              <div className="button input-box">
                <Link to="/Homepage"><input type="submit" value="Submit"/></Link>
              </div>
              <div className="text sign-up-text">Dont have an account? <label htmlFor="flip">Sigup now</label></div>
            </div>
            </form>
        </center>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Submit"/>
              </div>
              <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
  </div>
    </body>

  
  )
}

export default Login

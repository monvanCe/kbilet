import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(

  )
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-50 h-50 bg-light rounded p-5">
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-secondary" onClick={() => {navigate('/register')}}>
              Register
            </button>
            <div className="border-right mx-3" style={{ height: '30px' }}></div>
            <button type="submit" className="btn btn-primary" onClick={() => {navigate('/home')}}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-50 h-75 bg-light rounded p-5"
      style={{overflowY: 'scroll'}}
      >
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
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
            <div className="form-group col-md-6">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input type="text" className="form-control" id="firstName" />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input type="text" className="form-control" id="lastName" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>ID Number</label>
              <input type="text" className="form-control" id="idNumber"/>
            </div>
            <div className="form-group col-md-6">
              <label>Gender</label>
              <select className="form-control" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <input type="date" className="form-control" id="birthDate" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="submit" className="btn btn-secondary" onClick={() => {navigate('/login')}}>
              Cancel
            </button>
            <div className="border-right mx-3" style={{ height: '30px' }}></div>
            <button type="button" className="btn btn-primary" onClick={() => {navigate('/login')}}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

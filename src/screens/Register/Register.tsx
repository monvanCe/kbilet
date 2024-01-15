import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';

import { usersAtom } from '../../datas/jotaiStates';

function Register() {
  const navigate = useNavigate();
  const [users, setUsers] = useAtom(usersAtom);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    idNumber: 0,
    gender: '',
    birthDate: '',
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const el = users.find((d: any) => d.email === formData.email);

    console.log(formData);

    if (!el) {
      setUsers([...users, formData]);
      alert('succesfully registered');
      navigate('/login');
    } else {
      alert('User already registered');
      navigate('/login');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div
        className="w-50 h-75 bg-light rounded p-5"
        style={{ overflowY: 'scroll' }}
      >
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formData.email}
                onChange={handleChange}
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
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>ID Number</label>
              <input
                type="text"
                className="form-control"
                id="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label>Gender</label>
              <select
                className="form-control"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Birth Date</label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={() => {
                navigate('/login');
              }}
            >
              Cancel
            </button>
            <div className="border-right mx-3" style={{ height: '30px' }}></div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    departure: 'istanbul',
    arrival: 'ankara',
    departureDate: '2024-01-11',
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

    navigate(
      `/inquery?departure=${formData.departure}&arrival=${formData.arrival}&departureDate=${formData.departureDate}`
    );
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-50 h-50 bg-light rounded p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Kalkış Yeri</label>
            <select
              className="form-control"
              id="departure"
              value={formData.departure}
              onChange={handleChange}
            >
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
              <option value="antalya">Antalya</option>
            </select>
          </div>
          <div className="form-group">
            <label>Varış Yeri</label>
            <select
              className="form-control"
              id="arrival"
              value={formData.arrival}
              onChange={handleChange}
            >
              <option value="ankara">Ankara</option>
              <option value="istanbul">İstanbul</option>
              <option value="izmir">İzmir</option>
              <option value="antalya">Antalya</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sefer Tarihi</label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary w-25">
              Ara
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;

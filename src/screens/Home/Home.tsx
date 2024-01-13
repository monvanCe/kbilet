import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-50 h-50 bg-light rounded p-5">
        <form>
          <div className="form-group">
            <label>Kalkış Yeri</label>
            <select className="form-control" id="departure">
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
              {/* Diğer seçenekler */}
            </select>
          </div>
          <div className="form-group">
            <label>Varış Yeri</label>
            <select className="form-control" id="arrival">
              <option value="ankara">Ankara</option>
              <option value="istanbul">İstanbul</option>
              <option value="izmir">İzmir</option>
              {/* Diğer seçenekler */}
            </select>
          </div>
          <div className="form-group">
            <label>Sefer Tarihi</label>
            <input type="date" className="form-control" id="departureDate" />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary w-25" onClick={() => {navigate('/inquery')}}>
              Ara
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;

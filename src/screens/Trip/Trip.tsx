import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import jsonData from '../../datas/trips.json';
import './Trip.css';
import { tripInstance } from '../../datas/interfaces';

function Trip() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const tripID = Number(queryParams.get('tripID'));

  const trip = jsonData.trips.find((d: tripInstance) => d.tripID === tripID);

  const gridItems = [];
  for (let row = 5; row >= 1; row--) {
    for (let col = 1; col <= 10; col++) {
      gridItems.push(
        <div key={`${col}-${row}`} className={row !== 3 ? 'grid-item btn' : ''}>
          {row !== 3 && `${col}x${row}`}
        </div>
      );
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-50 bg-light rounded p-2 d-flex flex-row">
        <div className="w-75 d-flex flex-column pr-3">
          <h3>{`${trip?.departureCity} şehri --> ${trip?.arrivalCity} şehri`}</h3>
          <p>{`Sefer Tarihi: ${trip?.departureTime}`}</p>
          <div className="d-flex flex-row h-25 w-25 justify-content-around align-items-center">
            <div className="w-25 h-25 d-flex flex-row">
              <div className="h-100 w-50 bg-info" />
              <div className="h-100 w-50 bg-danger" />
            </div>
            <p className="mt-3">Dolu</p>
            <div className="w-25 h-25 bg-light border" />
            <p className="mt-3">Boş</p>
          </div>
          <div className="border flex-grow-1 mr-2 rounded grid-container p-1 overflow-auto">
            {gridItems}
          </div>
        </div>
        <div className="w-25 d-flex flex-column align-items-end justify-content-between">
          <div className="d-flex flex-column align-items-end">
            <p>Seçilen Koltuk</p>
            <p>15-25-38</p>
            <p>Adet Fiyat</p>
            <p>542₺</p>
            <p>Toplam Fiyat</p>
            <p>1626</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate('/payment');
            }}
          >
            Öde
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trip;

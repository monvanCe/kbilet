import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import jsonData from '../../datas/trips.json';
import { tripInstance } from '../../datas/interfaces';
import { useAtom } from 'jotai';
import { usersAtom } from '../../datas/jotaiStates';

function Payment() {
  const [user] = useAtom(usersAtom);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const price = queryParams.get('price');
  const selectedSeats = queryParams.get('selectedSeats');
  const tripID = Number(queryParams.get('tripID'));
  const trip = jsonData.trips.find((d: tripInstance) => d.tripID === tripID);

  const handlePayment = () => {
    navigate('/process');
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-75 bg-light rounded p-4 d-flex flex-row">
        <div className="d-flex flex-column justify-content-between w-50 pr-3">
          <div>
            <h3>{`${trip?.departureCity} --> ${trip?.arrivalCity}`}</h3>
            <p>{`Sefer Tarihi: ${trip?.departureTime.replace('T', ' / ')}`}</p>
          </div>
          <div>
            <h5>Yolcular:</h5>
            {[...Array(trip && Number(price) / trip?.price)].map((_, i) => (
              <div key={i} className="d-flex flex-row">
                {user[0].firstName + ' ' + user[0].lastName}
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column justify-content-between w-50 pl-3 border-left">
          <div>
            <h5>Seçilen Koltuklar:</h5>
            <p>{selectedSeats}</p>
          </div>
          <div>
            <h5>Toplam Fiyat:</h5>
            <p>{price}</p>
          </div>
          <form onSubmit={handlePayment}>
            <div className="form-group">
              <label htmlFor="cardName">Kart Üzerindeki İsim</label>
              <input
                type="text"
                className="form-control"
                id="cardName"
                placeholder="Adınız Soyadınız"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardNumber">Kart Numarası</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="expirationDate">Son Kullanma Tarihi</label>
                <input
                  type="text"
                  className="form-control"
                  id="expirationDate"
                  placeholder="MM/YY"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvc"
                  placeholder="123"
                />
              </div>
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Ödeme Yap
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;

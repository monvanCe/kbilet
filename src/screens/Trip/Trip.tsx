import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import jsonData from '../../datas/trips.json';
import { tripInstance } from '../../datas/interfaces';
import SVGComponent from '../../components/BusTemplate';
import { useAtom } from 'jotai';
import { usersAtom } from '../../datas/jotaiStates';

function Trip() {
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [user] = useAtom(usersAtom);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const tripID = Number(queryParams.get('tripID'));

  const trip = jsonData.trips.find((d: tripInstance) => d.tripID === tripID);

  const seatOnClick = (seatNumber: number) => {
    console.log(selectedSeats);
    if (trip?.seats[seatNumber - 1] == 0 && selectedSeats.length < 5) {
      const isEven = seatNumber % 2 === 0;

      if (isEven) {
        if (
          trip.seats[seatNumber - 2] == 0 ||
          trip.seats[seatNumber - 2] == user[0].gender
        ) {
          const el = selectedSeats.find((d) => d == seatNumber);

          if (el) {
            alert('you have already choose this seat');
          } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
          }
        } else {
          alert('You cannot take the seat next to the opposite gender.');
        }
      } else {
        if (
          trip.seats[seatNumber] == 0 ||
          trip.seats[seatNumber] == user[0].gender
        ) {
          const el = selectedSeats.find((d) => d == seatNumber);

          if (el) {
            const removedSeat = selectedSeats.filter((d) => d !== seatNumber);

            setSelectedSeats(removedSeat);
          } else {
            setSelectedSeats([...selectedSeats, seatNumber]);
          }
        } else {
          alert('You cannot take the seat next to the opposite gender.');
        }
      }
    } else {
      alert('maksimum 5 koltuk seçebilirsiniz');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-50 bg-light rounded p-2 d-flex flex-row">
        <div className="w-75 d-flex flex-column pr-3">
          <h3>{`${trip?.departureCity} --> ${trip?.arrivalCity} `}</h3>
          <p>{`Sefer Tarihi: ${trip?.departureTime.replace('T', ' / ')}`}</p>
          <div className="d-flex flex-row h-25 w-25 justify-content-around align-items-center">
            <div className="w-25 h-25 d-flex flex-row">
              <div className="h-100 w-50 bg-info" />
              <div className="h-100 w-50 bg-danger" />
            </div>
            <p className="mt-3">Dolu</p>
            <div className="w-25 h-25 bg-light border" />
            <p className="mt-3">Boş</p>
          </div>
          <div className="border flex-grow-1 mr-2 rounded p-1 overflow-auto d-flex">
            <SVGComponent trip={trip} seatOnClick={seatOnClick} />
          </div>
        </div>
        <div className="w-25 d-flex flex-column align-items-end justify-content-between">
          <div className="d-flex flex-column align-items-end">
            <p>Seçilen Koltuk</p>
            <p>{selectedSeats.join('-')}</p>
            <p>Adet Fiyat</p>
            <p>{trip?.price}</p>
            <p>Toplam Fiyat</p>
            <p>{trip && trip.price * selectedSeats.length}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(
                `/payment?price=${trip && trip.price * selectedSeats.length}`
              );
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

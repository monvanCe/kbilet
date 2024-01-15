import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import jsonData from '../../datas/trips.json';
import { tripInstance } from '../../datas/interfaces';

function InQuery() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [filteredTrips, setFilteredTrips] = useState<tripInstance[]>([]);
  const [totalAvailableSeats, setTotalAvailableSeats] = useState<number>(0);

  const departure = queryParams.get('departure');
  const arrival = queryParams.get('arrival');
  const departureDate = queryParams.get('departureDate');

  useEffect(() => {
    // Filter trips based on query parameters
    const filteredTrips = jsonData.trips.filter((trip: tripInstance) => {
      return (
        trip.departureCity === departure &&
        trip.arrivalCity === arrival &&
        trip.departureTime.includes(departureDate || '')
      );
    });

    const totalSeats = filteredTrips.reduce(
      (total, trip) => total + trip.availableSeatsCount,
      0
    );
    setTotalAvailableSeats(totalSeats);

    setFilteredTrips(filteredTrips);
  }, [departure, arrival, departureDate]);

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div
        className="w-75 h-75 bg-light rounded p-2"
        style={{ overflowY: 'scroll' }}
      >
        <p>{filteredTrips?.length} Sefer Bulundu</p>
        <div className="flex-row d-flex rounded bg-dark justify-content-between px-2 pt-2">
          <div>
            <p className="text-light text-left">{`${departure} --> ${arrival}`}</p>
            <p className="text-light text-left">{departureDate}</p>
          </div>
          <div>
            <p className="text-light text-right">
              {totalAvailableSeats + ' boş koştuk'}
            </p>
          </div>
        </div>
        {filteredTrips.map((trip: any, index) => (
          <div
            key={index}
            className="flex-row d-flex rounded border justify-content-between px-2 pt-2 mt-2 pointer"
            onClick={() => {
              // You can pass the selected trip data to the '/Trip' route
              navigate(`/trip?tripID=${trip.tripID}`);
            }}
          >
            <div>
              <p className="text-left">{`${trip.departureCity} --> ${trip.arrivalCity}`}</p>
              <p className="text-left">
                {trip.departureTime.replace('T', ' / ')}
              </p>
            </div>
            <div>
              <p className="text-right">
                {trip.availableSeatsCount + ' boş koltuk'}
              </p>
              <p className="text-right">{`Fiyat: ${trip.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InQuery;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function InQuery() {
  const navigate = useNavigate()

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-75 bg-light rounded p-2" style={{overflowY: 'scroll'}}>
        <p>10 Sefer Bulundu</p>
        <div className='flex-row d-flex rounded bg-dark justify-content-between px-2 pt-2'>
            <div>
                <p className='text-light text-left'>{`Departure --> Destination`}</p>
                <p className='text-light text-left'>{`Date`}</p>
            </div>
            <div>
                <p className='text-light text-right'>{`Empty Seats`}</p>
                <p className='text-light text-right'>{`Price`}</p>
            </div>
        </div>
            {[...Array(5)].map((_, index) => (
            <div key={index} className='flex-row d-flex rounded border justify-content-between px-2 pt-2 mt-2 pointer' onClick={() => {navigate('/Trip')}}>
                <div>
                    <p className='text-left'>{`Departure --> Destination`}</p>
                    <p className='text-left'>{`Date`}</p>
                </div>
                <div>
                    <p className='text-right'>{`Empty Seats`}</p>
                    <p className='text-right'>{`Price`}</p>
                </div>
            </div>
            ))}
      </div>
    </div>
  );
}

export default InQuery;

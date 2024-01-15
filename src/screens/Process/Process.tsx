import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Process() {
  const [isPayment, setIsPayment] = useState<boolean>(false);
  const navigate = useNavigate();

  setTimeout(() => {
    setIsPayment(true);
  }, 3000);

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-75 bg-light rounded p-2 d-flex flex-column align-items-center justify-content-center">
        <div
          style={{
            opacity: isPayment ? 1 : 0,
            transition: 'opacity 3s',
            color: 'green',
          }}
        >
          <h3>Ödeme başarılı</h3>
        </div>
        <div
          style={{
            opacity: isPayment ? 1 : 0,
            transition: 'opacity 3s',
            marginTop: '15px',
          }}
        >
          <button
            onClick={() => {
              navigate('/home');
            }}
            className="btn btn-primary"
          >
            Devam et
          </button>
        </div>

        {!isPayment && (
          <div className="spinner-border text-primary" role="status"></div>
        )}
      </div>
    </div>
  );
}

export default Process;

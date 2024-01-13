import React from 'react';

function Payment() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
      <div className="w-75 h-75 bg-light rounded p-4 d-flex flex-row">
        <div className='d-flex flex-column justify-content-between w-50 pr-3'>
          <div>
            <h3>{`X şehri --> Y şehri`}</h3>
            <p>{`Sefer Tarihi: 20 Ocak 2024`}</p>
          </div>
          <div>
            <h5>Yolcular:</h5>
            {[...Array(3)].map((_, i) => (
              <div key={i} className='d-flex flex-row'>
                {'Passenger ' + (i + 1)}
              </div>
            ))}
          </div>
        </div>
        <div className='d-flex flex-column justify-content-between w-50 pl-3 border-left'>
          <div>
            <h5>Seçilen Koltuklar:</h5>
            <p>12 - 25 - 34</p>
          </div>
          <div>
            <h5>Toplam Fiyat:</h5>
            <p>1626 TL</p>
          </div>
          <form>
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
            <div className='w-100 d-flex justify-content-end'>
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

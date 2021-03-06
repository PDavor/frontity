import React from "react";

const Izdvojeno = () => {
  return (
    // <!-- izdvojeno pitanja info -->
    <div className="container py-0 py-sm-4 izdvojeno">
      <div className="row">
        <div className="col-sm-12 col-md-4 text-light p-4">
          <h3>Izdvojeno</h3>
          <p className="text-light">
            <a href="#">Objave biračima </a>
          </p>
          <p className="text-light">
            <a href="#">*Privremene regulacije prometa </a>
          </p>
          <p className="text-light">
            <a href="#">*Natječaji / pozivi / javne rasprave </a>
          </p>
          <p className="text-light">
            <a href="#">*Javna nabava</a>
          </p>
        </div>
        <div className="col-sm-12 col-md-4 bg-opacity-75 text-light p-4">
          <h3>Česta pitanja</h3>
          <p className="text-light">
            <a href="#">+Zapošljavanje</a>
          </p>
          <p className="text-light">
            <a href="#">*Zaštita žrtava obiteljskog nasilja</a>
          </p>
          <p className="text-light">
            <a href="#">+Pravo na pristup informacijama</a>
          </p>
          <p className="text-light">
            <a href="#">+Zaštita osobnih podataka</a>
          </p>
        </div>
        <div className="col-sm-12 col-md-4 text-light p-4">
          <h3>Info</h3>
          <p className="text-light">
            <a href="#">+Oglasna ploča</a>
          </p>
          <p className="text-light">
            <a href="#">+Zagreb u brojkama</a>
          </p>
          <p className="text-light">
            <a href="#">+Građanska stanja</a>
          </p>
          <p className="text-light">
            <a href="#">+Gradsko glasilo</a>
          </p>
        </div>
      </div>
    </div>
    // <!-- izdvojeno pitanja info kraj -->
  );
};

export default Izdvojeno;

import React from "react";
import grb from "./assets/img/grb.png";
const Dno = () => {
  return (
    <>
      {/* <!-- moglo bi vas zanimati --> */}
      <div class="container mb-4">
        <h5 class="py-4 text-plava">VAŽNIJE POVEZNICE</h5>
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <p>
              <i class="fas fa-chevron-right"></i> Akti načelnika
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Geoportal
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Izbori
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Javna nabava
            </p>
          </div>
          <div class="col-sm-12 col-md-4">
            <p>
              <i class="fas fa-chevron-right"></i> Akti načelnika
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Geoportal
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Izbori
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Javna nabava
            </p>
          </div>
          <div class="col-sm-12 col-md-4">
            <p>
              <i class="fas fa-chevron-right"></i> Akti načelnika
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Geoportal
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Izbori
            </p>
            <p>
              <i class="fas fa-chevron-right"></i> Javna nabava
            </p>
          </div>
        </div>
      </div>
      {/* <!-- moglo bi vas zanimati kraj -->
    <!-- footer --> */}
      <div class="container-fluid pt-4 bg-secondary bg-opacity-10">
        <footer class="container">
          <div class="row p-4">
            <div class="col-sm-12 col-md-4 d-flex justify-content-center">
              <div class="row">
                <div class="col-sm-12 col-md-3 d-flex justify-content-center">
                  <img
                    src={grb}
                    alt="Grb"
                    style={{ width: "80px", height: "110px" }}
                  />
                </div>
                <div class="col-sm-12 col-md-9 d-flex d-md-block justify-content-center mb-4">
                  Općina Đurmanec
                  <br />
                  Đurmanec 137 <br />
                  49225 Đurmanec
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-md-4 mb-4">
              <span class="font-weight-bold">IBAN:</span> HR92
              2340009-1810800005
              <br />
              <span class="font-weight-bold">Matični broj:</span> 026091118
              <br />
              <span class="font-weight-bold">OIB:</span> 64964131342
            </div>
            <div class="col">
              <span class="font-weight-bold">Centrala općine:</span>{" "}
              <a href="tel:049346326">049/346-326</a> <br />
              <span class="font-weight-bold">E-mail:</span>{" "}
              <a href="mailto:opcina@djurmanec.hr">opcina@djurmanec.hr</a>{" "}
              <br />
              <span class="font-weight-bold">E-mail:</span>{" "}
              <a href="mailto:ivana.smiljanec@djurmanec.hr">
                ivana.smiljanec@djurmanec.hr
              </a>
            </div>
          </div>
          <div class="row p-4">
            <div class="col text-center">
              Izjava o pristupačnosti | Press | Mapa weba | Impressum | Uvjeti
              korištenja | Uredništvo | Webmail
            </div>
          </div>
          <div class="col">
            <div class="row">
              <p class="text-center text-dark">
                Sva prava pridržana © 2021. Općina Đurmanec.
              </p>
            </div>
          </div>
        </footer>
      </div>
      {/* <!-- footer kraj --> */}
    </>
  );
};

export default Dno;

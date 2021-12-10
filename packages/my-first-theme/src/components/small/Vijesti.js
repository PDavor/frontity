import React from "react";

import img1 from "./assets/img/1.jpg";
import img2 from "./assets/img/2.jpg";
import img3 from "./assets/img/3.png";
import img4 from "./assets/img/4.png";
import img5 from "./assets/img/5.jpg";
import img6 from "./assets/img/6.jpg";

const Vijesti = () => {
  return (
    <div class="container py-4">
      <h2 class="mb-4 text-plava font-weight-bold">VIJESTI</h2>
      <div class="row">
        {/* <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img1} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">OBAVIJEST ZA CIJEPLJENJE PROTIV COVIDA-19</p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj -->
        <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img2} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Državni zavod za statistiku od 13. rujna do 17. listopada 2021.
                provest će prvi digitalni Popis stanovništva, kućanstava i
                stanova u Republici Hrvatskoj
              </p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj -->
        <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img3} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                MTB Biciklistička utrka "Neandertalka 2021"
              </p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj --> */}
      </div>
      {/* <!-- VIJESTI DRUGI REDAK --> */}
      <div class="row mt-4">
        {/* <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img4} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Čestitka</p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj -->
        <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img5} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Paljenje svijeća 04. kolovoza 2021.</p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj -->
        <!-- kartica pocetak --> */}
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img-top" src={img6} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Općina Đurmanec sa maksimalnim brojem bodova osvojila priznanje
                za transparentnost proračuna
              </p>
            </div>
          </div>
        </div>
        {/* <!-- kartica kraj --> */}
      </div>
    </div>
    // <!-- općinske vijesti kraj -->
  );
};

export default Vijesti;

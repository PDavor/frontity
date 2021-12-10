import React from "react";
const Nav = ({ actions }) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-plava">
        <div class="container">
          <div class="col">
            <button
              type="button"
              id="sidebarCollapse"
              class="btn bg-plava-tamnija text-bijela"
            >
              <i class="fas fa-align-left"></i>
              <span onClick={actions.theme.toggleSidebar}>Izbornik</span>
            </button>
          </div>
          <div class="row">
            <button
              class="navbar-toggler text-bijela"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-left"></i>
            </button>
          </div>
          <div class="col">
            <div
              class="collapse navbar-collapse text-bijela"
              id="navbarTogglerDemo01"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link text-bijela" href="#">
                    POVEZNICA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-bijela" href="#">
                    POVEZNICA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-bijela" href="#">
                    POVEZNICA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-bijela" href="#">
                    POVEZNICA
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-bijela" href="#">
                    POVEZNICA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

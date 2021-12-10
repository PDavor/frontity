import React from "react";

const Sidebar = () => {
  return (
    <nav
      id="sidebar"
      className="bg-plava"
      style={{
        top: 0,
        left: 0,
        height: "100vh",
        width: "300px",
        background: "red",
        position: "absolute",
        zIndex: 9999,
      }}
    >
      <div id="dismiss">
        <i className="fas fa-arrow-left"></i>
      </div>
      <div className="sidebar-header bg-plava border-bottom">
        <h3>Izbornik</h3>
      </div>
      <ul className="list-unstyled components bg-plava">
        <p>Općina Đurmanec</p>
        <li>
          <a
            href="#homeSubmenu"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="justify-content-between d-flex"
          >
            Početna{" "}
            <i
              className="fas fa-angle-down"
              style={{ marginRight: "0.5rem" }}
            ></i>
          </a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="#">Poveznica 1</a>
            </li>
            <li>
              <a href="#">Poveznica 2</a>
            </li>
            <li>
              <a href="#">Poveznica 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Poveznica 1</a>
          <a
            href="#pageSubmenu"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="justify-content-between d-flex"
          >
            Poveznica 2{" "}
            <i
              className="fas fa-angle-down"
              style={{ marginRight: "0.5rem" }}
            ></i>
          </a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="#">Poveznica 1</a>
            </li>
            <li>
              <a href="#">Poveznica 2</a>
            </li>
            <li>
              <a href="#">Poveznica 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Poveznica 3</a>
        </li>
        <li>
          <a href="#">Poveznica 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;

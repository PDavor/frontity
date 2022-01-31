import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Logo from "./assets/img/samoGrb.png";
const Navigation = ({ state }) => {
  const mainMenu = state.source.get(`/menu/${state.theme.menuUrl}/`).items;
  const leftMenu = state.source.get(`/menu/${state.theme.leftUrl}/`).items;
  return (
    <>
      <Navbar expand={false} sticky="top" className="navigacija">
        <Container>
          <Navbar.Brand>
            <Link link="/">
              <Image src={Logo} height={70} />
              Općina Đurmanec
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar
            id="responsive-navbar-nav"
            className={`d-none d-lg-block m-auto`}
          >
            <Nav>
              {mainMenu.map((item) =>
                !item.child_items ? (
                  <Link link={item.url} className={`nav-link`} key={item.url}>
                    {item.title}
                  </Link>
                ) : (
                  <NavDropdown title={item.title} id={item.id} key={item.url}>
                    {item.child_items.map((child) => (
                      <Link
                        link={child.url}
                        className={`dropdown-item`}
                        key={child.url}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </NavDropdown>
                )
              )}
            </Nav>
          </Navbar>

          <Navbar.Offcanvas
            id="sidebar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Image src={Logo} height={70} />
                Općina Đurmanec
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {mainMenu.map((item) =>
                  !item.child_items ? (
                    <Link
                      link={item.url}
                      className={`nav-link link`}
                      key={item.url}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <NavDropdown
                      title={item.title}
                      id={item.id}
                      key={item.url}
                      className={`link`}
                    >
                      {item.child_items.map((child) => (
                        <Link
                          link={child.url}
                          className={`dropdown-item link`}
                          key={child.url}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </NavDropdown>
                  )
                )}
                <div style={{ height: "40px" }} />
                {leftMenu.map((item) =>
                  !item.child_items ? (
                    <Link
                      link={item.url}
                      className={`nav-link link2`}
                      key={item.url}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <NavDropdown
                      title={item.title}
                      id={item.id}
                      key={item.url}
                      className={`link2`}
                    >
                      {item.child_items.map((child) => (
                        <Link
                          link={child.url}
                          className={`dropdown-item link2`}
                          key={child.url}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </NavDropdown>
                  )
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(Navigation);

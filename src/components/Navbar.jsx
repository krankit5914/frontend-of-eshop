import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BsCart4 } from "react-icons/bs";
import { FaUserTie, FaHome } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";

import {
  MdOutlineProductionQuantityLimits,
  MdOutlineNewLabel,
} from "react-icons/md";

const Navbars = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <h2> RAVI BARTAN BHANDAR</h2>
          </Navbar.Brand>
          <Navbar.Brand href="/login">
            <h3>
              {" "}
              Account <FaUserTie />
            </h3>
          </Navbar.Brand>
          <Navbar.Brand>
            <h3>
              {" "}
              cart <BsCart4 />
            </h3>
          </Navbar.Brand>
          <Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Nav justify variant="tabs">
        <Nav.Item>
          <Nav.Link href="/">
            <h5>
              Home <FaHome />
            </h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/productlist">
            <h5>
              Product <MdOutlineProductionQuantityLimits />
            </h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/arivals">
            <h5>
              latest Arivals <MdOutlineNewLabel />
            </h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">
            <h5>
              About <BiUserPin />
            </h5>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Navbars;

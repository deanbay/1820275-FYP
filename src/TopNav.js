import React, { useContext } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlertContext from "./context/AlertContext";
import UserContext from "./context/UserContext";

export default function TopNav() {
  const { user, userSignedIn, signOut } = useContext(UserContext);
  const createAlert = useContext(AlertContext);

  return (
    <Navbar bg="primary" variant="dark" expand="md" className="shadow-sm">
      {/* <Navbar.Brand>Group13</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/map" className="nav-link">
            Map
          </Link>
        </Nav>
        <Nav>
          {user.role === "organiser" && (
            <><Link to="/location/add" className="nav-link">
              New Location
            </Link>
              <Link to="/addevent" className="nav-link">
                Add Event
              </Link></>
          )}
          {userSignedIn ? (
            <>
              <Link to="/newsletter" className="nav-link">
                News Letter
              </Link>

              <Link to="/profile" className="nav-link">
                Profile
              </Link>
              <NavLink
                onClick={() => {
                  createAlert("You signed out successfully!", "success");
                  signOut();
                }}
              >
                Sign Out
              </NavLink>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Sign In
              </Link>
              <Link to="/sign-up" className="nav-link">
                Sign Up
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

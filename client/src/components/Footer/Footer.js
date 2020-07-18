
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="https://i.postimg.cc/L4GDsCQY/t-l-chargement.png">Manage IT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://i.postimg.cc/L4GDsCQY/t-l-chargement.png">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://i.postimg.cc/L4GDsCQY/t-l-chargement.png">Blog</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <a
              href="https://i.postimg.cc/L4GDsCQY/t-l-chargement.png"
              target="_blank"
            >
              Manage IT Team
            </a>{" "}
            for a better web.
          </div>
        </Container>
      </footer>
    );
  }
}

export default Footer;

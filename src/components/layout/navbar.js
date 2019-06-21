import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";

const NavLinkUL = styled.ul`
  ::after {
    clear: both;
    content: "";
    display: block;
  }
`;

const NavLinkLI = styled.li`
  float: left;
  padding: 10px 20px;
  border-right: 1px solid #ccc;
  text-align: center;
  color: #000;
`;

const NavLinkA = styled.a`
  color: #000;
  font-weight: bold;
  transition: all 0.1s ease-out 0s;

  :hover {
    text-decoration: none;
    color: #57c5a0;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentActive: "LOL"
    };
  }

  render() {
    const newNavsLinks = NavLinks.map((item, index) => {
      if (item.link === this.state.currentActive) {
        return (
          <NavLinkStyle key={index} item={item} style={{ color: "#57c5a0" }} />
        );
      }
      return <NavLinkStyle key={index} item={item} />;
    });

    return (
      <section id="navigator">
        <div class="container">
          <nav>
            <div class="row d-flex justify-content-between">
              {/*Main Nav */}
              <div class="main-nav col-lg-8">
                <ul>{newNavsLinks}</ul>
              </div>
              {/*Shopping Nav */}
              <div class="shopping-nav col-lg-3">
                <ul class="d-flex justify-content-end">
                  <NavLinkLI>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                    <span class="badge badge-success">30</span>
                  </NavLinkLI>
                  <NavLinkLI>
                    <FontAwesomeIcon icon={faStar} />
                    <span class="badge badge-success">30</span>
                  </NavLinkLI>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    );
  }
}

class NavLinkStyle extends Component {
  render() {
    return (
      <NavLinkLI class="nav-link">
        <NavLinkA href={this.props.item.hyperRef}>
          {this.props.item.link}
        </NavLinkA>
      </NavLinkLI>
    );
  }
}

const NavLinks = [
  {
    hyperRef: "#",
    link: "Home"
  },
  {
    hyperRef: "#",
    link: "Product"
  },
  {
    hyperRef: "#",
    link: "About"
  },
  {
    hyperRef: "#",
    link: "Pages"
  },
  {
    hyperRef: "#",
    link: "Blog"
  },
  {
    hyperRef: "#",
    link: "Contact"
  }
];

export default Navbar;

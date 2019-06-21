import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartArrowDown,
  faStar,
  faEye,
  faShare
} from "@fortawesome/free-solid-svg-icons";

const PriceBox = styled.p`
  padding: 20px 5px;
  background-color: #57c5a0;
  color: #fff;
  display: inline-block;
`;

const Section = styled.section`
  background-image: url("/img/banner-img.png");
  background-attachment: fixed;
  background-size: cover;
  background-position: top;
  height: 100vh;
  margin-top: -15px;
`;

const UtilItemStyle = styled.li`
  width: 40px;
  height: 40px;
  background-color: #fff;
  text-align: center;
  float: left;
  margin-right: 10px;
`;

const UtilLinkStyle = styled.a`
  display: inline-block;
  line-height: 40px;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;
  > * {
    :hover {
      color: #57c5a0;
    }
  }
`;

class UtilItem extends Component {
  render() {
    return (
      <UtilItemStyle>
        <UtilLinkStyle>
          <FontAwesomeIcon icon={this.props.icon} />
        </UtilLinkStyle>
      </UtilItemStyle>
    );
  }
}

const Banner = () => {
  UtilItemIcon = UtilItemIcon.map((item, index) => {
    return <UtilItem key={index} icon={item.icon} />;
  });

  return (
    <Section id="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" />
          <div class="col-lg-4 pt-4 text-left">
            <PriceBox>$145.99</PriceBox>
            <h1>Pink Shoes 2013 Collection</h1>
            <p>
              Nunc non fermentum nunc. Sed ut ante eget leo tempor consequat sit
              amet eu orci. Donec dignissim dolor eget..
            </p>
            <ul>{UtilItemIcon}</ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

let UtilItemIcon = [
  {
    icon: faEye
  },
  {
    icon: faStar
  },
  {
    icon: faShare
  },
  {
    icon: faCartArrowDown
  }
];

export default Banner;

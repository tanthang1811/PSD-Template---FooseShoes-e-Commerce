import React, { Component } from "react";
import styled from "styled-components";

var promoItemList = [
  {
    caption: "On sale",
    imgURL: "/img/special-img-1.png"
  },
  {
    caption: "Special offers",
    imgURL: "/img/special-img-2.png"
  },
  {
    caption: "Must have",
    imgURL: "/img/special-img-3.png"
  }
];

const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #242424;
`;

const PromoItemStyled = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  div p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    background-color: #322a24;
    font-size: 20px;
    text-transform: uppercase;
    color: #fff;
  }
`;

class PromoItem extends Component {
  render() {
    return (
      <div class="col-lg-4">
        <PromoItemStyled>
          <img
            class="img-fluid"
            src={this.props.item.imgURL}
            alt={this.props.item.caption}
          />
          <div>
            <p>{this.props.item.caption}</p>
          </div>
        </PromoItemStyled>
      </div>
    );
  }
}

class Promos extends Component {
  render() {
    promoItemList = promoItemList.map(item => {
      return <PromoItem item={item} />;
    });
    return (
      <Section id="promos">
        <div class="container">
          <div class="row">{promoItemList}</div>
        </div>
      </Section>
    );
  }
}

export default Promos;

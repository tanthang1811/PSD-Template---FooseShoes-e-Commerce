import React, { Component } from "react";
import styled from "styled-components";

var productNavItems = [
  {
    name: "Pink Shoes",
    caption: "Now at $145,99"
  },
  {
    name: "Pink Shoes",
    caption: "Now at $145,99"
  },
  {
    name: "Pink Shoes",
    caption: "Now at $145,99"
  },
  {
    name: "Pink Shoes",
    caption: "Now at $145,99"
  },
  {
    name: "Pink Shoes",
    caption: "Now at $145,99"
  }
];

const ProductNavStyled = styled.li`
  padding: 20px;
  float: left;
  width: 20%;
  color: #ccc;
  position: relative;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    content: "";
    height: 10px;
    background-color: #000;
    border-left: 0.1em solid #ccc;
    border-right: 0.1em solid #ccc;
  }
  :after {
    position: absolute;
    top: 2px;
    left: 2%;
    width: 96%;
    content: "";
    height: 5px;
    background-color: transparent;
    transition: all 0.3s ease-out 0s;
  }
  :hover::after {
    background-color: #57c5a0;
  }
  :hover {
    color: #fff;
  }
`;

const Section = styled.section`
  background-color: #2e2e2e;
  padding-top: 10px;
  padding-bottom: 10px;
`;

class ProductNavItem extends Component {
  render() {
    return (
      <ProductNavStyled>
        <h5>{this.props.item.name}</h5>
        <p>{this.props.item.caption}</p>
      </ProductNavStyled>
    );
  }
}

class ProductNav extends Component {
  render() {
    productNavItems = productNavItems.map(item => {
      return <ProductNavItem item={item} />;
    });
    return (
      <Section id="product-nav">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <ul class="">{productNavItems}</ul>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ProductNav;

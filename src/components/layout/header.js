import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Section = styled.section`
  background-color: #242424;
  color: #fff;
`;

const SearchBar = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.div`
  width: 90%;
`;

const LoginButton = styled.button`
  padding: 15px;
  border: none;
  border-left: 1px solid #cccccc;
  border-right: 1px solid #cccccc;
  background-color: transparent;
  color: #fff;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarOpen: false
    };
  }

  handleClickSearchBar = e => {
    this.setState({
      searchBarOpen: !this.state.searchBarOpen
    });
  };

  render() {
    const searchBar = this.state.searchBarOpen ? (
      <input
        id="top-search-bar"
        class="form-control"
        placeholder="Search here..."
        style={{
          border: "1px solid #FFF",
          padding: "15px",
          transition: "all 0.3s ease-out 0s",
          width: "100%"
        }}
      />
    ) : (
      <input
        id="top-search-bar"
        class="form-control"
        placeholder="Search here..."
        style={{
          border: "none",
          padding: 0,
          transition: "all 0.3s ease-out 0s",
          width: "0%"
        }}
      />
    );

    const searchButton = this.state.searchBarOpen ? (
      <button
        class="btn btn-dark"
        onClick={this.handleClickSearchBar}
        style={{
          transition: "all 0.3s ease-out 0s",
          outline: "none",
          marginLeft: "auto"
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    ) : (
      <button
        class="btn btn-dark"
        onClick={this.handleClickSearchBar}
        style={{
          transition: "all 0.3s ease-out 0s",
          outline: "none",
          marginLeft: "-200px"
        }}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    );

    return (
      <Section id="header">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            {/*Logo */}
            <div class="logo col-lg-3">
              <img src="/img/logo.png" alt="Company's Logo" class="img-fluid" />
            </div>

            <div class="col-lg-6">
              <div class="row align-items-center justify-content-between">
                {/*Search bar */}
                <div class="search-bar-top col-lg-6">
                  <SearchBar>
                    <Input>{searchBar}</Input>
                    {searchButton}
                  </SearchBar>
                </div>

                {/*Login or Reg */}
                <div class="login col-lg-6">
                  <LoginButton>Login or Register</LoginButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Header;

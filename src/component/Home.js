import React, { Component } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/ProductItem";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productName="IPhone X" unitPrice="40500" />
        <ProductItem productName="IPAD Pro 10.5" unitPrice="30500" />
        <ProductItem productName="IPAD Mini 4" unitPrice="19500" />
        <Footer company="Olanlab" email="olan@olanlab.com" />
      </div>
    );
  }
}

export default App;

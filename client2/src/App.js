import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import ProductItem from './components/product/ProductItem';


function App() {
  return (
    <div className="App">
      <Header />
      <ProductItem productName='IPhone X' unitPrice='40500' />
      <ProductItem productName='iPad Pro 10.5' unitPrice='30500' />
      <ProductItem productName='iPad Mini 4 ' unitPrice='19500' />
      <Footer company="Olanlab" email="olan@olanlab.com" />
    </div>
  );
}

export default App;

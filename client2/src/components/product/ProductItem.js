import React, { Component } from "react";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    // console.log("constructor|" + props.productName);
  }
  render() {
    const { productName, unitPrice, thumbnail } = this.props;
    return (
      <div className="col-md-3 col-sm-6">
        <img className="img-fluid img-thumbnail" src={thumbnail} />
        <h5 className="mt-2">{productName}</h5>
        <p className="text-right title">{unitPrice} THB</p>
        <button className="btn- btn-block btn-secondary title">ซื้อ</button>
        <hr/>
      </div>
    );
  }
}

export default ProductItem;

// import React from "react";

// const ProductItem = (props) => {
//   const { productName, unitPrice } = props;
//   return (
//     <div>
//       <p>{productName}</p>
//       <p>{unitPrice}</p>
//     </div>
//   );
// };

// export default ProductItem;

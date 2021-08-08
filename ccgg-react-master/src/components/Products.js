import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/products.action';
import {Link} from 'react-router-dom';

class Products extends Component {

  componentDidMount() {
    // load data
    if (!this.props.products) {
      // if products are not loaded, load products...
      this.props.getProducts();
    }
  }

  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Image</th>
        </tr>
        </thead>
        <tbody>
        {
          this.props.products && this.props.products.map((product, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link to={`/edit-product/${product.id}`}>{product.name}</Link>
                </td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <img src={product.image} style={{width: "100px", height: "100px"}}/>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    );
  }

}

function mapStateToProps({products}) {
  return {
    products
  }
}

export default connect(mapStateToProps, {getProducts})(Products);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProductActionCreator} from '../actions/products.action';
import {bindActionCreators} from 'redux';

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newProduct: {
        name: 'test',
        brand: '',
        price: 0,
        stock: 0,
        image: ''
      },
      message: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.props.insertProduct(this.state.newProduct);
    // not work!!! action is created but not dispatched.
    // addProductActionCreator(this.state.newProduct);

    this.props.addProductActionCreatorWithDispatch(this.state.newProduct, (res) => {
      if (res.data && res.data.success) {
        this.setState({
          message: 'Product is saved.'
        });
      } else {
        this.setState({
          message: 'Product is not saved.'
        });
      }
    });
  }

  handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const obj = {};
    obj[field] = value;
    this.setState({
      newProduct: Object.assign(this.state.newProduct, obj),
      message: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Add Product</h2>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              Name: <input className="form-control" type="text" value={this.state.newProduct.name}
                           onChange={this.handleInputChange} name="name"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Brand: <input className="form-control" type="text" onChange={this.handleInputChange}
                            name="brand"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Price: <input className="form-control" type="number" onChange={this.handleInputChange}
                            name="price"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Stock: <input className="form-control" type="number" onChange={this.handleInputChange}
                            name="stock"/>
            </label>
          </div>
          <div className="form-group">
            <label>
              Image: <input className="form-control" type="text" onChange={this.handleInputChange}
                            name="image"/>
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <p>{this.state.message}</p>
        </form>
        <p>{JSON.stringify(this.state.newProduct)}</p>
        <p>{JSON.stringify(this.props.products)}</p>
      </div>
    );
  }

}

function mapStateToProps(appState) {
  // this.propsmapStateToProps.products = appState.products;
  // this.props = Object.assign(this.props, {
  //       products: appState.products
  //     });
  return {
    products: appState.products
  };
}

function mapDispatchToProps(dispatch) {
  // dispatch is the function to dispatch the action.
  // addProductActionCreator -> addProductActionCreatorWithDispatch
  // key: new action creator name (create action and dispatch)
  // value: old action creator(create action)
  // new action creator will be created on component props.
  return bindActionCreators({
    addProductActionCreatorWithDispatch: addProductActionCreator
  }, dispatch);
}

// AddProduct -> Redux connected AddProduct
export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {editProduct, getProducts} from '../actions/products.action';
import {Field, reduxForm} from 'redux-form';

class EditProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // editProduct: null,
      message: ''
    }
    // console.log(props);
    this.h2ElemRef = React.createRef();
  }

  componentDidMount() {
    if (!this.props.products) {
      // if products are not loaded, load products...
      this.props.getProducts();
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //     if (props.products && props.products.length) {
  //         const editProduct = props.products.find(p => {
  //            return p.id === +props.match.params.id;
  //         });
  //         return {
  //             editProduct: editProduct
  //         };
  //     } else{
  //         return state;
  //     }
  // }

  renderField(field) {
    // console.log(field);
    return (
      <div className="form-group">
        <label>
          {field.label}
          <input
            type={field.type}
            className="form-control"
            name={field.input.name}
            disabled={field.input.name === 'id'}
            {...field.input}
          />
        </label>
        <p className="text-danger">{field.meta.error}</p>
      </div>
    );
  }

  submitHandler = (editProductFormData) => {
    // prevent default submit action
    // get current form data from redux store
    // send ajax request to update product.
    this.props.editProduct(editProductFormData, (res) => {
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

    // console.log('product in edit product form: ', editProductFormData);
    // console.log(this.h2ElemRef);
    // this.h2ElemRef.current.style.color = 'red';
  }

  render() {
    return (
      <div className="container">
        <h2 ref={this.h2ElemRef}>Edit Product</h2>
        <p>URL id: {this.props.match.params.id}</p>
        {/*<p>Product to edit: {JSON.stringify(this.state.editProduct)}</p>*/}
        <form onSubmit={this.props.handleSubmit(this.submitHandler)}>
          <Field
            name="id"
            label="ID"
            type="number"
            component={this.renderField}
          />
          <Field
            name="name"
            label="Name"
            type="text"
            component={this.renderField}
          />
          <Field
            name="brand"
            label="Brand"
            type="text"
            component={this.renderField}
          />
          <Field
            name="price"
            label="Price"
            type="number"
            component={this.renderField}
          />
          <Field
            name="stock"
            label="Stock"
            type="number"
            component={this.renderField}
          />
          <Field
            name="image"
            label="Image"
            type="text"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Submit</button>
          <p>{this.state.message}</p>
        </form>
      </div>
    );
  }

}

// 1st parameter: application state
// 2st parameter: current component props
function mapStateToProps({products}, componentProps) {
  const product = products ? products.find(p => {
    return p.id === +componentProps.match.params.id;
  }) : null;
  return {
    products,
    initialValues: product
  };
  // initialValues which will be on component props will be used as default values for redux-form
}

function validate(data) {
  let errors = {};

  if (data.name === '') {
    errors.name = 'Name can\'t be empty';
  }

  if (data.brand === '') {
    errors.brand = 'Brand can\'t be empty';
  }

  if (data.price && data.price <= 0) {
    errors.price = 'Price must be larger than 0.';
  }

  return errors;
}

// EditProduct -> Redux-connected EditProduct -> Redux-connected (Redux-form-connected EditProduct)
export default connect(mapStateToProps, {getProducts, editProduct})(
  reduxForm({
    form: 'EditProductForm',
    validate: validate
  })(EditProduct)
);
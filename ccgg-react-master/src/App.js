import React, {Component} from 'react';
import Name from './components/Name';
import Names from './components/Names';
import AddName from './containers/AddName';
import Products from './components/Products';
import AddProduct from './containers/AddProduct';
import Header from "./components/Header";

class App extends Component {

  // names = ['bob', 'alex', 'alice'];

  constructor(props) {
    super(props);
    this.state = {
      names: ['bob', 'alex', 'alice'],
      products: [
        {
          name: 'iPhone',
          brand: 'Apple',
          price: 100,
          stock: 22,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone.jpg'
        },
        {
          name: 'iPhone3G',
          brand: 'Apple',
          price: 200,
          stock: 33,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3G.jpg'
        },
        {
          name: 'iPhone3GS',
          brand: 'Apple',
          price: 300,
          stock: 11,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone3GS.jpg'
        },
        {
          name: 'iPhone4',
          brand: 'Apple',
          price: 400,
          stock: 22,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4.jpg'
        },
        {
          name: 'iPhone4S',
          brand: 'Apple',
          price: 501,
          stock: 33,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone4S.jpg'
        },
        {
          name: 'iPhone5',
          brand: 'Apple',
          price: 600,
          stock: 11,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5.jpeg'
        },
        {
          name: 'iPhone5C',
          brand: 'Apple',
          price: 700,
          stock: 222,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5c.png'
        },
        {
          name: 'iPhone5S',
          brand: 'Apple',
          price: 800,
          stock: 333,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone5s.jpg'
        },
        {
          name: 'iPhone6',
          brand: 'Apple',
          price: 900,
          stock: 111,
          image: 'https://s3.amazonaws.com/msi-tech-2018/iphone6.jpg'
        },
      ]
    }
  }

  insertName = (newName) => {
    // this.names.push(newName);
    this.setState({
      names: [...this.state.names, newName]
    });
  }

  insertProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, newProduct]
    });
  }

  // required!!!
  // return part of a virtual DOM tree
  // whenever props change, render function will execute.
  render() {
    return (
      <React.Fragment>
        {/*<p>This is App component!</p>*/}
        {/*<p>This is App component!</p>*/}
        {/*<Name />*/}
        {/*<Names names={this.state.names}/>*/}
        {/*<AddName insertName={this.insertName} />*/}
        <Header />
        {/*<Products products={this.state.products} />*/}
        {/*<AddProduct insertProduct={this.insertProduct} />*/}
        {this.props.children}
      </React.Fragment>
    );
  }

}
export default App;

import React, {Component} from 'react';

class AddName extends Component {

  // changes on class member variables will not trigger render()
  // newName = '';

  constructor(props) {
    super(props);
    // state: an object which stores data for current component.
    // state is mutable!!!
    // changes to state will trigger render()
    this.state = {
      newName: ''
    };
  }

  inputChangeHandler = (event) => {
    console.log(event.target.value);
    this.newName = event.target.value;
    // this.forceUpdate();
    // forceUpdate: trigger render(), diff, apply to real dom tree.
    // setState is asynchronous. executes after all synchronized codes.
    this.setState({
      newName: event.target.value
    });
  }

  addHandler = () => {
    // pass this.state.newName to parent App component
    this.props.insertName(this.state.newName);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChangeHandler}/>
        <button className="btn btn-primary" onClick={this.addHandler}>Add</button>
        <p>New Name: {this.state.newName}</p>
      </div>
    );
  }

}
export default AddName;
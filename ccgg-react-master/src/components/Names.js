import React, {Component} from 'react';
import Name from './Name';

class Names extends Component {

  constructor(props) {
    super(props); // this.props = props;
  }

  render() {
    // array of 3 strings -> array of 3 react elements
    return (
      <ul>
        {
          this.props.names.map(n => {
            return (
              <li key={n}>
                <Name name={n}/>
              </li>
            );
          })
        }
      </ul>
    );
  }

}
export default Names;
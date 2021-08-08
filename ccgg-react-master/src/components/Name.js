import React from 'react';

// functional component
// props is an object which contains all the data passed down from parent
// props is immutable.(ready-only)
function Name(props) {
  const name = props.name;
  return (
    <span>{name}</span>
  );
}
export default Name;
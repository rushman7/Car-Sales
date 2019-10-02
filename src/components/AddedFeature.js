import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      <button onClick={props.removeItem} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;

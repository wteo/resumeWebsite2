import React from 'react';

import './Tags.scss';

function Process({ list, arr }) {

  return (
    <ul className="tags">{ list }:
      {arr.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default Process;
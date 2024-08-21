import React from 'react';

import './Tag.scss';

function Tag({ list, arr }) {

  return (
    <ul className="tags">{ list }:
      {arr.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  );
}

export default Tag;
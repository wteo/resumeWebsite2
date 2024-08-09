import React from 'react';

const RepeatedLines = () => {
  const linesCount = 200; 

  const lines = Array.from({ length: linesCount }, (_, index) => (
    <p key={index}>Random line { index }</p>
  ));

  return (
    <div>
      {lines}
    </div>
  );
};

export default RepeatedLines;

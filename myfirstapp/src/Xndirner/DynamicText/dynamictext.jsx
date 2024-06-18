import React from 'react';

const DynamicText = ({ text, numericValue }) => {
  const fontSize = `${numericValue}px`;

  return (
    <div>
      <h2 style={{ fontSize }}>
        {text}
      </h2>
      <hr />
    </div>
  );
};

export default DynamicText;

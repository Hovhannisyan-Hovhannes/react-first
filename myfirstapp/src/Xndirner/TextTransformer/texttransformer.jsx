import React from 'react';

const TextTransformer = ({ text, toUpperCase }) => {
  const transformedText = toUpperCase ? text.toUpperCase() : text.toLowerCase();

  return (
    <div>
      <h2>{transformedText}</h2>
      <hr />
    </div>
  );
};

export default TextTransformer;

import React from 'react';

const TextLengthChecker = ({ text }) => {
  const textColor = text.length > 10 ? 'red' : 'green';
 

  return (
    <div>
      <h2 style={{ color: textColor }}>
        {text}
      </h2>
      <hr />
    </div>
  );
};

export default TextLengthChecker;


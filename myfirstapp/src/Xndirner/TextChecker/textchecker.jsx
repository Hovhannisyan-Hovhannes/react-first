import React from 'react';

const TextChecker = ({ text }) => {
  const displayText = text ? text : 'empty name';

  return (
    <div>
      {text ? <h2>{text}</h2> : <h2>{displayText}</h2>}
      <hr />
    </div>
  );
};

export default TextChecker;

import React from 'react';

const EvenOddChecker = ({ number }) => {
  const isEven = number % 2 === 0;

  return (
    <div>
      <h2>{number}-ը  {isEven ? 'զույգ' : 'կենտ'} թիվ է.</h2>
      <hr />
    </div>
  );
};

export default EvenOddChecker;

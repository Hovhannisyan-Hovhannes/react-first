import React from 'react';

const ArithmeticMean = ({ number1, number2, number3 }) => {
  const mean = (number1 + number2 + number3) / 3;

  return (
    <div>
      <h2>{number1}-ի, {number2}-ի և {number3}-ի միջին թվաբանականը {mean}-ն է.</h2>
      <hr />
    </div>
  );
};

export default ArithmeticMean;
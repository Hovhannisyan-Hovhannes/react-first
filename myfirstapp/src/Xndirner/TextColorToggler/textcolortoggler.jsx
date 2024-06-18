import React from 'react';

const TextColorToggler = ({ isTrue }) => {
  const textColor = isTrue ? 'green' : 'red';

  return (
    <div>
      <h2 style={{ color: textColor }}>
      Բուլյան արժեքը {isTrue ? 'True' : 'False'} է.
      </h2>
      <hr />
    </div>
  );
};

export default TextColorToggler;

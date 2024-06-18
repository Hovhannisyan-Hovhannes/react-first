import React from 'react';

const Congratulations = ({ name, surname, age }) => {
  return (
    <div>
      <p>Բարև {name} {surname}, շնորհավորում եմ {age} տարեկան դառնալու կապակցությամբ։</p>
    </div>
  );
};

export default Congratulations;
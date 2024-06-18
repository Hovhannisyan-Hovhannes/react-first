import React from 'react';

const Congratulations = ({ name, surname, age }) => {
  return (
    <div>
      <h2>Բարև {name} {surname}, շնորհավորում եմ {age} տարեկան դառնալու կապակցությամբ։</h2>
      <hr />
    </div>
    
  );
};

export default Congratulations;
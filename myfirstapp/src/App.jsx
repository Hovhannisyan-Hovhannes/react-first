import React from 'react';
import Congratulations from './Xndirner/Congratulation/congratulation';
import SumNumbers from './Xndirner/SumNumbers/sumnumbers';

function App() {
  return (
    <div className="App">
      <Congratulations name="Պողոս" surname="Պողոսյան" age={29} />
      <SumNumbers numbers1={20} numbers2={10}/>
    </div>
    
  );
}

export default App;

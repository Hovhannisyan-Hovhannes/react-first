import React from 'react';
import Congratulations from './Xndirner/Congratulation/congratulation';
import SumNumbers from './Xndirner/SumNumbers/sumnumbers';
import ArithmeticMean from './Xndirner/ArithmeticMean/aritmeticmean';
import TextColorToggler from './Xndirner/TextColorToggler/textcolortoggler';
import EvenOddChecker from './Xndirner/EvenOddChecker/EvenOddChecker';
import TextLengthChecker from'./Xndirner/TextLengthChecker/textlengthchecker';
import TextChecker from './Xndirner/TextChecker/textchecker';
import TextTransformer from './Xndirner/TextTransformer/texttransformer';
import DynamicText from './Xndirner/DynamicText/dynamictext';

function App() {
  const textExpression = "Բարև, Աշխարհ!";
  const toUpperCase=true;
  const numericValue=15; 
  return (
    <div className="App">
      <Congratulations name="Պողոս" surname="Պողոսյան" age={29} />
      <SumNumbers numbers1={20} numbers2={10}/>
      <ArithmeticMean number1={20} number2={30} number3={40}/>
      <TextColorToggler isTrue={12}/>
      <EvenOddChecker number={20} />
      <TextLengthChecker text={textExpression} />
      <TextChecker text={textExpression}/>
      <TextTransformer text={textExpression} toUpperCase={toUpperCase}/>
      <DynamicText text={textExpression} numericValue={30} />
    </div>
    
  );
}

export default App;

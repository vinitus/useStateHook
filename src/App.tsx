import React, { useState } from 'react';

function App() {
  function one1(): number {
    console.log('One1 function is called');
    return 1;
  }

  function one2(): number {
    console.log('One2 function is called');
    return 1;
  }

  const [test, setTest] = useState(1);
  const [test1, setTest1] = useState(one1);
  const [test2, setTest2] = useState(one2());
  const [test3, setTest3] = useState((): number => {
    console.log('One3 function is called');
    return 1;
  });
  const [reset, setReset] = useState(1);

  return (
    <div className="m-[50px]">
      <button
        type="button"
        className="border px-[10px] py-[5px]"
        onClick={(): void => {
          setReset((prev) => prev + 1);
          setTest((prev) => prev + 1);
          setTest1((prev) => prev + 1);
          setTest2((prev) => prev + 1);
          setTest3((prev) => prev + 1);
        }}
      >
        reset
      </button>
      <div>
        <div>test : {test}</div>
        <div>test1 : {test1}</div>
        <div>test2 : {test2}</div>
        <div>test3 : {test3}</div>
      </div>
    </div>
  );
}

export default App;

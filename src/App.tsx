import React from 'react';
import { SimpleRef, SimpleCallbackRef, SimpleCallbackRefRerender, CallbackRef, SimpleForwardRef, ImperativeHandle } from './cases';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleRef />
      <SimpleCallbackRef />
      <SimpleCallbackRefRerender />
      <CallbackRef />
      <SimpleForwardRef />
      <ImperativeHandle />
    </div>
  );
}

export default App;

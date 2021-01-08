import React from 'react';
import {
  SimpleRef,
  SimpleCallbackRef,
  SimpleCallbackRefRerender,
  CallbackRef,
  SimpleForwardRef,
  ImperativeHandle,
  SimpleValueRef
} from './cases';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleValueRef />
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

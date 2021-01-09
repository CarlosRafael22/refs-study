import React from 'react';
import {
  SimpleRef,
  SimpleCallbackRef,
  SimpleCallbackRefRerender,
  CallbackRefDynamicChild,
  SimpleForwardRef,
  ImperativeHandle,
  SimpleValueRef
} from './cases';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>useRef with instance variable</h3>
      <SimpleValueRef />
      <h3>useRef with DOM element</h3>
      <SimpleRef />
      <h3>Callback ref example</h3>
      <SimpleCallbackRef />
      <h3>Callback ref example with re-render</h3>
      <SimpleCallbackRefRerender />
      <h3>Callback ref example with child added dynamically</h3>
      <CallbackRefDynamicChild />
      <h3>Ref forwarding example</h3>
      <SimpleForwardRef />
      <h3>useImperativeHandle example</h3>
      <ImperativeHandle />
    </div>
  );
}

export default App;

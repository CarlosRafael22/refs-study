import React from 'react';
import { SimpleRef, SimpleCallbackRef, SimpleCallbackRefRerender, CallbackRef, SimpleForwardRef } from './cases';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleRef />
      <SimpleCallbackRef />
      <SimpleCallbackRefRerender />
      <CallbackRef />
      <SimpleForwardRef />
    </div>
  );
}

export default App;

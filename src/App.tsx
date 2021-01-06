import React from 'react';
import { SimpleRef, SimpleCallbackRef, SimpleCallbackRefRerender, CallbackRef } from './cases';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleRef />
      <SimpleCallbackRef />
      <SimpleCallbackRefRerender />
      <CallbackRef />
    </div>
  );
}

export default App;

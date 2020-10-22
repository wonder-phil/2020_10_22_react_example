import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import InputName from './components/InputName';
import InputAddress from './components/InputAddress';
import InputNumber from './components/InputNumber';

import InputNameAddressNumber from './components/InputNameAddressNumber';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          <h1> Happy Hacking! </h1>
        </p>
          <Hello my_name="Phil" />
          <Hello my_name="Shariq" />
          <Hello my_name="Narendran" />
          <Hello my_name="Jonathan" />
          <InputNameAddressNumber />
      </header>
    </div>
  );
}

export default App;

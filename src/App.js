import React, { Component } from 'react';
import './App.css';
import Nombre from './nombre.js';
import Cita from './cita.js';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Nombre />
        <Cita />
      </div>
    );
  }
}

export default App;

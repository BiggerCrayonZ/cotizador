import React, { Component } from 'react';
import './App.css';

/* Components */
import ViewComponent from './components/View/ViewComponent/ViewComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ViewComponent />
      </div>
    );
  }
}

export default App;

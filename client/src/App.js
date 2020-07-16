import React from 'react';
import Sidebar from './components/sidebar.jsx'
import './App.css';

class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
         <Sidebar />
      </div>
      );
  }
}

export default App;

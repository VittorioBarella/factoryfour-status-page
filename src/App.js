import React from 'react';
import ApiStatusCard from './components/ApiStatusCard/ApiStatusCard';
import StatusPage from './components/StatusPage/StatusPage.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <StatusPage/>
      <ApiStatusCard/>
    </div>
  );
}

export default App;

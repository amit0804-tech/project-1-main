import React from 'react';
import './styles/App.scss';
import './styles/colors.scss';
import './styles/Header.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { MainMenu } from './componets/MainMenu';
import { Routes } from './componets/Routes';
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Router>
        <MainMenu />
        <Routes />
      </Router>

    </div>

  )
}

export { App };
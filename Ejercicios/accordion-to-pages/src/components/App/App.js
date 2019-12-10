import React from "react";
import { Header } from "../Header/Header";
import { Accordion } from "../Accordion/Accordion";
import { Footer } from '../Footer/Footer';
import { Routes } from '../Routes/Routes'
import {BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import 'bulma/css/bulma.css'

const App = props => {
  return (
    <Router>
    <React.Fragment>
      <Header>THE REACT COMMENTS</Header>
      {/* <Accordion /> */}
      <Routes />
      <Footer />
    </React.Fragment>
    </Router>
  );
};

export { App };

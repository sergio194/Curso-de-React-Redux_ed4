import React from 'react';
import './App.css'
import {Header} from '../Header/Header'
import {Accordion} from '../Accordion/Accordion'
export const App = () => {
    return(
        <React.Fragment>
            <Header>
                How can i help you?
            </Header>
            <Accordion />
        </React.Fragment>
    );
}
 

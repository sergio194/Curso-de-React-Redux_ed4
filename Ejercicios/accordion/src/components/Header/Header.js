import React from 'react';
import PropTypes from 'prop-types';
import './Header.css'
const Header = ({ children = "Soy un titulo" }) => {
    return(
        <header className="mainHeader">
            <h1 className="mainHeader-title">{children}</h1>
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export {Header};
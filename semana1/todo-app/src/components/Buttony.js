import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button className="tdl-add_list_button" onClick={this.props.customOnClick}>Click me!</button>
        )
    }
}


// Opcion 2 generar y exportar
// const Button = () => {
//     return (
//         <button onClick={this.props.customOnClick}>Click me!</button>
//     )
// }

// export { Button }
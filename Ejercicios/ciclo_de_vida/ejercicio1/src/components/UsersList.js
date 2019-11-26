import React from 'react';

export default class UsersList extends React.Component {
    state = {
        users: ['Sergio', 'Daniel']
    }
    
    render() {
        return (
            <ul>
                {this.state.users.map((item, index)=><li id={`users_${index}`} key={`users_${index}`}>{item}</li>)}
            </ul>
        )
    }
    componentDidMount() {
        const newUsers = this.state.users;
        newUsers.push('El burro delante');
        this.setState({users: newUsers})
    }
    componentWillUnmount() {
        const text = '¡Componente destruido!';
        console.log(text)
    }
}

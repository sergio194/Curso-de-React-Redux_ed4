import React from 'react';
import { Switch, Route } from 'react-router'
import { About } from './About'
import { Users } from './Users'
import { Home } from './Home'
const Routes = () => {
    return (
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/users">
                <Users />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export { Routes }
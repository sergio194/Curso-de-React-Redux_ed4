import React from 'react';
import { Switch, Route } from 'react-router';
import { Home } from '../Pages/Home'
import { Comments } from '../Pages/Comments'
const Routes = () => {

    return (
        <Switch>
            <Route path="/:id">
                <Comments></Comments>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    );

}

export { Routes };

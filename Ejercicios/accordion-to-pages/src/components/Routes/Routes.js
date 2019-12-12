import React from 'react';
import { Switch, Route } from 'react-router';
// import { Home } from '../Pages/Home';
// import { Comments } from '../Pages/Comments';

const Home = React.lazy(() => import('../Pages/Home'));
const Comments = React.lazy(() => import('../Pages/Comments'));

const Routes = () => {

    return (
        <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path="/:id">
                <Comments></Comments>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
        </Switch>
        </React.Suspense>
    );

}

export { Routes };

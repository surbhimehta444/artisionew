import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Interests from '../Interests';
import Dashboard from '../Dashboard';
import Signup from '../Signup';

export default function Main() {
    return(
        <Switch>
            <Route exact path="/" component={Interests}/>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
        </Switch>
    )
}
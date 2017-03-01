import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Todos from '../layouts/Todos';
import CounterContainer from '../containers/CounterContainer';

const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Todos} />
        <Route path="/counter" component={CounterContainer} />
    </Router>
);

export default App;
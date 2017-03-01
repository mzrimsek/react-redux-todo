import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import CounterContainer from '../containers/CounterContainer';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <CounterContainer />
    </div>
);

export default App;
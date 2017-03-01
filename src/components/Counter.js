import React, { PropTypes } from 'react';

const Counter = ({ addOne, addTwo, double, triple, count }) => (
    <div>
        <button onClick={addOne}>Add One</button>
        <button onClick={addTwo}>Add Two</button>
        <button onClick={double}>Double</button>
        <button onClick={triple}>Triple</button>
        <span>Count: {count}</span>
    </div>
    
);

Counter.propTypes = {
    addOne: PropTypes.func.isRequired,
    addTwo: PropTypes.func.isRequired,
    double: PropTypes.func.isRequired,
    triple: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

export default Counter;
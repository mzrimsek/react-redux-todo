import React, { PropTypes } from 'react';

const Counter = ({ addOne, addTwo, count }) => (
    <div>
        <button onClick={addOne}>
            Add One
        </button>
        <button onClick={addTwo}>
            Add Two
        </button>
        <span>Count: {count}</span>
    </div>
    
);

Counter.propTypes = {
    addOne: PropTypes.func.isRequired,
    addTwo: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

export default Counter;
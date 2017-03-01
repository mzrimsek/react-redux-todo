import { INCREMENT_COUNT } from '../constants';

const count = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return state + action.amount;
        default:
            return state;
    }
};

export default count;
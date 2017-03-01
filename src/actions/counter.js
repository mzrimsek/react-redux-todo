import { INCREMENT_COUNT, MULTIPLY_COUNT } from '../constants';

export const increment = (amount) => {
  return {
    type: INCREMENT_COUNT,
    amount
  };
};

export const multiply = (amount) => {
  return {
    type: MULTIPLY_COUNT,
    amount
  };
};

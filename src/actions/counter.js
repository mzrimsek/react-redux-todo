import { INCREMENT_COUNT } from '../constants';

export const increment = (amount) => {
  return {
    type: INCREMENT_COUNT,
    amount
  };
};

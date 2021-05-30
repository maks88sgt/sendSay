import {createTransform} from 'redux-persist';
import {State} from './State';

function filterStateProperties(
    state: State,
    unnecessaryProperties: string[]
): Partial<State> {
  unnecessaryProperties.forEach(property => {
    if (Object.prototype.hasOwnProperty.call(state, property)) {
      delete state[property];
    }
  });
  return state;
}

const unnecessaryProperties: string[] = ['isLoading', 'loginError', 'authSuccess'];

export const persistTransform = createTransform(
  (inboundState: State) => {
    return filterStateProperties({...inboundState}, unnecessaryProperties);
  },
  (outboundState: State) => {
    return {...outboundState};
  }
);




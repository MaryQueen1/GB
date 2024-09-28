const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})

const initialState = {
  counter: 0,
};

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

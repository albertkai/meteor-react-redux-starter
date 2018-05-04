import * as c from './constants';

const initialState = {
  clickCount: 0,
};

export function coreReducer(state = initialState, action) {
  switch (action.type) {
    case c.INCREMENT_CLICK_COUNT:
      return { ...state, clickCount: state.clickCount + 1 };
    default:
      return state;
  }
}

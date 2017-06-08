import * as c from './constants';

// Pure actions
export const incrementClickCount = () => ({
  type: c.INCREMENT_CLICK_COUNT,
});

// Actions with side effect
/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */
export const actionFilterOn = (state, action) => {
  if (action.payload.id === 0) {
    const curStatus = state[0].active;
    return state.forEach((el) => {
      el.active = !curStatus;
    });
  }
  const { id } = action.payload;
  const idx = state.findIndex((el) => id === el.id);
  state[idx].active = !state[idx].active;
  if (state.filter((el) => el.active === true).length === 4 && !state[0].active) {
    state[0].active = true;
  } else if (state[0].active && state.filter((el) => el.active === true).length < 5) {
    state[0].active = false;
  }

  return state;
};

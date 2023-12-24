/* eslint-disable no-param-reassign */

/* eslint-disable import/prefer-default-export */

export const resetListAction = (state, action) => {
  const { list } = action.payload;
  state.currentBunch = 0;
  state.agregatedList = list.reduce(
    (acc) => {
      if (acc.count % 5 === 0) {
        acc.arr = [...acc.arr, [...list.slice(acc.count, acc.count + 5)]];
      } else {
        acc.count += 1;
        return acc;
      }
      acc.count += 1;
      return acc;
    },
    {
      count: 0,
      arr: [],
    }
  ).arr;
};

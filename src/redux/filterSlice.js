import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

// export const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filter/setFilter': {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

export const setFilter = createAction('filter/setFilter', newContactName => {
  return {
    payload: newContactName,
  };
});

export const filterReducer = createReducer(filterInitialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  });
});

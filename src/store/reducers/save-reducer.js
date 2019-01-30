
const initialState = { save: false };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SAVEPARTS':
      return { ...state, ...{ save: payload } };

    default:
      return state;
  }
};
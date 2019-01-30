
const initialState = { edit: false };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'EDITPARTS':
      return { ...state, ...{ edit: payload } };

    case 'SAVEPARTS':
      return { ...state, ...{ edit: payload } };

    default:
      return state;
  }
};

export const editParts = (payload) => {
  return {
    type: 'EDITPARTS',
    payload: payload,
  };
};

export const saveParts = (payload) => {
  return {
    type: 'SAVEPARTS',
    payload: payload,
  };
};
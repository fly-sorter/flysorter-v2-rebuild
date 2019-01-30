export default store => next => action => {
  console.log('__ACTION__', action.payload.record);
  try {
    let result = next(action);
    console.log('__STATE__', store.getState());
    return result;
  } catch (err) {
    err.action = action;
    console.error(err);
    return err;
  }
};

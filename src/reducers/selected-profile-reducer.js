import * as c from '../actions/ActionTypes';

export default (state = null, action) => {
  const { selectedProfile } = action;
  switch (action.type) {
  case c.SELECTED_PROFILE:
    const newState = selectedProfile;
    return newState;
  case c.NO_PROFILE_SELECTED:
    const newState2 = null;
    return newState2;
  default:
    return state;
  }
};
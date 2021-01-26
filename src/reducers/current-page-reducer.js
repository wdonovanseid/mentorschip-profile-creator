import * as c from '../actions/ActionTypes';

export default (state = "profileList", action) => {
  switch (action.type) {
    case c.SHOW_NEW_PROFILE_FORM:
      const newState = "newProfile";
      return newState;
    case c.SHOW_PROFILE_DETAILS:
      const newState2 = "profileDetail";
      return newState2;
    case c.SHOW_EDIT_PROFILE_FORM:
      const newState3 = "editProfile";
      return newState3;
    case c.SHOW_PROFILE_LIST:
      const newState4 = "profileList";
      return newState4;
    case c.SHOW_TEAM_COLOR_QUESTIONAIRE:
      const newState5 = "teamColorQuestionaire"
      return newState5;
    default:
      return state;
    }
};
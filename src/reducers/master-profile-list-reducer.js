import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case c.ADD_PROFILE:
    return Object.assign({}, state, {
      [action.id]: {
        accountType: action.accountType,
        dateOfBirth: action.dateOfBirth,
        firstName: action.firstName,
        lastName: action.lastName,
        userEmail: action.userEmail,
        userPassword: action.userPassword,
        guardiansEmail: action.guardiansEmail,
        seekersEmail: action.seekersEmail,
        country: action.country,
        state: action.state,
        city: action.city,
        streetAddress: action.streetAddress,
        zipCode: action.zipCode,
        representation: action.representation,
        nationality: action.nationality,
        gpaScore: action.gpaScore,
        satScore: action.satScore,
        actScore: action.actScore,
        classStanding: action.classStanding,
        achievements: action.achievements,
        academicLevel: action.academicLevel,
        volunteerActivities: action.volunteerActivities,
        communityOrganizations: action.communityOrganizations,
        accolades: action.accolades,
        scholarshipValue: action.scholarshipValue,
        merrits: action.merrits,
        badges: action.badges,
        gameAchievements: action.gameAchievements,
        createdAt: action.createdAt,
        id: action.id
      }
    });
  case c.DELETE_PROFILE:
    const newState = { ...state };
    delete newState[action.id];
    return newState;
  default:
    return state;
  }  
};
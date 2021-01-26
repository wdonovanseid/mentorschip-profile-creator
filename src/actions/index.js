import * as c from './ActionTypes';

export const addProfile = profile => {
  return {
    type: c.ADD_PROFILE,
    accountType: profile.accountType,
    dateOfBirth: profile.dateOfBirth,
    firstName: profile.firstName,
    lastName: profile.lastName,
    userEmail: profile.userEmail,
    userPassword: profile.userPassword,
    guardiansEmail: profile.guardiansEmail,
    seekersEmail: profile.seekersEmail,
    country: profile.country,
    state: profile.state,
    city: profile.city,
    streetAddress: profile.streetAddress,
    zipCode: profile.zipCode,
    representation: profile.representation,
    nationality: profile.nationality,
    gpaScore: profile.gpaScore,
    satScore: profile.satScore,
    actScore: profile.actScore,
    classStanding: profile.classStanding,
    achievements: profile.achievements,
    academicLevel: profile.academicLevel,
    volunteerActivities: profile.volunteerActivities,
    communityOrganizations: profile.communityOrganizations,
    accolades: profile.accolades,
    scholarshipValue: profile.scholarshipValue,
    merrits: profile.merrits,
    badges: profile.badges,
    gameAchievements: profile.gameAchievements,
    createdAt: profile.createdAt,
    id: profile.id
  }
}

export const deleteProfile = id => ({
  type: c.DELETE_PROFILE,
  id
});

export const showProfileList = ({
  type: c.SHOW_PROFILE_LIST
});

export const showNewProfileForm = ({
  type: c.SHOW_NEW_PROFILE_FORM
});

export const showProfileDetails = ({
  type: c.SHOW_PROFILE_DETAILS
});

export const showEditProfileForm = ({
  type: c.SHOW_EDIT_PROFILE_FORM
});

export const selectedProfile = profile => ({
  type: c.SELECTED_PROFILE,
  selectedProfile: profile
});

export const noProfileSelected = ({
  type: c.NO_PROFILE_SELECTED
});

export const showTeamColorQuestionaire = ({
  type: c.SHOW_TEAM_COLOR_QUESTIONAIRE
});

import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

// There is probably a much better way to format this instead of repeating code

function NewProfileForm(props) {
  function handleNewProfileFormSubmission(event) {
    event.preventDefault();
    let currentDate = new Date().toString();
    if (event.target.accountType.value === "Seeker") {
      props.onNewProfileCreation({
        accountType: event.target.accountType.value,
        dateOfBirth: event.target.dateOfBirth.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        userEmail: event.target.userEmail.value,
        userPassword: event.target.userPassword.value,
        guardiansEmail: event.target.guardiansEmail.value,
        country: event.target.country.value,
        state: event.target.state.value,
        city: event.target.city.value,
        streetAddress: event.target.streetAddress.value,
        zipCode: event.target.zipCode.value,
        representation: event.target.representation.value,
        nationality: event.target.nationality.value,
        gpaScore: event.target.gpaScore.value,
        satScore: event.target.satScore.value,
        actScore: event.target.actScore.value,
        classStanding: event.target.classStanding.value,
        achievements: event.target.achievements.value,
        academicLevel: event.target.academicLevel.value,
        volunteerActivities: event.target.volunteerActivities.value,
        communityOrganizations: event.target.communityOrganizations.value,
        accolades: event.target.accolades.value,
        scholarshipValue: 0,
        merrits: "None",
        badges: "None",
        gameAchievements: "None",
        createdAt: currentDate,
        id: v4()
      });
    } else if (event.target.accountType.value === "Guardian") {
      props.onNewProfileCreation({
        accountType: event.target.accountType.value,
        dateOfBirth: event.target.dateOfBirth.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        userEmail: event.target.userEmail.value,
        userPassword: event.target.userPassword.value,
        seekersEmail: [event.target.seekersEmail.value],
        country: event.target.country.value,
        state: event.target.state.value,
        city: event.target.city.value,
        streetAddress: event.target.streetAddress.value,
        zipCode: event.target.zipCode.value,
        representation: event.target.representation.value,
        nationality: event.target.nationality.value,
        volunteerActivities: event.target.volunteerActivities.value,
        communityOrganizations: event.target.communityOrganizations.value,
        accolades: event.target.accolades.value,
        scholarshipValue: 0,
        merrits: "None",
        badges: "None",
        gameAchievements: "None",
        createdAt: currentDate,
        id: v4()
      });
    } else {
      props.onNewProfileCreation({
        accountType: event.target.accountType.value,
        dateOfBirth: event.target.dateOfBirth.value,
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        userEmail: event.target.userEmail.value,
        userPassword: event.target.userPassword.value,
        country: event.target.country.value,
        state: event.target.state.value,
        city: event.target.city.value,
        streetAddress: event.target.streetAddress.value,
        zipCode: event.target.zipCode.value,
        representation: event.target.representation.value,
        nationality: event.target.nationality.value,
        volunteerActivities: event.target.volunteerActivities.value,
        communityOrganizations: event.target.communityOrganizations.value,
        accolades: event.target.accolades.value,
        scholarshipValue: 0,
        merrits: "None",
        badges: "None",
        gameAchievements: "None",
        createdAt: currentDate,
        id: v4()
      });
    }
  }
  return (
    <React.Fragment>
      <h2>Add a new Profile</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleNewProfileFormSubmission}
        formButtonText="Create new Profile"
        accountType={props.accountType}
        userEmail={props.userEmail}
        userPassword={props.userPassword}
      />
    </React.Fragment>
  );
}

NewProfileForm.propTypes = {
  onNewProfileCreation: PropTypes.func,
  accountType: PropTypes.string
};

export default NewProfileForm;
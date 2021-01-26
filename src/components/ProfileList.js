import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList(props){
  return (
    <React.Fragment>
      <h2>Profile List</h2>
      {props.profileList.map((x) =>
        <Profile
          whenProfileClicked={props.onProfileSelection}
          accountType={x.accountType}
          dateOfBirth={x.dateOfBirth}
          firstName={x.firstName}
          lastName={x.lastName}
          userEmail={x.userEmail}
          userPassword={x.userPassword}
          guardiansEmail={x.guardiansEmail}
          seekersEmail={x.seekersEmail}
          country={x.country}
          state={x.state}
          streetAddress={x.streetAddress}
          zipCode={x.zipCode}
          representation={x.representation}
          nationality={x.nationality}
          gpaScore={x.gpaScore}
          satScore={x.satScore}
          actScore={x.actScore}
          classStanding={x.classStanding}
          achievements={x.achievements}
          academicLevel={x.academicLevel}
          volunteerActivities={x.volunteerActivities}
          communityOrganizations={x.communityOrganizations}
          accolades={x.accolades}
          scholarshipValue={x.scholarshipValue}
          merrits={x.merrits}
          badges={x.badges}
          gameAchievements={x.gameAchievements}
          createdAt={x.createdAt}
          id={x.id}
          key={x.id} />
      )}
    </React.Fragment>
  )
}

ProfileList.propTypes = {
  profileList: PropTypes.array,
  onProfileSelection: PropTypes.func
};

export default ProfileList;
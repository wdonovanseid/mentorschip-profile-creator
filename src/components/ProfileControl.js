import React from 'react';
import ProfileList from './ProfileList';
import NewProfileForm from './NewProfileForm';
import ProfileDetail from './ProfileDetail';
import EditProfileForm from './EditProfileForm';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from '../actions/index.js';
import TeamColorQuestionaire from './TeamColorQuestionaire';

class ProfileControl extends React.Component {

  constructor() {
    super();
    this.state = {
      accountType: "Seeker",
      userEmail: "",
      userPassword: "",
      realCountry: false,
      realState: false,
      realCity: false,
      realStreetAddress: false,
      realZipCode: false,
    };
    this.handleAccountTypeChange = this.handleAccountTypeChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleAccountTypeChange(e) {
    this.setState({ accountType: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ userEmail: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ userPassword: e.target.value });
  }

  handleClick = () => {
    if (this.props.currentPage !== 'profileList') {
      this.props.dispatch(a.showProfileList);
      this.props.dispatch(a.noProfileSelected);
    } else {
      this.props.dispatch(a.showNewProfileForm);
    }
  }

  handleAddingNewProfileToList = (newProfile) => {
    this.props.dispatch(a.addProfile(newProfile));
    this.props.dispatch(a.showProfileList);
    // this.handleSaveToPC(newProfile);
    // Can Uncomment this line if you want each created profile to have own JSON File auto downloaded
  }

  handleSaveToPC = jsonData => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'testProfile.json';
    link.href = url;
    link.click();
  }

  handleChangingSelectedProfile = (id) => {
    const profile = this.props.masterProfileList[id];
    this.props.dispatch(a.selectedProfile(profile));
    this.props.dispatch(a.showProfileDetails);
  }

  handleEditClick = () => {
    this.props.dispatch(a.showEditProfileForm);
  }

  handleEditingProfileInList = (ProfileToEdit) => {
    this.props.dispatch(a.addProfile(ProfileToEdit));
    this.props.dispatch(a.showProfileList);
    this.props.dispatch(a.noProfileSelected);
  }

  handleDeletingProfile = (id) => {
    this.props.dispatch(a.deleteProfile(id));
    this.props.dispatch(a.showProfileList);
    this.props.dispatch(a.noProfileSelected);
  }

  handleAddSeekerEmail = (event) => {
    event.preventDefault();
    const profile = this.props.masterProfileList[event.target.profileID.value];
    if (profile.seekersEmail.length < 10) {
      profile.seekersEmail.push(event.target.newSeekerEmail.value);
    } else {
      alert("Can only have 10 emails");
    }
    this.setState({});
  }

  handleDeleteSeekerEmail = (id, seekerEmailIndex) => {
    const profile = this.props.masterProfileList[id];
    if (profile.seekersEmail.length === 1) {
      profile.seekersEmail = [];
    } else {
      profile.seekersEmail.splice(seekerEmailIndex, 1);
    }
    this.setState({});
  }

  handleShowTeamColorQuestionaire = () => {
    this.props.dispatch(a.showTeamColorQuestionaire);
  }

  handleSubmitTeamColorQuestionaire = (e) => {
    e.preventDefault();
    const total = e.target.q1.value + e.target.q2.value + e.target.q3.value + e.target.q4.value + e.target.q5.value + e.target.q6.value + e.target.q7.value + e.target.q8.value + e.target.q9.value + e.target.q10.value;
    const profile = this.props.selectedProfile;
    if (total > 5) {
      profile.teamColor = "Gold";
      // Left Brain
    } else {
      profile.teamColor = "Blue";
      // Right Brain
    }
    this.props.dispatch(a.showProfileDetails);
  }

  handleReturnToProfileDetails = () => {
    this.props.dispatch(a.showProfileDetails);
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = "Return To Profile List";
    if (this.props.currentPage === 'teamColorQuestionaire') {
      currentlyVisibleState =
        <TeamColorQuestionaire
        formSubmissionHandler={this.handleSubmitTeamColorQuestionaire}
        onReturnToProfileDetails={this.handleReturnToProfileDetails}
        />
    } else if (this.props.currentPage === 'editProfile') {
      currentlyVisibleState =
        <EditProfileForm
        profile={this.props.selectedProfile}
        onEditProfile={this.handleEditingProfileInList}
        />
    } else if (this.props.selectedProfile != null) {
      currentlyVisibleState =
        <ProfileDetail
        profile={this.props.selectedProfile}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingProfile}
        onClickingAddSeekerEmail={this.handleAddSeekerEmail}
        onClickingDeleteSeekerEmail={this.handleDeleteSeekerEmail}
        onClickingGetTeamColor={this.handleShowTeamColorQuestionaire}
        onClickingSaveAsJSONFile={this.handleSaveToPC}
        />
    } else if (this.props.currentPage === 'newProfile') {
      currentlyVisibleState =
        <NewProfileForm
        onNewProfileCreation={this.handleAddingNewProfileToList}
        accountType={this.state.accountType}
        userEmail={this.state.userEmail}
        userPassword={this.state.userPassword}
        />
    } else {
      currentlyVisibleState =
        <ProfileList
        profileList={Object.values(this.props.masterProfileList)}
        onProfileSelection={this.handleChangingSelectedProfile}
        />
      buttonText = "Add Profile";
    }
    return (
      <React.Fragment>
        <p>Account Type:
          <select value={this.state.accountType} onChange={this.handleAccountTypeChange}>
            <option value="Seeker">Seeker</option>
            <option value="Mentor">Mentor</option>
            <option value="Guardian">Guardian</option>
          </select>
        </p>
        <p>User Email: <input name="userEmail" onChange={this.handleEmailChange}></input></p>
        <p>User Password: <input name="userPassword" onChange={this.handlePasswordChange}></input></p>
        <hr />
        {currentlyVisibleState}
        <hr />
        <button type="button" onClick={this.handleClick}>{buttonText}</button>
        <button type="button" onClick={() => this.handleSaveToPC(this.props.masterProfileList)}>Save all Test Profiles to JSON File</button>
      </React.Fragment>
    );
  }
}

ProfileControl.propTypes = {
  currentPage: PropTypes.string,
  masterProfileList: PropTypes.object,
  selectedProfile: PropTypes.object
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    masterProfileList: state.masterProfileList,
    selectedProfile: state.selectedProfile
  }
}

ProfileControl = connect(mapStateToProps)(ProfileControl);

export default ProfileControl;

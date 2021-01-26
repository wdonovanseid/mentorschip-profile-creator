import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <React.Fragment>
        <h4>{props.accountType}: {props.firstName} {props.lastName} - {props.createdAt}
          <button className="btn btn-info" onClick={() => props.whenProfileClicked(props.id)}>Details</button>
        </h4>
    </React.Fragment >
  );
}

Profile.propTypes = {
  accountType: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  createdAt: PropTypes.string,
  id: PropTypes.string,
  whenProfileClicked: PropTypes.func
};

export default Profile;
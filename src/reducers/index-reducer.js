import { combineReducers } from 'redux';
import currentPageReducer from './current-page-reducer';
import masterProfileListReducer from './master-profile-list-reducer';
import selectedProfileReducer from './selected-profile-reducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  masterProfileList: masterProfileListReducer,
  selectedProfile: selectedProfileReducer
});

export default rootReducer;
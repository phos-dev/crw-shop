import { SET_USER } from './constants';

const initialState = {
  currentUser: null
};
const userState = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};
export default userState;

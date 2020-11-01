export const initialState = {
  user: null,
  jobs: [],
};

export const ACTIONS = {
  SET_USER: "set-user",
  GET_DATA: "get-data",
};

const reducer = (state, action) => {
  console.log("action yoo", action);
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload.user,
      };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        jobs: action.payload.jobs,
      };
    default:
      return state;
  }
};

export default reducer;

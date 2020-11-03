export const initialState = {
  user: null,
  jobs: [],
};

export const ACTIONS = {
  SET_USER: "set-user",
  GET_DATA: "get-data",
  SAVE_JOB: "save-job",
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
    case ACTIONS.SAVE_JOB:
      return {
        ...state,
        // jobs: action.payload.saveJob,
        // jobs: [...state.jobs, action.payload.saveJob],
        jobs: action.saveJob,
      };
    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  character: "",
  quotes: "",
  available: false,
  error: "",
};

export const titileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START":
      return {
        ...state,
        available: true,
      };
    case "SUCCESS":
      return {
        ...state,
        available: false,
        quotes: action.payload,
        error: "",
      };
    case "NAME":
      return {
        ...state,
        available: false,
        character: action.payload,
        error: "",
      };
    case "FAILURE":
      return {
        ...state,
        available: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

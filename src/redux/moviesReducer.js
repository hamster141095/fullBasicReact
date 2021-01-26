let initialState = { name: "Francis", id: 2 };

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVIES_LIST": {
      let stateCopy = {
        ...state,
        movies: [
          { id: 1, name: "all" },
          { id: 2, name: "killer" },
        ],
      };
      return stateCopy;
    }

    default:
      return state;
  }
};

export default moviesReducer;

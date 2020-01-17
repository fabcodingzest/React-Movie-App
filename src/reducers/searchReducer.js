import { FETCH_POPULAR_MOVIES } from "../actions/api";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
}

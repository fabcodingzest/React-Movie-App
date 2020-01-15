export function requestMovies() {
  return {
    type: "SEARCH_MOVIES_REQUEST"
  };
}

export function requestSuccess() {
  return {
    type: "SEARCH_MOVIES_SUCCESS"
  };
}

export function requestFailed() {
  return {
    type: "SEARCH_MOVIES_FAILED"
  };
}

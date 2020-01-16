import React from "react";
import { createStore, compose } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import searchReducer from '../reducers/searchReducer'

const store = createStore(searchReducer);
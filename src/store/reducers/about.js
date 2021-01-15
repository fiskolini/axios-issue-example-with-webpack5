import {
  API_START,
  API_END,
} from "../constants";
import {FETCH_ABOUT_US_DETAILS, SET_ABOUT_US_DETAILS} from "../constants/about-us";

export default function (state = {}, action) {
  console.log("action type => ", action.type);

  switch (action.type) {
    case SET_ABOUT_US_DETAILS:
      return {
        ...state,
        data: action.payload,
        isLoadingData: true
      };
    case API_START:
      if (action.payload === FETCH_ABOUT_US_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      return state;
    case API_END:
      if (action.payload === FETCH_ABOUT_US_DETAILS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      return state;
    default:
      return state;
  }
}

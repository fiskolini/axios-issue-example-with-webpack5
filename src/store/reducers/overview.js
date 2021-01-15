import {
  API_START,
  API_END,
} from "../constants";
import {FETCH_OVERVIEW_DETAILS, SET_OVERVIEW_DETAILS} from "../constants/overview";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_OVERVIEW_DETAILS:
      return {
        ...state,
        data: action.payload,
        isLoadingData: true
      };
    case API_START:
      if (action.payload === FETCH_OVERVIEW_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      return state;
    case API_END:
      if (action.payload === FETCH_OVERVIEW_DETAILS) {
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

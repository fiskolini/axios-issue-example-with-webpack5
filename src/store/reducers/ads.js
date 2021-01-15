import {
  API_START,
  API_END,
} from "../constants";
import {FETCH_AD_FORMATS_DETAILS, SET_AD_FORMATS_DETAILS} from "../constants/ad-formats";

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AD_FORMATS_DETAILS:
      return {
        ...state,
        data: action.payload,
        isLoadingData: true
      };
    case API_START:
      if (action.payload === FETCH_AD_FORMATS_DETAILS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      return state;
    case API_END:
      if (action.payload === FETCH_AD_FORMATS_DETAILS) {
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

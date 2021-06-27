import { combineReducers } from 'redux';
import covidSummaryReducer from "./covidSummary";


const rootReducer = combineReducers({
    summaryState: covidSummaryReducer,
});

export default rootReducer;

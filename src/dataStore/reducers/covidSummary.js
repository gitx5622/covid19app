import { GET_COVID_SUMMARY_SUCCESS, GET_COVID_SUMMARY_ERROR, GET_COVID_SUMMARY} from '../dispatchTypes';

export const initialCovidSummaryState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: '',
    data: {
        Global: {
            NewConfirmed: "",
            TotalConfirmed: "",
            NewDeaths: "",
            TotalDeaths: "",
            NewRecovered: "",
            TotalRecovered: ""
        }
    }
};

const covidSummaryReducer = (state = initialCovidSummaryState, action) => {
    switch (action.type) {
        case GET_COVID_SUMMARY: {
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        }
        case GET_COVID_SUMMARY_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                data: action.data,
            };
        }
        case GET_COVID_SUMMARY_ERROR: {
            return {
                ...state,
                isError: true,
                isSuccess: false,
                isLoading: false,
                errorMessage: action.errorMessage,
            };
        }
        default:
            return state
    }
};

export default covidSummaryReducer;

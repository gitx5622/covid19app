import axiosConfig from '../../config/axiosConfig';
import { GET_COVID_SUMMARY_SUCCESS, GET_COVID_SUMMARY_ERROR, GET_COVID_SUMMARY} from '../dispatchTypes';

export const covidSummary = (dispatch) => {
    dispatch({
        type: GET_COVID_SUMMARY,
    });
    axiosConfig
        .get(`/summary`,)
        .then(response => {
            dispatch({
                type: GET_COVID_SUMMARY_SUCCESS,
                data: response.data,
            });
        })
        .catch(error => {
            dispatch({
                type: GET_COVID_SUMMARY_ERROR,
                errorMessage: error.response.data.error_message,
            });
        })
        .catch(() => {
            dispatch({
                type: GET_COVID_SUMMARY_ERROR,
                errorMessage:
                    'Lost connetion to the server. Kindly check your internet connection',
            });
        });
};



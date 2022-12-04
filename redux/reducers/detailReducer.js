import {
    GET_DATA_JOB_DETAIL,
    GET_DATA_JOB_DETAIL_ERROR,
    GET_DATA_JOB_DETAIL_SUCCESS,
    RESET_DATA_JOB_DETAIL
} from "../types/detailType";

const initialState = {
    data: {},
    error: false,
    loading: false,
};

const jobDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_JOB_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_JOB_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_DATA_JOB_DETAIL_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false,
                error: true,
            };
        case RESET_DATA_JOB_DETAIL:
            return initialState
        default:
            return state;
    }
};

export default jobDetailReducer
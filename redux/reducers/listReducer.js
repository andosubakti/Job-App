import {
    GET_DATA_JOB_LIST,
    GET_DATA_JOB_LIST_ERROR,
    GET_DATA_JOB_LIST_SUCCESS,
    RESET_DATA_JOB_LIST
} from "../types/listTypes";

const initialState = {
    data: [],
    error: false,
    loading: false,
};

const jobListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_JOB_LIST:
            return {
                ...state,
                loading: true,
            };
        case GET_DATA_JOB_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.length > 1 ? [...state.data, ...action.payload] : action.payload,
            };
        case GET_DATA_JOB_LIST_ERROR:
            return {
                ...state,
                data: state.data,
                loading: false,
                error: true,
            };
        case RESET_DATA_JOB_LIST:
            return initialState
        default:
            return state;
    }
};

export default jobListReducer
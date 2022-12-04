import {
    GET_DATA_JOB_LIST,
    GET_DATA_JOB_LIST_ERROR,
    GET_DATA_JOB_LIST_SUCCESS,
    RESET_DATA_JOB_LIST
} from "../types/listTypes";

export const getDataJobListAction = () => ({
    type: GET_DATA_JOB_LIST,
});

export const getDataJobListActionSuccess = (data) => ({
    type: GET_DATA_JOB_LIST_SUCCESS,
    payload: data,
});

export const getDataJobListActionError = () => ({
    type: GET_DATA_JOB_LIST_ERROR,
});

export const resetDataJobListAction = () => ({
    type: RESET_DATA_JOB_LIST
})
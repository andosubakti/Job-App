import {
    GET_DATA_JOB_DETAIL,
    GET_DATA_JOB_DETAIL_ERROR,
    GET_DATA_JOB_DETAIL_SUCCESS,
    RESET_DATA_JOB_DETAIL
} from "../types/detailType";

export const getDataJobDetailAction = () => ({
    type: GET_DATA_JOB_DETAIL,
});

export const getDataJobDetailActionSuccess = (data) => ({
    type: GET_DATA_JOB_DETAIL_SUCCESS,
    payload: data,
});

export const getDataJobDetailActionError = () => ({
    type: GET_DATA_JOB_DETAIL_ERROR,
});

export const resetDataJobDetailAction = () => ({
    type: RESET_DATA_JOB_DETAIL
})
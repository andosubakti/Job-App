import { fetchJobList } from "../../services/jobList";

import {
    getDataJobListAction,
    getDataJobListActionError,
    getDataJobListActionSuccess,
} from "../actions/listActions";

export const getJobListService = (params) => {
    return async (dispatch) => {
        dispatch(getDataJobListAction());
        return fetchJobList(params)
            .then((res) => {
                dispatch(getDataJobListActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDataJobListActionError());
            });
    };
};
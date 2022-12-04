import { fetchJobDetail } from "../../services/jobList";
import {
    getDataJobDetailAction,
    getDataJobDetailActionError,
    getDataJobDetailActionSuccess
} from "../actions/detailActions";

export const getJobDetailService = (id) => {
    return async (dispatch) => {
        dispatch(getDataJobDetailAction());
        return fetchJobDetail(id)
            .then((res) => {
                dispatch(getDataJobDetailActionSuccess(res.data));
            })
            .catch(() => {
                dispatch(getDataJobDetailActionError());
            });
    };
};
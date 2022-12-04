import axios from "axios";

export const apiRequest = async ({
    url,
    method,
    timeout,
    headers,
    bodyRequest,
    params,
    path,
}) => {
    const baseUrl = url ? `${url}` : `http://dev3.dansmultipro.co.id/api/recruitment`;
    const defaultParams = {
        // api_key: "",
    };
    const mergedParams = { ...defaultParams, ...params };

    const config = {
        method,
        url: baseUrl + path,
        params: mergedParams,
        headers: {},
    };

    if (headers) {
        config.headers = { ...config.headers, ...headers };
    }

    if (bodyRequest) {
        config.data = bodyRequest;
    }

    if (timeout) {
        config.timeout = timeout;
    }

    return axios(config)
        .then((res) => res)
        .catch((err) => {
            console.info("[ERROR] Api Request: ", err);
            throw err;
        });
};
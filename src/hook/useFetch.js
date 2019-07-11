import {useEffect, useState} from "react";
import {_httpRequest} from "../utils/_httpRequest";

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (url) {
            setLoading(true);
            _httpRequest.get(url, options)
                .then((res) => {
                    setLoading(false);
                    setData(res);
                })
                .catch((err) => {
                    setLoading(false);
                    setError(true);
                })

        } else {
            setLoading(false);
            setData([]);
        }
    },[]);
    return [data, loading, error];
};
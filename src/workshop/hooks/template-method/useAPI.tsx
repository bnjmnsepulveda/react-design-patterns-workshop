import { useEffect, useState } from 'react';


interface Config<PARAMS, RESPONSE> {
    callback: (params?: PARAMS) => Promise<RESPONSE>;
    default?: {
        params: PARAMS
        response: RESPONSE
    }
}


interface API<PARAMS, RESPONSE> {
    loading: boolean;
    response: RESPONSE;
    error: any;
    request: (params: PARAMS) => void;
}


export default function useAPI<PARAMS = {}, RESPONSE = {}>(config: Config<PARAMS, RESPONSE>): API<PARAMS, RESPONSE> {

    const [loading, setLoading] = useState(true)
    const [response, setResponse] = useState<RESPONSE>(config.default.response)
    const [params, setParams] = useState<PARAMS>(config.default.params)
    const [error, setError] = useState(null)

    const request = (requestParams: PARAMS) => {
        setParams({
            ...params,
            ...requestParams
        })
    }

    useEffect(() => {

        const asyncRequest = async () => {

            try {

                setLoading(true)
                const response = await config.callback(params)
                setResponse(response)

            } catch (error) {
                setError(error)
            }

            setLoading(false)

        }
        asyncRequest()

    }, [params])

    return {
        loading,
        response,
        request,
        error
    }
}
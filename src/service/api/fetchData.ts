type FetchOption = {
    method?: string;
    headers?: HeadersInit;
    Accept?: string;
};

const fetchData = async (url : string, options: FetchOption, callback: (err: any, data: Response |  [])  => void) => {
    try {
        const resp : Response = await fetch(url, options);
        return callback(null, resp);
    } catch (error) {   
        return callback(error, []);
    }
};

export default  fetchData;
import { useState, useEffect } from "react";
import axios from "axios";


function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
 

    useEffect(() => {
    if (!url) {
        setData([]);
        setIsLoading(false);
        setError(null);
        return;
    }

    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await axios.get(url);
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError("Error fetching data");
            setIsLoading(false);
        }
    };

    fetchData();
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;

            
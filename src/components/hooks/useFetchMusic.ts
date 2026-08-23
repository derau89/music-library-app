import { useState, useEffect } from "react";
import axios from "axios";


function useFetchMusic(searchTerm) {
    const [musicState, setMusicState] = useState({
        music: [],
        isLoading: true,
        error: null as string | null,
    });

 

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${searchTerm}`
                );
                const data = response.data;

                setMusicState((prev) => ({
                    ...prev,
                    music: data.album || [],
                    isLoading: false,
                    error: null,
                }));
            } catch (error) {
                setMusicState((prev) => ({
                    ...prev,
                    error: "Failed to fetch music. Please try again later.",
                    isLoading: false,
                }));
            }
        }

       

        fetchMusic();
    }, []);

    return musicState;
}

export default useFetchMusic;
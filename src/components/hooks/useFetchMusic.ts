
import { useState, useEffect } from "react";
import axios from "axios";

function useFetchMusic(searchTerm: string) {
    const [musicState, setMusicState] = useState({
        music: [],
        isLoading: false,
        error: null as string | null,
    });

    useEffect(() => {
        if (!searchTerm.trim()) {
            setMusicState({
                music: [],
                isLoading: false,
                error: null,
            });
            return;
        }

        const fetchMusic = async () => {
            try {
                setMusicState((prev) => ({
                    ...prev,
                    isLoading: true,
                    error: null,
                }));

                const response = await axios.get(
                    `https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(searchTerm)}`
                );

                setMusicState({
                    music: response.data.album || [],
                    isLoading: false,
                    error: null,
                });
            } catch (error) {
                setMusicState((prev) => ({
                    ...prev,
                    isLoading: false,
                    error: "Failed to fetch music. Please try again later.",
                }));
            }
        };

        fetchMusic();
    }, [searchTerm]);

    return musicState;
}

export default useFetchMusic;

export const addSong = (song) => ({
    type: 'ADD_SONG',
    payload: song
});

export const removeSong = (id) => ({
    type: 'REMOVE_SONG',
    payload: id
});
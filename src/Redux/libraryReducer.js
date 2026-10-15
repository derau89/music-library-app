

const initialState =  [];

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'ADD_SONG': {
    const alreadyExists = state.some(
        song => String(song.id) === String(action.payload.id)
    );

    if (alreadyExists) {
        return state;
    }

    return [...state, action.payload];
}

       case 'REMOVE_SONG':
           return state.filter(song => song.id !== action.payload);

           default:
            return state;
    }
};


export default libraryReducer;
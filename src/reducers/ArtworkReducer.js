export default function artworkReducer(
    state = {
        loading: false,
        artworks: [],
    }, action){
        switch(action.type){
            case 'LOAD_ARTWORK':
                return {
                    ...state,
                    artworks: [...state.artworks],
                    loading: true
                };
            case 'FETCH_ARTWORKS':
                return {
                    ...state,
                    artworks: action.artworks,
                    loading: false
                }
            default:
                return state;
        }
}


// add ADD + EDIT + DELETE
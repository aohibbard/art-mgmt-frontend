import { combineReducers } from 'redux';
import artworksReducer from './ArtworkReducer'

const rootReducer = combineReducers({
    artworks: artworksReducer
})

export default rootReducer
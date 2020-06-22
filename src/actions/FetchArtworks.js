const URL = 'https://localhost:3000'

export const fetchArtworks = () => {
    return (dispatch) => {
        dispatch({type: 'LOAD_ARTWORKS'})
        fetch(URL)
        .then(res => res.json())
        .then(date => {
            // parse & pass to dispatcher
            let artworksArr = []
            dispatch({type: 'FETCH_ARTWORKS', artworks: artworksArr})
        })
        .catch(error => console.log(error))
    }
}
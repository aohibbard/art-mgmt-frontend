import React from 'react';
import { connect } from 'react-redux';
import { fetchArtworks } from '..actions/FetchArtworks'

class UserHome extends React.Component{
    
    componentDidMount(){
        const URL = 'http://localhost:3000/api'
        fetch(URL)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    
    render(){
        return(
            <div>

            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {fetchArtworks} )(UserHome)
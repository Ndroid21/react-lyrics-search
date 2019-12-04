import React, { Component } from 'react'
import axios from 'axios';

export default class Lyrics extends Component {
    state = {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(response => {
                console.log(response);
                this.setState({
                    lyrics: response.data.message.body.lyrics
                });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <h1>Lyrics Page</h1>
                <p>{ this.state.lyrics.lyrics_body }</p>
            </div>
        )
    }
}

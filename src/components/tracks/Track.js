import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Track extends Component {
    render() {
        const { track } = this.props;
        return (
            <div className="col-md-6">
                <div className="card mb-4 shadow-sm" style={{ height:'12rem' }}>
                    <div className="card-body">
                        <h5>{track.artist_name}</h5>
                        <p className="card-text">
                            <strong><i className="fa fa-play-circle"></i> Track</strong>: {track.track_name}
                            <br/>
                            <strong><i className="fa fa-circle-o"></i> Album</strong>: {track.album_name}
                        </p>
                        <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                            <i className="fa fa-chevron-right"></i> View Lyrics
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import { Consumer } from '../../context';

import Spinner from '../layout/Spinner';
import Track from './Track';

export default class TrackList extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        const { track_list, heading } = value;
                        // console.log(value);
                        if(track_list === undefined || track_list.length === 0) {
                            return <Spinner />;
                        } else {
                            return (
                                <React.Fragment>
                                    <h2 className="text-center mb-4">{heading}</h2>
                                    <div className="row">
                                        {track_list.map(track => {
                                            return <Track key={track.track.track_id} track={track.track} />;
                                        })}
                                    </div>
                                </React.Fragment>
                            );
                        }
                    }
                }
            </Consumer>
        )
    }
}

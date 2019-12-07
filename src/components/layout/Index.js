import React from 'react';

import TrackList from '../tracks/TrackList';
import Search from './Search';

export default function Index() {
    return (
        <div>
            <Search />
            <TrackList />
        </div>
    )
}

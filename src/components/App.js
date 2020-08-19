import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VIdeoList';
import VideoDetail from './VideoDetail';
class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async term => {
        const response = await youtube.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyCOrmG2-Ypf_LcAbtjREbJy2LkAbnhg1GE',
                q: term,
            }
        });
        this.setState({ videos: response.data.items });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });

    }
    render() {

        return (
            <div className='ui segment'>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetail selectedVideo={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}
export default App;
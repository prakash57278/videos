import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';

class App extends React.Component {
    onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
    };
    render() {
        console.log(this.onTermSubmit('goal'));

        return (
            <div>
                {/* <SearchBar onTermSubmit={this.onTermSubmit} /> */}
            </div>
        );
    }
}
export default App;
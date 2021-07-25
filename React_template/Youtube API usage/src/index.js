import _ from 'lodash'
import React, { Component } from "react";
import ReactDOM from "react-dom";

import YTSeacrh from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyByXJrsVcy-B7UNnPa3G8ymVl8x9np_gQE";


class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('cooking');
      }
      
    videoSearch(term) {
      YTSeacrh({ key: API_KEY, term: term }, (videos) =>{
        this.setState({ 
          videos: videos,
          selectedVideo: videos[0]
          });
      });

    }


  render() {
//lodash function for delaying search even u run fast
    const videoSearch = _.debounce((term)=>{ this.videoSearch(term)}, 300);

      return (
        <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

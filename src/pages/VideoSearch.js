import React, { Component, useState } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import './Video.css'

import { generateRandomComments, RandomComments } from './RandomComments';

// to dotenv???
const API_KEY = "AIzaSyD5OzX0gNSKszwwTfHe4Q6PX3aXOd5_Y8Q";

const SelectedVideo = (props) => {
    const { selectedVideo, selectedVideoId, comments } = props;
    if (selectedVideo == null) return (<></>);
    else return (
        <div>
            <iframe
                className='iframe-video'
                title={selectedVideo.title}
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                allowFullScreen
            ></iframe>
            <div className='selected-video-title'>
                <h2>{selectedVideo.title}</h2>
            </div>
            <div className='selected-video-description'>
                <p>{selectedVideo.description}</p>
            </div>

            <RandomComments data={comments} />
        </div>
    );
}

// already [FUNCTIONAL COMPONENT]
const VideoCard = (props) => {
    const { video } = props;

    return (
        <div key={video.id.videoId} className="video-card" style={{ margin: '10px' }}>
            <form onClick={() => props.onClick(video.id.videoId, video.snippet)}>
                {/* <img src={video} alt={video.alt_description} /> */}
                <img
                    src={video.snippet.thumbnails.default.url}
                    // alt={}
                    // src={`https://www.youtube.com/embed/${video.id.videoId}`}
                    // allowFullScreen
                />
                <div className='video-card-title'>
                    <h2>{video.snippet.title}</h2>
                    {/* <p>{video.snippet.description}</p> */}
                </div>
                <br />
            </form>
        </div>
    );
}

// already [FUNCTIONAL COMPONENT] VideoCard Container
const RecomendedVideos = (props) => {
    return (
        <div>
            {props.videos.map((video) => (
                <VideoCard video={video} onClick={props.onClick} />
            ))}
        </div>
    );
}

// refactor to functional component: VideoSearch Container
const VideoSearch = (props) => {
    const [selectedVideoId, setSelectedVideoId] = useState("");
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]); // videos by search result
    const [comments, setComments] = useState([]);

    const onSearchSubmit = async (term) => {
        // tiap API input params query nya bisa beda, ada yg pake objek (simpler, di unsplash) atau url (akses endpoint ke API) kek gini
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&part=snippet&maxResults=10`; // &order=date
        const response = await axios.get(apiUrl);
        const videoData = response.data.items;

        setVideos(videoData);
        setSelectedVideoId(videoData[0].id.videoId);
        setSelectedVideo(videoData[0].snippet);

        // udah ke snippet => selectedVideo.title/description
        // buat debugging
        // console.log(videoData, this.state);
    };

    const onVideoCardClick = async (id, snippet) => {
        setSelectedVideoId(id);
        setSelectedVideo(snippet);
        setComments(generateRandomComments());
    };

    return (
            <div className='ui container'>
                    <SearchBar onSubmit={onSearchSubmit} name="Video" />

                <div className='content-container'>
                    {/* selectedVideo Component */}
                    <SelectedVideo className="selected-video" selectedVideo={selectedVideo} selectedVideoId={selectedVideoId} comments={comments} />
                    {/* { !selectedVideo && (<SelectedVideo selectedVideo={selectedVideo} selectedVideoId={selectedVideoId} />)} */}

                    <RecomendedVideos className="recommended-video" videos={videos} onClick={onVideoCardClick} />
                </div>
            </div>
    );
}

class VideoSearchClass extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [], selectedVideoId: "", selectedVideo: null, comments: [] };

        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onVideoCardClick = this.onVideoCardClick.bind(this);
    };

    onSearchSubmit = async (term) => {
        // tiap API input params query nya bisa beda, ada yg pake objek (simpler, di unsplash) atau url (akses endpoint ke API) kek gini
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${term}&part=snippet&maxResults=10`; // &order=date
        const response = await axios.get(apiUrl);
        const videoData = response.data.items;
        this.setState({ videos: videoData, selectedVideoId: videoData[0].id.videoId, selectedVideo: videoData[0].snippet }); // response.data.results
        // udah ke snippet => selectedVideo.title/description
        console.log(videoData, this.state);
    };

    onVideoCardClick = async (id, snippet) => {
        const newComments = generateRandomComments(); // masih tetep sama T-T skip, ga penting, bodo amat
        this.setState({ selectedVideoId: id, selectedVideo: snippet, comments: newComments })
    };

    render() {
        const { videos, selectedVideoId, selectedVideo, comments } = this.state;
        return (
            <div className='ui container'>
                    <SearchBar onSubmit={this.onSearchSubmit} name="Video" />

                <div className='content-container'>
                    {/* selectedVideo Component */}
                    <SelectedVideo className="selected-video" selectedVideo={selectedVideo} selectedVideoId={selectedVideoId} comments={comments} />
                    {/* { !selectedVideo && (<SelectedVideo selectedVideo={selectedVideo} selectedVideoId={selectedVideoId} />)} */}

                    <RecomendedVideos className="recommended-video" videos={videos} onClick={this.onVideoCardClick} />
                </div>
            </div>
        );
    };
}

export default VideoSearch;
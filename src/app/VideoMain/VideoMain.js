import React from 'react';
import '../VideoMain/VideoMain.css';
import text from "../../../text";

class VideoMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'allVideos'
        }
    }
    
    backClick() {
        this.props.allVideos(this.state.page)
    }

    render() {
        const { video } = this.props;
        const videoId = video.snippet.resourceId.videoId;

        return (

            <div className="container-fluid">
                <div className="header-wrapper">
                <a href="#" onClick={e => this.backClick()}>back to all videos</a>
                    <h3>{video.snippet.title}</h3>
                    <h6>{text.publishedHeader} {video.snippet.publishedAt}</h6>
                </div>
                <div className="row block-wrapper">
                    <div className="col-md-6 col-lg-6">
                        <div className="video-wrapper">
                            <iframe width="560" height="349"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                frameborder="0">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <p className="video-decsription">{video.snippet.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoMain;

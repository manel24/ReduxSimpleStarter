import React from "react";

const VideoListItem = ({
  video,
  onVideoSelect
}) /*it will fetch the video prop automatically*/ => {
  const imgUrl = video.snippet.thumbnails.default.url;
  const video_heading = video.snippet.title;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imgUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video_heading}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

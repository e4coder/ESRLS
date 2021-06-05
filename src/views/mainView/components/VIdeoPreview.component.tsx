import React from 'react';

import VideoPlayer from './miniComponents/VideoPlayer.component';
import Styles from './VideoPreview.module.css';

export default function VideoPreview() {
  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Preview Window</div>
      </div>
      <div className={`windowContent ${Styles.test}`}>
        <div className="videoContainer">
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
}

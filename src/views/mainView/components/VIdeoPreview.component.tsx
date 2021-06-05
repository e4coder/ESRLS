import React, { useEffect } from 'react';
import { desktopCapturer } from 'electron';

import Styles from './VideoPreview.module.css';

export default function VideoPreview() {
  useEffect(() => {
    // handle source
  }, []);

  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Preview Window</div>
      </div>
      <div className={`windowContent ${Styles.test}`}>
        <div className="videoContainer">
          <h1>Content</h1>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

import Styles from './VideoPreview.module.css';

export default function VideoPreview() {
  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Preview Window</div>
      </div>
      <div className={`windowContent ${Styles.test}`}>
        <h1>Content</h1>
      </div>
    </div>
  );
}

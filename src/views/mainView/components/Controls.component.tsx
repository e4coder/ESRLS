import React, { useState } from 'react';

import Styles from './Controls.module.css';

export default function Controls() {
  const [isRecording, setRecording] = useState(false);

  const toggleRecording = () => {
    setRecording(!isRecording);
  };

  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Controls</div>
      </div>
      <div className={`windowContent ${Styles.ControlsContent}`}>
        <div className={`${Styles.streamSection}`}>
          <button
            type="button"
            className={`primaryButton ${Styles.ControlsButton} ${
              isRecording ? Styles.activeButton : Styles.recordButton
            }`}
            onClick={() => {
              toggleRecording();
            }}
          >
            {isRecording ? 'Stop' : 'Stream'}
          </button>
        </div>
        <div className={`${Styles.recordSection}`}>
          <div className={`${Styles.seperatorLine}`} />
          <button
            type="button"
            className={`primaryButton ${Styles.ControlsButton} ${
              isRecording ? Styles.activeButton : Styles.recordButton
            }`}
            onClick={() => {
              toggleRecording();
            }}
          >
            {isRecording ? 'Stop' : 'Record'}
          </button>
        </div>
      </div>
    </div>
  );
}

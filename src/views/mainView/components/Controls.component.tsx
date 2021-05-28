import React, { useState } from 'react';
import YoutubLive from '../../../../assets/youtubelive.png';

import Styles from './Controls.module.css';

import PrimaryButton from './miniComponents/PrimaryButton.component';

export default function Controls() {
  const [isRecording, setRecording] = useState(false);
  const [isStreaming, setStreaming] = useState(false);

  const toggleRecording = () => {
    setRecording(!isRecording);
  };

  const toggleStreaming = () => {
    setStreaming(!isStreaming);
  };

  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Controls</div>
      </div>
      <div className={`windowContent ${Styles.ControlsContent}`}>
        <div className={`${Styles.streamSection}`}>
          <div className={`${Styles.leftRow1} ${Styles.row}`}>
            <div className={`${Styles.streamButtonContainer}`}>
              <PrimaryButton
                Styles={Styles}
                toggle={toggleStreaming}
                condition={isStreaming}
                trueMessage="Stop"
                falseMessage="Stream"
              />
            </div>
          </div>
          <div className={`${Styles.leftRow2} ${Styles.row}`}>
            <div className={`${Styles.label}`}>Stream Key</div>
            <input className={`primaryInput ${Styles.input}`} type="text" />
          </div>
        </div>
        <div className={`${Styles.seperatorLine}`} />
        <div className={`${Styles.recordSection}`}>
          <div className={`${Styles.rightRow1} ${Styles.row}`}>
            <div>
              <PrimaryButton
                Styles={Styles}
                toggle={toggleRecording}
                condition={isRecording}
                trueMessage="Stop"
                falseMessage="Record"
              />
            </div>
          </div>
          <div className={`${Styles.rightRow2} ${Styles.row}`}>
            <div className={`${Styles.label}`}>Save to</div>
            <input className={`primaryInput ${Styles.input}`} type="text" />
          </div>
          <div className={`${Styles.rightRow2} ${Styles.row}`}>
            <div className={`${Styles.label}`}>Name</div>
            <input className={`primaryInput ${Styles.input}`} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

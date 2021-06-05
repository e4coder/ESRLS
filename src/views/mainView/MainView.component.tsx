import React from 'react';

import { useStoreState } from '../../state/hooks';

import Styles from './MainView.module.css';

import VideoPreview from './components/VIdeoPreview.component';
import Screens from './components/Screens.component';
import Controls from './components/Controls.component';
import Recordings from './components/Recordings.component';

export default function MainView() {
  // const test = useStoreState((state) => state.Test);

  return (
    <div className={`${Styles.mainView}`}>
      <div className={`${Styles.leftSection}`}>
        <div className={`${Styles.VideoPreviewContainer}`}>
          <VideoPreview />
        </div>
        <div className={`${Styles.ControlsContainer}`} id="style-7">
          <Controls />
        </div>
      </div>
      <div className={`${Styles.rightSection}`}>
        <div className={`${Styles.ScreensContainer}`}>
          <Screens />
        </div>
        <div className={`${Styles.RecordingsContainer}`}>
          <Recordings />
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { useStoreState } from '../../../../state/hooks';

export default function VideoPlayer() {
  const Sources = useStoreState((state) => state.ScreenModel.sources);

  useEffect(() => {
    const getStream = async () => {
      const constraints = {
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: Sources[0].id,
          },
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      const videos = document.querySelector('.videos');
      videos.srcObject = stream;
      videos.play();
    };
    getStream();
  }, [Sources]);
  // eslint-disable-next-line jsx-a11y/media-has-caption
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className="videos"
        // eslint-disable-next-line no-return-assign
        width="100%"
        autoPlay
        title="title"
      />
    </div>
  );
}

import React, { useEffect } from 'react';
import { Size, DesktopCapturerSource, desktopCapturer } from 'electron';

import { useStoreActions } from '../state/hooks';

export default function SourceLoader() {
  const setSources = useStoreActions(
    (actions) => actions.ScreenModel.setSources
  );
  useEffect(() => {
    // const getSources = async () => {
    //   const thumbnailSize: Size = { height: 480, width: 720 };
    //   const res: DesktopCapturerSource[] = await desktopCapturer.getSources({
    //     types: ['window', 'screen'],
    //     fetchWindowIcons: true,
    //     thumbnailSize,
    //   });
    //   setSources(res);
    // };
    // getSources();
  }, []);
  return <div style={{ display: 'none' }} />;
}

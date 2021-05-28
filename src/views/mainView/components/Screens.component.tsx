import React, { useEffect, useState } from 'react';
import { desktopCapturer, DesktopCapturerSource, Size } from 'electron';

export default function Screens() {
  const [Sources, setSources] = useState<DesktopCapturerSource[]>();

  useEffect(() => {
    const getSources = async () => {
      const thumbnailSize: Size = { height: 480, width: 720 };
      const res: DesktopCapturerSource[] = await desktopCapturer.getSources({
        types: ['window', 'screen'],
        fetchWindowIcons: true,
        thumbnailSize,
      });
      setSources([...res]);
    };
    getSources();
  }, []);

  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Screens</div>
      </div>
      <div className="windowContent">
        <div>
          {Sources?.map((source) => (
            <div key={source.id}>{source.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

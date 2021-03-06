import React, { useEffect } from 'react';
import { desktopCapturer, DesktopCapturerSource, Size } from 'electron';

import { useStoreState, useStoreActions } from '../../../state/hooks';

import Styles from './Screens.module.css';

export default function Screens() {
  const Sources = useStoreState((state) => state.ScreenModel.sources);
  const ActiveSource = useStoreState((state) => state.ScreenModel.activeSource);
  const setSources = useStoreActions(
    (actions) => actions.ScreenModel.setSources
  );
  const setActiveSource = useStoreActions(
    (actions) => actions.ScreenModel.setActiveSource
  );
  // const [Sources, setSources] = useState<DesktopCapturerSource[]>();

  useEffect(() => {
    const getSources = async () => {
      const thumbnailSize: Size = { height: 480, width: 720 };
      const res: DesktopCapturerSource[] = await desktopCapturer.getSources({
        types: ['screen', 'window'],
        fetchWindowIcons: true,
        thumbnailSize,
      });
      setSources(res);
    };
    getSources();
  }, [setSources]);

  return (
    <div className="windowSection">
      <div className="windowHeader">
        <div className="windowTitle">Screens</div>
      </div>
      <div className={`${Styles.windowContent}`}>
        <div className={`${Styles.screensContainer}`}>
          {Sources?.map((source) => (
            <div
              role="button"
              className="card"
              key={source.id}
              onClick={(e) => {
                e.preventDefault();
                const handleClick = () => {
                  setActiveSource(source.id);
                };
                handleClick();
              }}
              tabIndex={0}
              onKeyDown={() => {
                // setActiveSource(source.id);
              }}
            >
              <div>
                <img
                  alt="Thumbnail"
                  src={`data:image/png;base64,${source.thumbnail
                    .toPNG()
                    .toString('base64')}`}
                />
              </div>
              <p>{source.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { action, Action } from 'easy-peasy';
import { DesktopCapturerSource } from 'electron';

export interface ScreenModel {
  sources: DesktopCapturerSource[];
  setSources: Action<ScreenModel, DesktopCapturerSource[]>;
}

const screenModel: ScreenModel = {
  sources: [],
  setSources: action((state, payload) => {
    state.sources = [...payload];
  }),
};

export default screenModel;

import { action, Action } from 'easy-peasy';
import { DesktopCapturerSource } from 'electron';

export interface ScreenModel {
  sources: DesktopCapturerSource[];
  activeSource: string;
  isRecording: boolean;
  isStreaming: boolean;
  setSources: Action<ScreenModel, DesktopCapturerSource[]>;
  setActiveSource: Action<ScreenModel, string>;
}

const screenModel: ScreenModel = {
  sources: [],
  activeSource: '',
  isRecording: false,
  isStreaming: false,
  setSources: action((state, payload) => {
    state.sources = [...payload];
  }),
  setActiveSource: action((state, payload) => {
    state.activeSource = payload;
  }),
};

export default screenModel;

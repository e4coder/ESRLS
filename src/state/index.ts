import screenModel, { ScreenModel } from './screens';

export interface StoreModal {
  Test: string;
  ScreenModel: ScreenModel;
}

const storeModal: StoreModal = {
  Test: 'Working',
  ScreenModel: screenModel,
};

export default storeModal;

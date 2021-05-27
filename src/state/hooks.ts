import { createTypedHooks } from 'easy-peasy';

import { StoreModal } from './index';

export const {
  useStoreActions,
  useStoreDispatch,
  useStoreState,
} = createTypedHooks<StoreModal>();

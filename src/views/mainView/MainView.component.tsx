import React from 'react';

import { useStoreState } from '../../state/hooks';

export default function MainView() {
  const test = useStoreState((state) => state.Test);

  return <h1>Hello From MainView state says : {test}</h1>;
}

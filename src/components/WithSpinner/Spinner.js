import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;

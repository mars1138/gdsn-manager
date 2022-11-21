import React, { useState } from 'react';

import Button from '../../UIElements/Button';

const useConfirmationModal = (submitFunction, confirmLabel, cancelLabel) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showConfirmationHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const cancelConfirmationHandler = () => setShowConfirmation(false);

  const confirmModalFooter = (
    // <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <React.Fragment>
      <Button danger onClick={cancelConfirmationHandler}>
        {cancelLabel}
      </Button>
      {/* </div>
      <div style={{ marginLeft: '1rem' }}> */}
      <Button onClick={submitFunction}>{confirmLabel}</Button>
      {/* </div> */}
    </React.Fragment>
  );

  return {
    showConfirmation,
    setShowConfirmation,
    showConfirmationHandler,
    cancelConfirmationHandler,
    confirmModalFooter,
  };
};

export default useConfirmationModal;

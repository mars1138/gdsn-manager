import { useState } from 'react';

import Button from '../../UIElements/Button';

const useConfirmationModal = (submitFunction) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showConfirmationHandler = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  const cancelConfirmationHandler = () => setShowConfirmation(false);

  const confirmModalFooter = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div>
        <Button danger onClick={cancelConfirmationHandler}>
          Cancel
        </Button>
      </div>
      <div style={{ marginLeft: '1rem' }}>
        <Button onClick={submitFunction}>Update</Button>
      </div>
    </div>
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

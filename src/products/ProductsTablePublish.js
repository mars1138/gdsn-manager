import React from 'react';

import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';

import { catalogActions } from '../store/catalog-slice';
import useConfirmationModal from '../shared/components/hooks/confirmation-hook';

const ProductsTableDeactivate = (props) => {
  const { gtin } = props;

  status = 'deactivate';

  const activeStatusHandler = () => {
    dispatch(catalogActions.toggleProductActive({ gtin, status }));
  };

  const {
    showConfirmation,
    setShowConfirmation,
    showConfirmationHandler,
    cancelConfirmationHandler,
    confirmModalFooter,
  } = useConfirmationModal(activeStatusHandler, 'Deactivate', 'Cancel');

  return (
    <Button onClick={showConfirmationHandler} action>
      <span title={status}>
        <ion-icon size="small" src="/icons/stop-circle-outline.svg"></ion-icon>
      </span>
    </Button>
  );
};

export default ProductsTableDeactivate;

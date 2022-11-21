import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '../shared/UIElements/Button';
// import Modal from '../shared/UIElements/Modal';

import { catalogActions } from '../store/catalog-slice';
import useConfirmationModal from '../shared/components/hooks/confirmation-hook';

const ProductsTablePublish = props => {
  const { gtin } = props;

  const prodStatus = 'deactivate';

  const dispatch = useDispatch();

  const activeStatusHandler = () => {
    dispatch(catalogActions.toggleProductActive({ gtin, prodStatus }));
  };

  const {
    showConfirmation,
    setShowConfirmation,
    showConfirmationHandler,
    cancelConfirmationHandler,
    confirmModalFooter,
  } = useConfirmationModal(activeStatusHandler, 'Deactivate', 'Cancel');

  const clickHandler = () => {
    props.setModal(showConfirmation, setShowConfirmation, cancelConfirmationHandler, confirmModalFooter)
    showConfirmationHandler();
  };

  return (
    <Button onClick={clickHandler} action>
      <span title={prodStatus}>
        <ion-icon size="small" src="/icons/exit-outline.svg"></ion-icon>
      </span>
    </Button>
  );
};

export default ProductsTablePublish;

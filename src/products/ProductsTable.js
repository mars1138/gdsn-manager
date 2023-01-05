import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';
import { useForm } from '../shared/components/hooks/form-hook';
import FormInput from '../shared/components/FormElements/FormInput';

import { catalogActions } from '../../src/store/catalog-slice';
import { useHttpClient } from '../shared/components/hooks/http-hook';
import {
  useConfirmationModal,
  useConfirmModalFooter,
} from '../../src/shared/components/hooks/confirmation-hook';

import { customers } from '../assets/data/customers-data';
import { categoryOptions, typeOptions } from '../assets/data/test-catalog';
import { VALIDATOR_REQUIRE } from '../shared/utilities/validators';
import classes from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const [filterInput, setFilterInput] = useState('');
  const [actionParams, setActionParams] = useState();
  const [selectSubscriber, setSelectSubscriber] = useState();

  const dispatch = useDispatch();

  const authToken = useSelector((state) => state.auth.token);
  const authUserId = useSelector((state) => state.auth.userId);
  const catalog = useSelector((state) => state.catalog.products);

  let productName, customerName;
  let alreadySubbed = false;

  const { columns, data, status } = props;

  // Format customer list for select element:
  const customerList = [{ id: '', name: '' }];
  customers.forEach((cust) => customerList.push(cust));
  console.log('selectSubscriber: ', selectSubscriber);

  if (selectSubscriber && selectSubscriber.subscriber !== '') {
    customerName = customerList.find(
      (cust) => cust.id === +selectSubscriber.subscriber
    ).name;

    const gtin = actionParams.gtin;
    const custId = +selectSubscriber.subscriber;
    // console.log('custId: ', custId);
    const product = catalog.find((item) => item.gtin === gtin);
    const productSubs = [...product.subscribers];
    alreadySubbed = productSubs.includes(custId);
    console.log('alreadySubbed: ', alreadySubbed);
  }
  // console.log('customername: ', customerName);

  const [formState, inputHandler] = useForm(
    {
      subscriber: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter, // this hook provieds a way to set the filter
    // page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters, // adding the useFilters hook to the table; can add as many hooks as needed
    useSortBy,
    usePagination
  );

  const handleFilterChange = (event) => {
    const value = event.target.value || undefined;
    setFilter('name', value);
    setFilterInput(value);
  };

  const {
    showConfirmation: showConfirmActivate,
    setShowConfirmation: setShowConfirmActivate,
    // showConfirmationHandler: showConfirmActivateHandler,
    cancelConfirmationHandler: cancelActivateHandler,
  } = useConfirmationModal();

  const {
    showConfirmation: showConfirmDeactivate,
    setShowConfirmation: setShowConfirmDeactivate,
    // showConfirmationHandler: showConfirmDeactivateHandler,
    cancelConfirmationHandler: cancelDeactivateHandler,
  } = useConfirmationModal();

  const {
    showConfirmation: showConfirmPublish,
    // setShowConfirmation: setShowConfirmPublish,
    showConfirmationHandler: showConfirmPublishHandler,
    cancelConfirmationHandler: cancelPublishHandler,
  } = useConfirmationModal();

  const {
    showConfirmation: showChooseSubscriber,
    setShowConfirmation: setShowChooseSubscriber,
    // showConfirmationHandler: showChooseSubscriberHandler,
    cancelConfirmationHandler: cancelSubscriberHandler,
    // confirmModalFooter: chooseSubscriberFooter,
  } = useConfirmationModal();

  const {
    showConfirmation: showConfirmDelete,
    setShowConfirmation: setShowConfirmDelete,
    // showConfirmationHandler: showConfirmDeleteHandler,
    cancelConfirmationHandler: cancelDeleteHandler,
  } = useConfirmationModal();

  const productActionHandler = (productId, action) => {
    productName = catalog.find((item) => item.gtin === productId).name;
    setActionParams({ gtin: productId, itemName: productName, action: action });
    // console.log(catalog.find((item) => item.gtin === productId).name);
    if (action === 'activate') setShowConfirmActivate(true);
    if (action === 'deactivate') setShowConfirmDeactivate(true);
    if (action === 'publish') setShowChooseSubscriber(true);
    if (action === 'delete') setShowConfirmDelete(true);
  };

  // const [didSubmit, setDidSubmit] = useState(false);

  const { sendRequest } = useHttpClient();

  const publishProductHandler = () => {
    console.log('actionParams: ', actionParams);
    const gtin = actionParams.gtin;
    // const newSub = selectSubscriber.subscriber;

    if (!alreadySubbed) {
      // console.log(gtin, custId);
      // dispatch(catalogActions.addSubscriber({ gtin, custId }));
      // dispatch(catalogActions.setCatalogStorage());

      const existingProduct = catalog.find((item) => item.gtin === gtin);
      console.log('existingProduct: ', existingProduct);

      let url;

      const fetchData = async () => {
        try {
          console.log('exec replaceCatalog...');
          url = process.env.REACT_APP_BACKEND_URL + `/api/products/${gtin}`;

          const formData = new FormData();
          formData.append('name', existingProduct.name);
          formData.append('description', existingProduct.description);
          formData.append('gtin', existingProduct.gtin);
          formData.append('category', existingProduct.category);
          formData.append('type', existingProduct.type);
          formData.append('image', existingProduct.image);
          formData.append('subscribers', [
            ...existingProduct.subscribers,
            +formState.inputs.subscriber.value,
          ]);

          await sendRequest(url, 'PATCH', formData, {
            Authorization: 'Bearer ' + authToken,
          });

          // setDidSubmit(true);
        } catch (err) {
          console.log(err);
        }
      };

      if (authToken && authUserId) {
        fetchData(authUserId);
      }

      console.log('Product Published!');
      cancelPublishHandler();
      cancelSubscriberHandler();
    }
  };

  const activeStatusHandler = () => {
    console.log('actionParams: ', actionParams);
    const gtin = actionParams.gtin;
    const status = actionParams.action;
    dispatch(
      catalogActions.toggleProductActive({
        gtin: gtin,
        status: status,
      })
    );

    status === 'activate' && cancelActivateHandler();
    status === 'deactivate' && cancelDeactivateHandler();
    dispatch(catalogActions.setCatalogStorage());
  };

  const deleteProductHandler = () => {
    const gtin = actionParams.gtin;
    dispatch(catalogActions.deleteProduct(gtin));
    cancelDeleteHandler();
    dispatch(catalogActions.setCatalogStorage());
  };

  const cancelHandler = () => {
    const { action } = actionParams;
    if (action === 'activate') cancelActivateHandler();
    if (action === 'deactivate') cancelDeactivateHandler();
    if (action === 'publish') cancelPublishHandler();
    if (action === 'delete') cancelDeleteHandler();
  };

  const cancelSubHandler = (event) => {
    event.preventDefault();
    setSelectSubscriber(null);
    setShowChooseSubscriber(false);
  };

  const confirmActivateFooter = useConfirmModalFooter(
    activeStatusHandler,
    cancelHandler,
    'Activate',
    'Cancel'
  );
  const confirmDeactivateFooter = useConfirmModalFooter(
    activeStatusHandler,
    cancelHandler,
    'Deactivate',
    'Cancel'
  );
  const confirmPublishFooter = useConfirmModalFooter(
    publishProductHandler,
    cancelHandler,
    'Publish',
    'Cancel'
  );
  const confirmDeleteFooter = useConfirmModalFooter(
    deleteProductHandler,
    cancelHandler,
    'Delete',
    'Cancel'
  );

  // const setSelectSubscriberHandler = subscriber => {
  //   setSelectSubscriber(subscriber);
  //   const gtin = actionParams.gtin;
  //   const custId = selectSubscriber.subscriber;
  //   console.log(subscriber);
  //   console.log(catalog.find(item => item.gtin === gtin));
  // };

  const selectSubsciberForm = (
    <div className={classes.subscribers}>
      <form onSubmit={showConfirmPublishHandler}>
        <div className={classes['form-container']}>
          <FormInput
            // key={product ? product.category : 'category'}
            id="subscriber"
            element="select"
            selectOptions={customerList}
            label="Subscriber"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a subscriber"
            // selected={product ? product.category : ''}
            initialValid={false}
            onInput={inputHandler}
            setSelectOption={setSelectSubscriber}
          />
          <div className={classes.buttons}>
            <div>
              <Button
                inverse
                onClick={cancelSubHandler}
                // onClick={event => {
                //   event.preventDefault();
                //   setShowChooseSubscriber(false);
                // }}
              >
                Cancel
              </Button>
            </div>
            <div style={{ marginLeft: '1rem' }}>
              <Button
                inverse
                type="submit"
                disabled={!formState.isValid || alreadySubbed}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
      <div>
        {alreadySubbed && <p>Product already published to Customer!</p>}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <input
        className={classes.search}
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      />

      <Modal
        show={showChooseSubscriber}
        onClear={cancelSubscriberHandler}
        msgHeader={`Choose Subscriber to receive Publication`}
      >
        <p>
          <strong>{`Item: `}</strong>
          {actionParams && actionParams.itemName}
        </p>
        <p>
          <strong>{`GTIN: `}</strong>
          {actionParams && actionParams.gtin}
        </p>
        <div>{selectSubsciberForm}</div>
      </Modal>

      <Modal
        show={showConfirmPublish}
        onClear={cancelPublishHandler}
        msgHeader="Confirm Product Publication"
        footer={confirmPublishFooter}
      >
        <p>Are you sure you want to publish this product?</p>
        <br />
        <p>
          <strong>{`Item: `}</strong>
          {actionParams && actionParams.itemName}
        </p>
        <p>
          <strong>{`GTIN: `}</strong>
          {actionParams && actionParams.gtin}
        </p>
        <p>
          <strong>{`Customer: `}</strong>
          {customerName && customerName}
        </p>
        <p>
          <strong>{`Customer ID: `}</strong>
          {selectSubscriber && selectSubscriber.subscriber}
        </p>
        {/* {alreadySubbed && <p>Product already published to Customer!</p>} */}
      </Modal>

      <Modal
        show={showConfirmActivate}
        onClear={cancelActivateHandler}
        msgHeader="Confirm Product Activation"
        footer={confirmActivateFooter}
      >
        <p>Are you sure you want to Activate this product?</p>
        <p>
          <strong>{`Item: `}</strong>
          {actionParams && actionParams.itemName}
        </p>
        <p>
          <strong>{`GTIN: `}</strong>
          {actionParams && actionParams.gtin}
        </p>
      </Modal>

      <Modal
        show={showConfirmDeactivate}
        onClear={cancelDeactivateHandler}
        msgHeader="Confirm Product Deactivation"
        footer={confirmDeactivateFooter}
      >
        <p>Are you sure you want to deactivate this product?</p>
        <p>
          <strong>{`Item: `}</strong>
          {actionParams && actionParams.itemName}
        </p>
        <p>
          <strong>{`GTIN: `}</strong>
          {actionParams && actionParams.gtin}
        </p>
      </Modal>

      <Modal
        show={showConfirmDelete}
        onClear={cancelDeleteHandler}
        msgHeader="Confirm Product Deletion"
        footer={confirmDeleteFooter}
      >
        <p>Are you sure you want to PERMANENTLY DELETE this product?</p>
        <p>
          <strong>{`Item: `}</strong>
          {actionParams && actionParams.itemName}
        </p>
        <p>
          <strong>{`GTIN: `}</strong>
          {actionParams && actionParams.gtin}
        </p>
      </Modal>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => {
            if (i === 0) {
              return null;
            } else {
              return (
                <tr
                  key={i}
                  className={classes.headers}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={i}
                      className={classes.header}
                      {...column.getHeaderProps(column.getSortByToggleProps(), {
                        style: {
                          width: column.width,
                        },
                      })}
                    >
                      <div className={classes.arrow}>
                        {column.render('Header')}
                        <ion-icon
                          size="small"
                          src={
                            column.isSorted
                              ? column.isSortedDesc
                                ? '/icons/caret-down-outline.svg'
                                : '/icons/caret-up-outline.svg'
                              : ''
                          }
                        ></ion-icon>
                      </div>
                    </th>
                  ))}
                </tr>
              );
            }
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            // only render items on the current page
            if (
              rowIndex >= pageSize * pageIndex &&
              rowIndex + 1 <= pageSize * (pageIndex + 1)
            ) {
              // This line is necessary to prepare the rows and get the row props from react-table dynamically
              prepareRow(row);

              return (
                <tr
                  key={rowIndex}
                  className={classes.row}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => {
                    let type = {};
                    let category = {};

                    if (cell.column.Header === 'Type') {
                      type = typeOptions.filter(
                        (type) => type.id === +cell.value
                      )[0];
                    }
                    if (cell.column.Header === 'Category') {
                      category = categoryOptions.filter(
                        (category) => category.id === +cell.value
                      )[0];
                    }

                    if (cell.column.accessor) {
                      return (
                        <td
                          key={i}
                          {...cell.getCellProps({
                            style: {
                              width: cell.column.width,
                            },
                          })}
                        >
                          {cell.column.Header === 'Image' && (
                            <div className={classes.thumbnail}>
                              <img
                                src={`${process.env.REACT_APP_BACKEND_URL}/${cell.value}`}
                                alt={cell.value}
                              />
                            </div>
                          )}
                          {cell.column.Header === 'Type' && type.name}
                          {cell.column.Header === 'Category' && category.name}
                          {/* {cell.column.Header === 'Created' && dateString} */}
                          {cell.column.Header !== 'Image' &&
                            cell.column.Header !== 'Type' &&
                            cell.column.Header !== 'Category' &&
                            cell.render('Cell')}
                        </td>
                      );
                    } else if (cell.column.Header === 'Index') {
                      return <td key={i}>{rowIndex + 1}</td>;
                    } else {
                      return (
                        <td key={i}>
                          <div className={classes.buttons}>
                            {status !== 'inactive' && (
                              <>
                                <Button
                                  to={`/products/${cell.row.original.gtin}`}
                                  action
                                >
                                  <span title="edit">
                                    <ion-icon
                                      size="small"
                                      src="/icons/build-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                                <Button
                                  onClick={() => {
                                    productActionHandler(
                                      cell.row.original.gtin,
                                      'publish'
                                    );
                                  }}
                                  action
                                >
                                  <span title="publish">
                                    <ion-icon
                                      size="small"
                                      src="/icons/exit-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                                <Button
                                  onClick={() => {
                                    productActionHandler(
                                      cell.row.original.gtin,
                                      'deactivate'
                                    );
                                  }}
                                  action
                                >
                                  <span title="deactivate">
                                    <ion-icon
                                      size="small"
                                      src="/icons/stop-circle-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                              </>
                            )}
                            {status === 'inactive' && (
                              <>
                                <Button
                                  onClick={() => {
                                    productActionHandler(
                                      cell.row.original.gtin,
                                      'activate'
                                    );
                                  }}
                                  action
                                >
                                  <span title="reactivate">
                                    <ion-icon
                                      size="small"
                                      src="/icons/play-circle-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                                <Button
                                  onClick={() => {
                                    productActionHandler(
                                      cell.row.original.gtin,
                                      'delete'
                                    );
                                  }}
                                  action
                                >
                                  <span title="permanent delete">
                                    <ion-icon
                                      size="small"
                                      src="/icons/trash-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                              </>
                            )}
                          </div>
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
};

export default ProductsTable;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';
import { useForm } from '../shared/components/hooks/form-hook';
import FormInput from '../shared/components/FormElements/FormInput';

import { catalogActions } from '../../src/store/catalog-slice';
import {useConfirmationModal, useModalFooter } from '../../src/shared/components/hooks/confirmation-hook';

import { customers } from '../assets/data/customers-data';
import { categoryOptions, typeOptions } from '../assets/data/test-catalog';
import { VALIDATOR_REQUIRE } from '../shared/utilities/validators';
import classes from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const [filterInput, setFilterInput] = useState('');
  const [actionParams, setActionParams] = useState();
  const [selectSubscriber, setSelectSubscriber] = useState();

  const dispatch = useDispatch();
  const { columns, data, status } = props;

  // Format customer list for select element:
  const customerList = [{ id: '', name: '' }];
  customers.forEach((cust) => customerList.push(cust));

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
    showConfirmationHandler: showConfirmActivateHandler,
    cancelConfirmationHandler: cancelActivateHandler,
  } = useConfirmationModal();

  const {
    showConfirmation: showConfirmDeactivate,
    setShowConfirmation: setShowConfirmDeactivate,
    showConfirmationHandler: showConfirmDeactivateHandler,
    cancelConfirmationHandler: cancelDeactivateHandler,
  } = useConfirmationModal();

  const {
    showConfirmation: showConfirmPublish,
    setShowConfirmation: setShowConfirmPublish,
    showConfirmationHandler: showConfirmPublishHandler,
    cancelConfirmationHandler: cancelPublishHandler,
  } = useConfirmationModal();
  
  const {
    showConfirmation: showChooseSubscriber,
    setShowConfirmation: setShowChooseSubscriber,
    showConfirmationHandler: showChooseSubscriberHandler,
    cancelConfirmationHandler: cancelSubscriberHandler,
    // confirmModalFooter: chooseSubscriberFooter,
  } = useConfirmationModal();
  
  const {
    showConfirmation: showConfirmDelete,
    setShowConfirmation: setShowConfirmDelete,
    showConfirmationHandler: showConfirmDeleteHandler,
    cancelConfirmationHandler: cancelDeleteHandler,
  } = useConfirmationModal();
  
  console.log(
    selectSubscriber,
    showConfirmDeactivateHandler,
    setShowConfirmPublish,
    showChooseSubscriberHandler
  );

  // const chooseSubHandler = (product) => {
  //   setActionParams({ gtin: product });
  //   // setShowConfirmPublish(true);
  //   setShowChooseSubscriber(true);
  // };

  const productActionHandler = (product, action) => {
    setActionParams({ gtin: product, action: action });
    if (action === 'activate') setShowConfirmActivate(true);
    if (action === 'deactivate') setShowConfirmDeactivate(true);
    if (action === 'publish') setShowChooseSubscriber(true);
    if (action === 'delete') setShowConfirmDelete(true);
  };

  // const deleteProductHandler = (gtin) => {
  //   dispatch(catalogActions.deleteProduct(gtin));
  // };

  const publishProductHandler = () => {
    console.log('actionParams: ', actionParams);
    const gtin = actionParams.gtin;
    const custId = selectSubscriber.subscriber;
    console.log(gtin, custId);
    dispatch(catalogActions.addSubscriber({ gtin, custId }));
    cancelPublishHandler();
    setShowChooseSubscriber(false);
    dispatch(catalogActions.setCatalogStorage());
    console.log('Product Published!');
  };

  const activeStatusHandler = () => {
    // setActionParams({ gtin: product, status: activeStatus });
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
    // status === 'deactivate' && cancelDeactivateHandler();
  };

  const deleteProductHandler = () => {
    const gtin = actionParams.gtin;
    dispatch(catalogActions.deleteProduct(gtin));
    cancelDeleteHandler();
  };

  const cancelHandler = () => {
    const { action } = actionParams;
    if (action === 'activate') cancelActivateHandler();
    if (action === 'deactivate') cancelDeactivateHandler();
    if (action === 'publish') cancelPublishHandler();
    if (action === 'delete') cancelDeleteHandler();
  };

  const publishFooter = (
    <React.Fragment>
      <Button danger onClick={cancelHandler}>
        Cancel
      </Button>
      <Button onClick={publishProductHandler}>Publish</Button>
    </React.Fragment>
  );
  const activateFooter = (
    <React.Fragment>
      <Button danger onClick={cancelHandler}>
        Cancel
      </Button>
      <Button onClick={activeStatusHandler}>Activate</Button>
    </React.Fragment>
  );
  const deactivateFooter = (
    <React.Fragment>
      <Button danger onClick={cancelHandler}>
        Cancel
      </Button>
      <Button onClick={activeStatusHandler}>Deactivate</Button>
    </React.Fragment>
  );
  const deleteFooter = (
    <React.Fragment>
      <Button danger onClick={cancelHandler}>
        Cancel
      </Button>
      <Button onClick={deleteProductHandler}>Delete</Button>
    </React.Fragment>
  );

  // console.log('actionParams: ', actionParams);
  // console.log('selectOptionValue: ', selectSubscriber);

  const selectSubsciberForm = (
    <form
      onSubmit={showConfirmPublishHandler}
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      <FormInput
        // key={product ? product.category : 'category'}
        id="subscriber"
        element="select"
        selectOptions={customerList}
        label="Subscriber"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please select a category"
        // selected={product ? product.category : ''}
        initialValid={false}
        onInput={inputHandler}
        setSelectOption={setSelectSubscriber}
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div>
          <Button
            inverse
            onClick={(event) => {
              event.preventDefault();
              setShowChooseSubscriber(false);
            }}
          >
            Cancel
          </Button>
        </div>
        <div style={{ marginLeft: '1rem' }}>
          <Button inverse type="submit" disabled={!formState.isValid}>
            Next
          </Button>
        </div>
      </div>
    </form>
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
        // footer={chooseSubscriberFooter}
      >
        <div>{`Item: ${actionParams && actionParams.gtin}`}</div>
        <div>{selectSubsciberForm}</div>
      </Modal>

      <Modal
        show={showConfirmPublish}
        onClear={cancelPublishHandler}
        msgHeader="Confirm Publication"
        footer={publishFooter}
      >
        <p>Are you sure you want to publish this product?</p>
        <p>
          <strong>GTIN:</strong> {actionParams && actionParams.gtin}
        </p>
        <p>
          <strong>Customer:</strong>{' '}
          {selectSubscriber && selectSubscriber.subscriber}
        </p>
      </Modal>

      <Modal
        show={showConfirmActivate}
        onClear={cancelActivateHandler}
        msgHeader="Confirm Activation"
        footer={activateFooter}
      >
        <p>Are you sure you want to Activate this product?</p>
        <p>GTIN: {actionParams && actionParams.gtin}</p>
      </Modal>

      <Modal
        show={showConfirmDeactivate}
        onClear={cancelDeactivateHandler}
        msgHeader="Confirm Deactivation"
        footer={deactivateFooter}
      >
        <p>Are you sure you want to deactivate this product?</p>
        <p>GTIN: {actionParams && actionParams.gtin}</p>
      </Modal>
      
      <Modal
        show={showConfirmDelete}
        onClear={cancelDeleteHandler}
        msgHeader="Confirm Deletion"
        footer={deleteFooter}
      >
        <p>Are you sure you want to PERMANENTLY DELETE this product?</p>
        <p>GTIN: {actionParams && actionParams.gtin}</p>
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
                    // console.log('cell: ', cell);
                    let type = {};
                    let category = {};
                    if (cell.column.Header === 'Type') {
                      console.log('Type cell value: ', cell.value);
                      type = typeOptions.filter(
                        (type) => type.id === +cell.value
                      )[0];
                      console.log('type: ', type.name);
                    }
                    if (cell.column.Header === 'Category') {
                      console.log('Category cell value: ', cell.value);
                      category = categoryOptions.filter(
                        (category) => category.id === +cell.value
                      )[0];
                      console.log('category: ', category.name);
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
                              <img src={cell.value} alt={cell.value} />
                            </div>
                          )}
                          {cell.column.Header === 'Type' && type.name}
                          {cell.column.Header === 'Category' && category.name}
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

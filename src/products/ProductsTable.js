import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import Button from '../shared/UIElements/Button';
import Modal from '../shared/UIElements/Modal';
import FormInput from '../shared/components/FormElements/FormInput';

import { catalogActions } from '../../src/store/catalog-slice';
import useConfirmationModal from '../../src/shared/components/hooks/confirmation-hook';

import {
  VALIDATOR_REQUIRE,
} from '../shared/utilities/validators';
import classes from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const [filterInput, setFilterInput] = useState('');

  const subscriberOptions = [
    '',
    '1111111 Amazon',
    '2222222 Walmart',
    '3333333 Kroger',
    '4444444 Safeway',
    '5555555 Albertsons',
    '6666666 Best Buy',
  ];

  const { columns, data, status } = props;
  const dispatch = useDispatch();

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

  const [actionParams, setActionParams] = useState();

  const deleteProductHandler = (gtin) => {
    dispatch(catalogActions.deleteProduct(gtin));
  };

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
    confirmModalFooter: chooseSubscriberFooter,
  } = useConfirmationModal(showConfirmPublishHandler, 'Next', 'Cancel');

  console.log(showConfirmDeactivateHandler);
  console.log(showConfirmPublishHandler);

  const publishActionHandler = (product, status) => {
    setActionParams({ gtin: product, status: status });
    // setShowConfirmPublish(true);
    setShowChooseSubscriber(true);
  };
  const deactivateActionHandler = (product, status) => {
    setActionParams({ gtin: product, status: status });
    setShowConfirmDeactivate(true);
  };
  
  const publishProductHandler = () => {
    const gtin = actionParams.gtin;
    const status = actionParams.status;
    // dispatch(catalogActions.toggleProductActive({ gtin, status }));
    cancelPublishHandler();
    setShowChooseSubscriber(false);
  };
  const activeStatusHandler = () => {
    const gtin = actionParams.gtin;
    const status = actionParams.status;
    dispatch(catalogActions.toggleProductActive({ gtin, status }));
    cancelDeactivateHandler();
  };

  const selectSubscriberHandler = (custId) => {
    setActionParams((prev) => {
      return { ...prev, customer: custId };
    });
  };

  const publishFooter = (
    <React.Fragment>
      <Button danger onClick={cancelPublishHandler}>
        Cancel
      </Button>
      <Button onClick={publishProductHandler}>Publish</Button>
    </React.Fragment>
  );
  const deactivateFooter = (
    <React.Fragment>
      <Button danger onClick={cancelDeactivateHandler}>
        Cancel
      </Button>
      <Button onClick={activeStatusHandler}>Deactivate</Button>
    </React.Fragment>
  );

  console.log('actionParams: ', actionParams);

  return (
    <React.Fragment>
      <input
        className={classes.search}
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      />
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
      <Modal
        show={showChooseSubscriber}
        onClear={cancelSubscriberHandler}
        msgHeader={`Choose Subscriber to receive Publication`}
        footer={chooseSubscriberFooter}
      >
        <div>{`Item: ${actionParams && actionParams.gtin}`}</div>
        <div>
          <FormInput
            // key={product ? product.category : 'category'}
            id="subscriber"
            element="select"
            selectOptions={subscriberOptions}
            label="Subscriber"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please select a category"
            // selected={product ? product.category : ''}
            initialValid={false}
            onInput={()=>{console.log('select change')}}
            setSelectOption={props.setSelectOption}
          />
          {/* {`Customer: `}
          <select
            onChange={(event) => {
              const value = event.target.value;
              selectSubscriberHandler(value);
            }}
          >
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select> */}
        </div>
      </Modal>

      <Modal
        show={showConfirmPublish}
        onClear={cancelPublishHandler}
        msgHeader="Confirm Publication"
        footer={publishFooter}
      >
        <p>Are you sure you want to publish this product?</p>
        <p>GTIN: {actionParams && actionParams.gtin}</p>
        <p>Customer: {actionParams && actionParams.customer}</p>
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
                          {cell.column.Header !== 'Image' &&
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
                                    publishActionHandler(
                                      cell.row.original.gtin,
                                      'deactivate'
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
                                    deactivateActionHandler(
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
                                    activeStatusHandler(
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
                                    deleteProductHandler(
                                      cell.row.original.gtin
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

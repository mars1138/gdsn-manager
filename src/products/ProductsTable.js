import React, { useState } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import Button from '../shared/UIElements/Button';

import classes from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const [filterInput, setFilterInput] = useState('');

  const { columns, data, status } = props;

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

  return (
    <React.Fragment>
      <input
        className={classes.search}
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={'Search name'}
      />
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
          {rows.map((row, i) => {
            // only render items on the current page
            if (
              i >= pageSize * pageIndex &&
              i + 1 <= pageSize * (pageIndex + 1)
            ) {
              // This line is necessary to prepare the rows and get the row props from react-table dynamically
              prepareRow(row);

              return (
                <tr key={i} className={classes.row} {...row.getRowProps()}>
                  {row.cells.map((cell, i) => {
                    // console.log('cell: ', cell);
                    if (cell.column.accessor) {
                      return (
                        <td
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
                                  to={`/products/${cell.row.original.gtin}`}
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
                                  to={`/products/${cell.row.original.gtin}`}
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
                                  action
                                  to={`/products/${cell.row.original.gtin}`}
                                >
                                  <span title="reactivate">
                                    <ion-icon
                                      size="small"
                                      src="/icons/play-circle-outline.svg"
                                    ></ion-icon>
                                  </span>
                                </Button>
                                <Button
                                  to={`/products/${cell.row.original.gtin}`}
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

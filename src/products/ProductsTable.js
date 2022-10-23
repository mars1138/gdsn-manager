import React, { useState } from 'react';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import Button from '../shared/UIElements/Button';

import classes from './ProductsTable.module.css';

const ProductsTable = (props) => {
  const [filterInput, setFilterInput] = useState('');

  const { columns, data } = props;

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
      initialState: { pageIndex: 0, pageSize: 5 },
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
          {headerGroups.map((headerGroup) => (
            <tr
              className={classes.headers}
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th
                  className={classes.header}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <div className={classes.arrow}>
                    <ion-icon
                      size="small"
                      src={
                        column.isSorted
                          ? column.isSortedDesc
                            ? '/caret-down-outline.svg'
                            : '/caret-up-outline.svg'
                          : ''
                      }
                    ></ion-icon>
                  </div>
                </th>
              ))}
            </tr>
          ))}
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
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    console.log('cell: ', cell);
                    if (cell.column.accessor) {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    } else {
                      return (
                        <td>
                          <div className={classes.buttons}>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
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

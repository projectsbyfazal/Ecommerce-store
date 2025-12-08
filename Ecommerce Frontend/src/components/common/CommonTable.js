"use client";
import React, { useMemo } from "react";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  useFilters,
  useExpanded,
  usePagination,
} from "react-table";
import SearchFilter from "./SearchFilter";
import { generateSortingIndicator } from "@/lib/helper";

const CommonTable = ({
  column_data = {},
  data,
  heading = "Records",
  isResizeTable = true,
  searchBar = true,
  headerHtml = false,
  children,
}) => {
  const columns = useMemo(
    () => column_data?.columns,
    column_data?.dependencies
  );

  // main table initialization
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 25,
        sortBy: [
          {
            desc: true,
          },
        ],
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination
  );

  const onChangeInSelect = (event) => {
    setPageSize(Number(event.target.value));
  };

  return (
    <div>
      <div className="mb-3 d-flex justify-content-between align-items-center flex-md-row flex-column-reverse">
        <div>
          <h5 className="fw-bold text-capitalize">{heading}</h5>
        </div>
        <div className="d-flex justify-content-end custom-form">
          <div>
            {searchBar ? (
              <SearchFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
            ) : null}
          </div>

          {isResizeTable && (
            <div className="ms-3">
              <select
                className="form-select lh-m"
                value={pageSize}
                onChange={onChangeInSelect}
              >
                {[25, 50, 100, 200].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </div>
          )}

          {children}
        </div>
      </div>

      <div className="table-responsive fixed-table-header">
        {/* <table
          {...getTableProps()}
          className="w-800 responsive-table table bordered"
          style={{ verticalAlign: "middle" }}
        >
          <thead className=" table-header table-danger">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} className={column.className}>
                    <div
                      {...column.getSortByToggleProps()}
                      className="justify-content-between d-flex align-items-center"
                    >
                      {column.render("Header") || headerHtml}
                      {column.disableSort
                        ? null
                        : generateSortingIndicator(column)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Fragment key={row.getRowProps().key}>
                  <tr className="row-hover">
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className={cell.column.className}
                          data-label={cell.column.Header}
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                </Fragment>
              );
            })}

            {page.length === 0 && (
              <tr>
                <td
                  colSpan={columns?.length}
                  className="text-center text-capitalize"
                >
                  No Record Found!
                </td>
              </tr>
            )}
          </tbody>
        </table> */}
        <table
          {...getTableProps()}
          className="table table-bordered table-hover w-100"
          style={{ verticalAlign: "middle" }}
        >
          <thead className="table-header table-danger">
            {headerGroups.map((headerGroup) => (
              <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th key={column.id} className={column.className}>
                    <div
                      {...column.getSortByToggleProps()}
                      className="d-flex justify-content-between align-items-center"
                    >
                      {column.render("Header")}
                      {!column.disableSort && generateSortingIndicator(column)}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              const { key, ...restRowProps } = row.getRowProps();
              return (
                <tr key={key} {...restRowProps} className="row-hover">
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...restCellProps } =
                      cell.getCellProps();
                    return (
                      <td
                        key={cellKey}
                        {...restCellProps}
                        className={cell.column.className}
                        data-label={cell.column.Header}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}

            {page.length === 0 && (
              <tr>
                <td
                  colSpan={columns?.length}
                  className="text-center text-capitalize"
                >
                  No Record Found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="row justify-content-md-end justify-content-center align-items-center mt-3">
        <div className="col-md-auto">
          <div className="d-flex gap-1">
            <button
              className="bg-blue btn"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {"<<"}
            </button>
            <button
              className="bg-blue btn"
              onClick={previousPage}
              disabled={!canPreviousPage}
            >
              {"<"}
            </button>
          </div>
        </div>
        <div className="col-md-auto d-none d-md-block">
          Page{" "}
          <strong>
            {pageOptions.length ? pageIndex + 1 : pageIndex} of{" "}
            {pageOptions.length}
          </strong>
        </div>

        <div className="col-md-auto">
          <div className="d-flex gap-1">
            <button
              className="bg-blue btn"
              onClick={nextPage}
              disabled={!canNextPage}
            >
              {">"}
            </button>
            <button
              className="bg-blue btn"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTable;

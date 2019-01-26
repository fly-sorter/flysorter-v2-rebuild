import React from 'react';
// import { render } from 'react-dom';
import matchSorter from 'match-sorter';
import { makeData, Tips } from './utils';
import _ from 'lodash';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'Name',
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'ID',
        accessor: 'part_id',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_id'] }),
        filterAll: true,
      },
      {
        Header: 'Description',
        accessor: 'part_desc',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_desc'] }),
        filterAll: true,
      },
      {
        Header: 'Subpart?',
        accessor: 'part_sub',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_sub'] }),
        filterAll: true,
      },
      {
        Header: 'Source',
        accessor: 'part_src',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_src'] }),
        filterAll: true,
      },
      {
        Header: 'Manufacture Part Number',
        accessor: 'part_mfgnum',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_mfgnum'] }),
        filterAll: true,
      },
      {
        Header: 'Price',
        accessor: 'part_price',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_price'] }),
        filterAll: true,
      },
      {
        Header: 'Category ID',
        accessor: 'part_category',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_category'] }),
        filterAll: true,
      },
      {
        Header: 'Location ID',
        accessor: 'part_location',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_location'] }),
        filterAll: true,
      },
      {
        Header: 'Part Count',
        accessor: 'part_count',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_count'] }),
        filterAll: true,
      },
      {
        Header: 'Long lead?',
        accessor: 'part_longlead',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_longlead'] }),
        filterAll: true,
      },
      {
        Header: 'Notes',
        accessor: 'part_notes',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['part_notes'] }),
        filterAll: true,
      },
      {
        Header: 'Last Name',
        id: 'lastName',
        accessor: d => d.lastName,
      },
    ],
  },
  {
    Header: 'Info',
    columns: [
      {
        Header: 'Age',
        accessor: 'age',
        aggregate: vals => _.round(_.mean(vals)),
        Aggregated: row => {
          return (
            <span>
              {row.value} (avg)
            </span>
          );
        },
        filterMethod: (filter, row) =>
          filter.value === `${row[filter.id]} (avg)`,
      },
      {
        Header: 'Visits',
        accessor: 'visits',
        aggregate: vals => _.sum(vals),
        filterable: false,
      },
    ],
  },
];

export default class Parts extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          className='parts-table'
          data={data}
          columns={columns}
          defaultPageSize={10}
          pivotBy={['firstName', 'lastName']}
          filterable
          SubComponent={row => {
            return (
              <div style={{ padding: '20px' }}>
                <em>
                  You can put any component you want here, even another React
                  Table!
                </em>
                <br />
                <br />
                <ReactTable
                  data={data}
                  columns={columns}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: '20px' }}>Sub Component!</div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
        <br />
        <Tips />
      </div>
    );
  }
}
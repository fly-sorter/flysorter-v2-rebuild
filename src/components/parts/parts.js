import React from 'react';
import { render } from 'react-dom';
import { makeData } from './utils';
import matchSorter from 'match-sorter';
import './parts.css';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
  {
    Header: 'Parts',
    columns: [
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
        Header: 'Mfr. Part #',
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
          filterable
          data={data}
          columns={columns}
          defaultPageSize={25}
          style={{
            height: '670px',
          }}
          className="-striped -highlight parts-table"
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
                  className='parts-table'
                  data={data}
                  columns={columns}
                  filterable
                  defaultPageSize={5}
                  showPagination={false}
                  SubComponent={row => {
                    return (
                      <div style={{ padding: '20px' }}>
                        Another Sub Component!
                      </div>
                    );
                  }}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}







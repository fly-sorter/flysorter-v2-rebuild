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
      },
      {
        Header: 'Description',
        accessor: 'part_desc',
      },
      {
        Header: 'Subpart?',
        accessor: 'part_sub',
      },
      {
        Header: 'Source',
        accessor: 'part_src',
      },
      {
        Header: 'Mfr. Part #',
        accessor: 'part_mfgnum',
      },
      {
        Header: 'Price',
        accessor: 'part_price',
      },
      {
        Header: 'Category ID',
        accessor: 'part_category',
      },
      {
        Header: 'Location ID',
        accessor: 'part_location',
      },
      {
        Header: 'Part Count',
        accessor: 'part_count',
      },
      {
        Header: 'Long lead?',
        accessor: 'part_longlead',
      },
      {
        Header: 'Notes',
        accessor: 'part_notes',
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
          className="-striped -highlight parts-table"
          columns={columns}
          data={data}
          defaultPageSize={25}
          filterMethod={(filter, rows) => {
            return matchSorter(rows, filter.value);
          }}
          filterable
          style={{
            height: '670px',
          }}
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
                  columns={columns}
                  data={data}
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







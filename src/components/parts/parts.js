import React from 'react';
// import { makeData } from './utils';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/parts-actions.js';
import EditPart from '../edit-part/edit-part.js';
import Save from '../save/save.js';
import Delete from '../delete/delete.js'
import './parts.css';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Parts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      selected: null,
    }
  };

  componentDidMount = () => {
    this.props.getParts();
  }

  renderEditable = (rowInfo) => {
    // console.log(rowInfo.original.part_desc, 'rowInfo')
    if (this.props.edit.edit === true) {
      return (
        <div
          contentEditable
          suppressContentEditableWarning
          onBlur={e => {
            const data = this.props.parts.parts.map(el => { return el });
            data[rowInfo.index][rowInfo.column.id] = e.target.innerHTML;

          }}
        >{rowInfo.original.part_desc}</div>
      );
    }
    return <div>{rowInfo.original.part_desc}</div>;
  }

  render() {

    const data = this.props.parts.parts.map(element => {
      element.edit = <EditPart />
      element.save = <Save />
      element.delete = <Delete />
      return element;
    });

    return (
      <div>
        <button onClick={() => this.setState({ filtered: [] })}>Reset Filters</button>
        <ReactTable
          className="-striped -highlight parts-table"
          /* getTrProps={(state, rowInfo) => {
            if (rowInfo && rowInfo.row) {
              return {
                onClick: (e) => {
                  this.setState({
                    selected: rowInfo.index
                  })
                },
                style: {
                  background: rowInfo.index === this.state.selected ? 'lightgreen' : 'white',
                },
              }
            } else {
              return {}
            }
          }} */

          columns={[
            {
              Header: 'Parts',

              columns: [
                {
                  Header: 'ID',
                  accessor: 'part_id',
                  width: 90,
                },
                {
                  Header: 'Description',
                  accessor: 'part_desc',
                  Cell: this.renderEditable
                },
                {
                  Header: 'Assembly',
                  accessor: 'part_sub',
                  width: 100,
                },
                {
                  Header: 'Source',
                  accessor: 'part_src',

                },
                {
                  Header: 'Mfg/Dist Part #',
                  accessor: 'part_mfgnum',
                },
                {
                  Header: 'Price',
                  accessor: 'part_price',
                  width: 90,
                },
                {
                  Header: 'Category ID',
                  accessor: 'part_category',
                  width: 100,
                },
                {
                  Header: 'Location ID',
                  accessor: 'part_location',
                  width: 100,
                },
                {
                  Header: 'Qty In Stock',
                  accessor: 'part_count',
                  width: 100,
                },
                {
                  Header: 'Lead time (W)',
                  accessor: 'part_longlead',
                },
                {
                  Header: 'Notes',
                  accessor: 'part_notes',
                },
              ],
            },
            {
              Header: 'Actions',

              columns: [
                {
                  Header: 'Edit',
                  accessor: 'edit',
                  width: 50,
                  filterable: false,
                },
                {
                  Header: 'Save',
                  accessor: 'save',
                  width: 50,
                  filterable: false,
                },
                {
                  Header: 'Delete',
                  accessor: 'delete',
                  width: 70,
                  filterable: false,
                },
              ],
            },
          ]}
          data={data}
          defaultPageSize={25}
          filtered={this.state.filtered}
          filterable={true}
          onFilteredChange={filtered => { this.setState({ filtered }); }}
          sorted={[{
            id: 'part_id',
            asc: true,
          }]}
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
                  columns={[
                    {
                      Header: 'Parts',

                      columns: [
                        {
                          Header: 'ID',
                          accessor: 'part_id',
                          width: 90,
                        },
                        {
                          Header: 'Description',
                          accessor: 'part_desc',
                        },
                        {
                          Header: 'Assembly',
                          accessor: 'part_sub',
                          width: 100,
                        },
                        {
                          Header: 'Source',
                          accessor: 'part_src',
                        },
                        {
                          Header: 'Mfg/Dist Part #',
                          accessor: 'part_mfgnum',
                        },
                        {
                          Header: 'Price',
                          accessor: 'part_price',
                          width: 90,
                        },
                        {
                          Header: 'Category ID',
                          accessor: 'part_category',
                          width: 100,
                        },
                        {
                          Header: 'Location ID',
                          accessor: 'part_location',
                          width: 100,
                        },
                        {
                          Header: 'Qty In Stock',
                          accessor: 'part_count',
                          width: 100,
                        },
                        {
                          Header: 'Lead time (W)',
                          accessor: 'part_longlead',
                        },
                        {
                          Header: 'Notes',
                          accessor: 'part_notes',
                        },
                      ],
                    },
                    {
                      Header: 'Actions',

                      columns: [
                        {
                          Header: 'Edit',
                          accessor: 'edit',
                          width: 50,
                          filterable: false,
                        },
                        {
                          Header: 'Save',
                          accessor: 'save',
                          width: 50,
                          filterable: false,
                        },
                        {
                          Header: 'Delete',
                          accessor: 'delete',
                          width: 70,
                          filterable: false,
                        },
                      ],
                    },
                  ]}
                  data={data}
                  filterable={false}
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

const mapStateToProps = state => ({
  parts: state.parts,
  edit: state.edit,
});

const mapDispatchToProps = (dispatch, getState) => ({
  getParts: () => dispatch(actions.getParts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Parts);






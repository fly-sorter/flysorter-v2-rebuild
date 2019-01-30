import React from 'react';
import { render } from 'react-dom';
// import { makeData } from './utils';
import matchSorter from 'match-sorter';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/parts-actions.js';
import EditPart from '../edit-part/edit-part.js';
import Save from '../save/save.js';
import Delete from '../delete/delete.js'

import './parts.css';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';



class Parts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
    }
    // this.editOnClick = this.editOnClick.bind(this);
  };


  componentDidMount = () => {
    this.props.getParts();
  }

  // function renderEditable(cellInfo) {
  //   console.log('test')
  //   return (
  //     <div
  //       style={{ backgroundColor: "#fafafa" }}
  //       contentEditable
  //       suppressContentEditableWarning
  //       onBlur={e => {
  //         const data = this.props.parts.parts;
  //         data[cellInfo.index][cellInfo.column.part_desc] = e.target.innerHTML;
  //         this.setState({ data });
  //       }}
  //     />
  //   );
  // }

  // editOnClick = () => {
  //   this.setState({
  //     editable: true,
  //   })
  // }

  render() {
    const data = this.props.parts.parts.map(element => {
      element.edit = <EditPart />
      element.save = <Save />
      element.delete = <Delete />
      return element;
    });
    console.log(this.props.editable)
    // const columns = this.props.parts.parts;
    return (
      <div>
        <button onClick={() => this.setState({ filtered: [] })}>Reset Filters</button>
        <ReactTable
          className="-striped -highlight parts-table"
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
                  Cell: this.state.editable,
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
                },
                {
                  Header: 'Save',
                  accessor: 'save',
                  width: 50,
                },
                {
                  Header: 'Delete',
                  accessor: 'delete',
                  width: 70,
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
                        },
                        {
                          Header: 'Save',
                          accessor: 'save',
                          width: 50,
                        },
                        {
                          Header: 'Delete',
                          accessor: 'delete',
                          width: 70,
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
  edit: state.editable,
});

const mapDispatchToProps = (dispatch, getState) => ({
  getParts: () => dispatch(actions.getParts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Parts);






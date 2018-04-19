/**
 * @type DownloadFile
 * @desc 下载的历史记录
 * @author Jade
 * @dateTime 2018-04-19
 **/

import React, { Component } from 'react'
import { Table, Icon, Divider } from 'antd';

const columns = [{
        title: 'File name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    }, {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">Delete</a>
                <Divider type="vertical" />
                <a href="javascript:;" className="ant-dropdown-link">
                    Download 
                    {/*<Icon type="down" />*/}
                </a>
            </span>
        ),
    }];


class DownloadFile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        formDate: [],
        // total: 1,
        pagination: {},
    }
  }

  
  componentWillMount(){
    this.getData()
  }
  getData = (params = {}) => {
    //   this.setState({ loading: true });
    let formdate=this.state.formDate;
    const pagination = { ...this.state.pagination };
    const data = [{
        key: '1',
        name: 'John Brown',
        age: 32,
        date: '2018/04/19 12:30',
    }, {
        key: '2',
        name: 'Jim Green',
        age: 42,
        date: '2018/04/18 12:30',
    }, {
        key: '3',
        name: 'Joe Black',
        age: 32,
        date: '2018/04/16 12:30',
    }];
    formdate=data;
    // pagination.total = data.totalCount;
    pagination.total = 30;
    pagination.size = 'small';
    this.setState({
        formDate: formdate,
        // total: formdate.length,
        pagination
    })
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.getData({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  render() {
    function showTotal(total) {
        return `Total ${total} items`;
    }
    return (
        <div>
            <h2>Modify personal information</h2>
            <Table columns={columns} 
                rowKey={record => record.registered}
                dataSource={this.state.formDate} 
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        </div>
    );
  }
}

export default DownloadFile;
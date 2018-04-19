/**
 * @type DataPicker
 * @desc 数据条目选择器
 * @author Jade
 * @dateTime 2018-04-18
 **/

import React, { Component } from 'react'
import { Select } from 'antd';

const Option = Select.Option;


class DataPick extends Component {
  handleChange=(value)=> {
    console.log(`selected ${value}`);
  }
  render() {
    const children = [];
    for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    
    return (
      <div className="search-item">
        <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={this.handleChange}
        >
            {children}
        </Select>
      </div>
    )
  }
}

export default DataPick;
// ReactDOM.render(<InputBox />, mountNode);
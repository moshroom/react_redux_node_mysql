/**
 * @type RadioGroup
 * @desc 单选框
 * @author Jade
 * @dateTime 2018-04-18
 **/

import React, { Component } from 'react'
import { Radio } from 'antd';
const RadioGroup = Radio.Group;


class MyRadioGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
          value: 1,
    }
  }
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  render() {
     return (
        <div className="search-item">
            <RadioGroup name="radiogroup" onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>download the file</Radio>
                <Radio value={2}>send the file to your email</Radio>
            </RadioGroup>
        </div>
    );
  }
}

export default MyRadioGroup;
/**
 * @type DatePicker
 * @desc 日期选择器
 * @author Jade
 * @dateTime 2018-04-18
 **/

import React, { Component } from 'react'
import { Input, Icon } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';

const { MonthPicker, RangePicker } = DatePicker;


class DatePick extends Component {
  onChange=(date, dateString)=> {
    console.log(date, dateString);
  }
  render() {
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    
    return (
      <div className="search-item">
        {/*<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
        <br />
        <MonthPicker defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
        <br />*/}
        <RangePicker
            defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
            format={dateFormat}
            onChange={this.onChange}
        />
      </div>
    )
  }
}

export default DatePick;
// ReactDOM.render(<InputBox />, mountNode);
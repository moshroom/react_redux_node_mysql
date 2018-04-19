/**
 * @type Progress
 * @desc 进度条
 * @author Jade
 * @dateTime 2018-04-18
 **/

import React, { Component } from 'react'
import { Progress, Button } from 'antd';
const ButtonGroup = Button.Group;


class MyProgress extends Component {
  constructor(props){
      super(props)
      this.state = {
          percent: 10,
      }
  }
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    const children = [];
    for (let i = 1; i < 17; i++) {
    children.push(<Option key={'data' + i}>{'data' + i}</Option>);
    }
    
    return (
      <div className="search-item">
        <div className="search-item">
            <Progress percent={this.state.percent} />
            <ButtonGroup>
            <Button onClick={this.decline} icon="minus" />
            <Button onClick={this.increase} icon="plus" />
            </ButtonGroup>
        </div>
        <p>The remaining time: <span>1.2 min</span></p>
      </div>
    )
  }
}

export default MyProgress;
// ReactDOM.render(<InputBox />, mountNode);
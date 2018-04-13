/**
 * @type FormControls Component
 * @desc 输入框
 * @author Jade
 * @dateTime 2018-04-12
 **/

import React, { Component } from 'react'
import { Input, Icon } from 'antd';
// import Icon from '../../Basic/Icon/'
// import './style.less'


class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userName: '',
      value: props.value || null,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value : nextProps.value || null,
        
    })
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    // this.setState({ userName: '' });
    this.props.emitEmpty()
  }
  onChangeUserName = (e) => {
    // this.setState({ userName: e.target.value });
    this.props.onChange(e.target.value)
  }
  render() {
    const { value } = this.state;
    const suffix = this.props.value ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      // <Input
      //   placeholder="Enter your username"
      //   prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      //   style={{width: 300}}
      //   suffix={suffix}
      //   value={userName}
      //   onChange={this.onChangeUserName}
      //   ref={node => this.userNameInput = node}
      // />
      <div>
        <Input
          placeholder={this.props.placeholder}
          prefix={<Icon type={this.props.prefix} style={{ color: 'rgba(0,0,0,.25)' }} />}
          style={{width: 300}}
          suffix={suffix}
          value={value}
          type={this.props.inputType?this.props.inputType:'text'}
          onChange={this.onChangeUserName}
          ref={node => this.userNameInput = node}
        />
      </div>
    );
  }
}

export default InputBox;
// ReactDOM.render(<InputBox />, mountNode);
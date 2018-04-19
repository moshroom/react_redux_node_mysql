/**
 * @type EditProfile
 * @desc 修改用户信息
 * @author Jade
 * @dateTime 2018-04-18
 **/

import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;


class EditPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
        value: 1,
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let that=this
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        
        
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div>
            <h2>Modify personal information</h2>
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                label="userName">
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your user name!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
                        placeholder="Please input your email"
                        />
                    )}
                </FormItem>
                <FormItem
                label="New password">
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit">
                        OK
                    </Button>
                </FormItem>
            </Form>
        </div>
    );
  }
}
const NormalLoginForm = Form.create()(EditPass);

export default NormalLoginForm;
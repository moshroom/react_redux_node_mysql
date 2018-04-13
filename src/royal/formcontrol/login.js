/**
 * @type FormControls 
 * @desc 登陆表单
 * @author Jade
 * @dateTime 2018-04-13
 **/
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import { login, changePassword } from '../../redux/actions/user'

const FormItem = Form.Item;


class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        // this.props.actions.login({
        //         body: {
        //             name: values.userName,
        //             password: values.password,
        //         },
        //         success: () => {
        //             // this.props.actions.replace('/m/page')
        //             console.log('chenggong')
        //         },
        //         error: (message) => {
        //             this.setState({
        //                 checkPass: !this.state.checkPass,
        //             })
        //         }
        //     })
        fetch('http://localhost:3000/api/user/token',
            {  
                method: "POST",  
                body: JSON.stringify(values),  
                headers: {  
                    "Content-type": "application/json; charset=UTF-8"  
                }  //application/x-www-form-urlencoded
            }
        )
            .then(function(response) {
                if (response.status >= 400) {
                    throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(stories) {
                console.log(stories);
            });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a>register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm ;
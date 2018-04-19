/**
 * @type FormControls 
 * @desc 登陆表单
 * @author Jade
 * @dateTime 2018-04-13
 **/
import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';

import { login, changePassword, sendEmail, verifyEmail} from '../../redux/actions/user'

const FormItem = Form.Item;
// import './login.less'

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state={
        userName:'',
        checkPass:true,
        verify: false
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let that=this
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        that.props.actions.verifyEmail({
            body: {
                email: values.userName,
                verifyCode: values.captcha,
            },
            success: () => {
                // this.props.actions.replace('/m/page')
                console.log('chenggong')
                this.login(values)
            },
            error: (message) => {
                this.setState({
                    verify: !this.state.verify,
                })
            }
        })
        
      }
    });
  }
  login=(values)=>{
    this.props.actions.login({
        body: {
            name: values.userName,
            password: values.password,
            verifyCode: values.captcha,
        },
        success: () => {
            this.props.actions.replace('/home')
            console.log('chenggong')
        },
        error: (message) => {
            this.setState({
                checkPass: !this.state.checkPass,
            })
        }
    })
  }
  sendmail = () => {
    let that=this;
    this.props.actions.sendEmail({
      body: {
          userName: that.state.userName
      },
      success: () => {
          // this.props.actions.replace('/m/page')
          console.log('chenggong')
      },
      error: (message) => {
          this.setState({
              checkPass: !this.state.checkPass,
          })
      }
    })
  }
  getEmail = (e) => {
    this.setState({userName:e.target.value})
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} 
            placeholder="Please input your email"
            onChange={this.getEmail} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {
          this.state.verify?
          <FormItem 
            validateStatus="error"
            help="Verification code error, please re-enter."
          >
            <Row gutter={8}>
              <Col span={12}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(
                  <Input/>
                )}
              </Col>
              <Col span={12}>
                <Button onClick={this.sendmail}>Get captcha</Button>
              </Col>
            </Row>
          </FormItem>:
          <FormItem>
          <Row gutter={8}>
            {/*gutter={8}*/}
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input/>
              )}
            </Col>
            <Col span={12}>
              <Button onClick={this.sendmail}>Get captcha</Button>
            </Col>
          </Row>
        </FormItem>
        }
        {/*<FormItem 
          validateStatus={this.state.verify?"error":"success"}
          help={this.state.verify?"Should be combination of numbers & alphabets":null}
        >
          <Row gutter={8}>
            <Col span={12}>
              {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
              })(
                <Input/>
              )}
            </Col>
            <Col span={12}>
              <Button onClick={this.sendmail}>Get captcha</Button>
            </Col>
          </Row>
        </FormItem>*/}
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
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch)
    return {
        actions: bindActionCreators({ replace, login, changePassword, sendEmail, verifyEmail}, dispatch)
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm) ;
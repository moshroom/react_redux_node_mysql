/**
 * @desc 商城入口
 * @author Jafeney <692270687@qq.com>
 * @dateTime 2016-12-23
 **/

import React, { Component } from 'react'

import 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.css'
import './menu.less'
// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { push, replace } from 'react-router-redux'
import { Menu, Icon } from 'antd';



const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sfjmenu extends Component {

    constructor(props) {
        super(props)
        this.state={
            current: 'login',
        }
    }

    componentDidMount() {
        // document.getElementById('page_title').innerHTML = '有福企业内购平台';
        // this.props.actions.getPageNames({})
    }

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    goProfile=(e)=>{

        this.props.actions.replace('/'+e.target.getAttribute('data-key'))
    }
    render() {
        // let { pageNames } = this.props;
        // let error = PureRenderMixin.loadDetection([pageNames])
        // if (error) return error
       
        return (
            <div className="menu-nav">
                <header className="container">
                    <div id="main-logo">
                        <a href="http://sfjtechnologies.com/">
                            <img src={'http://sfjtechnologies.com/wp-content/themes/sfj/img/Logo_SFJTechnologie.png'} alt="SFJ Technologies" />
                        </a>
                    </div>
                    <div id='menu'>
                        <Menu
                            onClick={this.handleClick}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                                <a href="http://sfjtechnologies.com/">
                                    Home
                                </a>
                            </Menu.Item>
                            {
                                this.state.current==='login'?<Menu.Item key="login">
                                    <Link to='/login'>Login</Link>
                                </Menu.Item>:''
                            }
                            {
                                this.state.current==='login'?''
                                :<Menu.Item key="search">
                                    <a href="javascript:void(0);" onClick={this.goProfile} data-key='home'>Search</a>
                                </Menu.Item>
                            }
                            {
                                this.state.current==='login'?''
                                :<Menu.Item key="profile">
                                    <a href="javascript:void(0);" onClick={this.goProfile} data-key='profile'>Profile</a>
                                </Menu.Item>
                            }
                        </Menu>
                    </div>
                   
                </header>
                <div id='sfj_route'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
   
    //push, auth, getPageNames, updateCurrentPage
    return { actions: bindActionCreators({replace}, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sfjmenu)
// mapDispatchToProps
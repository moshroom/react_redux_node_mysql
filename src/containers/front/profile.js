/**
 * @desc 商城主页
 * @author Jafeney <692270687@qq.com>
 * @dateTime 2016-12-23
 **/

import React, { Component } from 'react'
import 'antd/dist/antd.less';
import './style.less'

import EditPass from '../../royal/editPro/editProfile'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
// import PureRenderMixin from '../../mixins/pure-render'
// import { getCarousel } from '../../redux/actions/carousel'
// import { getActivity } from '../../redux/actions/activity'
// import { getProduct } from '../../redux/actions/product'
// import { getShortcut } from '../../redux/actions/shortcut'

import SfjMenu from '../../royal/menu/menu'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state={
            isSearch:false,
        }
    }
   
    render() {
        
        return (
            <div className="profile">
                <SfjMenu></SfjMenu>
                <div className="mask">
                    <div className='login-bg'></div>
                </div>
                <div className='login-item'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="bloc bloc-left"> 
                                    <h1>Profile</h1>
                                    <p>
                                        <strong>user name</strong><br/>
                                       Email: <a href="mailto:info@sfjtechnologies.comm">user.email@email.com</a>
                                    </p> 
                                    <p><botton>edit your profile</botton></p>
                                    <p><botton>check the history of downloaded data files</botton></p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <EditPass></EditPass>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({replace}, dispatch) }//, getCarousel, getActivity, getProduct, getShortcut
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
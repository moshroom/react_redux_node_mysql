/**
 * @desc 商城主页
 * @author Jafeney <692270687@qq.com>
 * @dateTime 2016-12-23
 **/

import React, { Component } from 'react'
import { Icon } from 'antd';
import 'antd/dist/antd.less';
import './style.less'

import EditPass from '../../royal/editPro/editProfile'
import DownloadForm from '../../royal/downloadForm/downloadForm'

// redux
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'
// import PureRenderMixin from '../../mixins/pure-render'
// import { getCarousel } from '../../redux/actions/carousel'
// import { getActivity } from '../../redux/actions/activity'
// import { getProduct } from '../../redux/actions/product'
// import { getShortcut } from '../../redux/actions/shortcut'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state={
            isSearch:false,
            menu: 'download',
        }
    }
    choosePro = (e) =>{
        let clickName;
        if(e.target&&(e.target.nodeName=="SPAN"||e.target.nodeName=="I")){
            clickName=e.target.parentNode.getAttribute('data-key')
        }else if(e.target&&e.target.nodeName=="P"){
            clickName=e.target.getAttribute('data-key')
        }
        this.setState({menu: clickName})
    }
    render() {
        
        return (
            <div className="profile">
                <div className="mask">
                    <div className='login-bg'></div>
                </div>
                <div className='login-item download-log'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="bloc bloc-left"> 
                                    <h1>Profile</h1>
                                    <p className="user-profile">
                                        <strong>user name</strong><br/>
                                       Email: <a href="mailto:info@sfjtechnologies.comm">user.email@email.com</a>
                                    </p> 
                                    <p data-key="profile" onClick={this.choosePro}>
                                        <Icon type="edit" />
                                        <span>edit your profile</span>
                                    </p>
                                    <p data-key="download" onClick={this.choosePro}>
                                        <Icon type="cloud-o" />
                                        <span>check the downloaded files</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="bloc bloc-right">
                                    {
                                        this.state.menu==="download"?
                                        <DownloadForm></DownloadForm>
                                        :<EditPass></EditPass>
                                    }
                                    
                                </div>
                                
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
/**
 * @desc 商城主页
 * @author Jafeney <692270687@qq.com>
 * @dateTime 2016-12-23
 **/

import React, { Component } from 'react'
import 'antd/dist/antd.less';
import './style.less'
// import Carousel from 'antd/lib/carousel'

// import Animation from '../../royal/Other/QueueAnimation/'
//antd
import { Upload, Button, Icon } from 'antd';

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
import DatePicker from '../../royal/datePicker/datePicker'
import DataSelect from '../../royal/dataSelect/dataSelect'
import Progress from '../../royal/Progress/Progress'
import RadioGroup from '../../royal/RadioGroup/RadioGroup'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state={
            isSearch:false,
        }
    }

/**
 *   componentDidMount() {
        let _pid = this.props.currentPage.get('id') || window.localStorage.pid;
        window.localStorage.pid = _pid;
        if (_pid) {
            document.getElementById('page_title').innerHTML = `有福企业内购平台-${this.props.currentPage.get('name')}`;
            this.props.actions.getCarousel({ params: {pid: _pid }})
            this.props.actions.getActivity({ params: {pid: _pid }})
            this.props.actions.getProduct({ params: {pid: _pid }})
            this.props.actions.getShortcut({ params: {pid: _pid }})
        } else {
            this.props.actions.replace('/')
        }
    }

    _renderCarousel(carousels) {
        let _carousels = carousels.get('items');
        if (_carousels.size > 0) {
            return _carousels.map((item)=>
                <div className="banner-box">
                    <img className="banner-img" onClick={()=>this.toPageDetail(item.get('c_link'))} src={item.get('c_img')} />
                </div>
            )
        }
    }

    _renderShortCuts(shortcuts) {
        let _shortcuts = shortcuts.get('items');
        if (_shortcuts.size > 0) {
            return _shortcuts.map((item) =>
                <li className="item" onClick={()=>this.toPageDetail(item.get('s_link'))}>
                    <Icon name={item.get('s_icon')} wrapClass="icon" wrapStyle={{backgroundColor: item.get('s_color')}} />
                    <p className="label">{item.get('s_name')}</p>
                </li>
            )
        }
    }

    _renderProductList(products) {
        let _products = products.get('items');
        if (_products.size > 0) {
            return _products.map((item, idx) => {
                return (
                    <li className="item" onClick={()=>this.toPageDetail(item.get('pt_link'))}>
                        <img className="img" src={item.get('pt_img')} />
                        <p className="name">{item.get('pt_name')}</p>
                        <p className="price">¥{item.get('pt_price')}</p>
                    </li>
                )
            })
        }
    }

    _renderActivityList(activitys) {
        let _activitys = activitys.get('items');
        if (_activitys.size > 0) {
            return _activitys.map((item, idx) => {
                return (
                    <li className="item" onClick={()=>this.toPageDetail(item.get('a_link'))}>
                        <img src={item.get('a_img')} className="img" />
                        <p className="title">
                            <span className="tag">惠</span>
                            <span className="txt">{item.get('a_title')}</span>
                        </p>
                    </li>
                )
            })
        }
    }

    toPageDetail(link) {
        window.location.href = link;
    }
 */

    doSearch=()=>{
        this.setState({isSearch: !this.state.isSearch})
    }

    render() {
        // let { carousel, activity, product, shortcut } = this.props;
        // let error = PureRenderMixin.loadDetection([carousel, activity, product, shortcut]);
        // if (error) return error
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
            defaultFileList: [{
                uid: 1,
                name: 'xxx.png',
                status: 'done',
                reponse: 'Server Error 500',  // custom error message to show
                url: 'http://www.baidu.com/xxx.png',
            }, {
                uid: 2,
                name: 'yyy.png',
                status: 'done',
                url: 'http://www.baidu.com/yyy.png',
            }, {
                uid: 3,
                name: 'zzz.png',
                status: 'error',
                reponse: 'Server Error 500',  // custom error message to show
                url: 'http://www.baidu.com/zzz.png',
            }],
        };
        
        return (
            <div className="download">
                <SfjMenu></SfjMenu>
                <div className="mask">
                    <div className='login-bg'></div>
                </div>
                <div className='login-item download-log'>
                    <div className="container">
                        <p>This content is password protected. To view it please enter your password below:</p>
                        <div className="search">
                            <div className="search-item">
                                <Upload {...props}>
                                    <Button>
                                    <Icon type="upload" /> Upload
                                    </Button>
                                </Upload>
                            </div>
                            
                            <DatePicker></DatePicker>
                            <DataSelect></DataSelect>
                            <div className="search-item">
                                <Button type="primary" icon="search" onClick={this.doSearch}>Search</Button>
                            </div>
                            {
                                this.state.isSearch?
                                <div>
                                    <Progress></Progress>
                                    <RadioGroup></RadioGroup>
                                    <div className="search-item">
                                        <Button type="primary">OK</Button>
                                    </div>
                                </div>:''
                            }
                            
                            
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            // <Animation style={{display: 'block'}} name="rotateIn" speed='fast' className="home">
            //     <div className="banner">
            //         <Carousel effect="fade" autoplay dots={false}>
            //             {this._renderCarousel(carousel)}
            //         </Carousel>
            //     </div>
            //     <div className="shortcuts">
            //         <ul className="list">{this._renderShortCuts(shortcut)}</ul>
            //     </div>
            //     <div className="activitys">
            //         <ul className="list">{this._renderActivityList(activity)}</ul>
            //     </div>
            //     <div className="products">
            //         <h2 className="title" style={{backgroundColor: window.localStorage.page_color || '#f15b6c'}}>精选商品</h2>
            //         <ul className="list">{this._renderProductList(product)}</ul>
            //     </div>
            // </Animation>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        // currentPage: state.currentPage,
        // carousel: state.carousel,
        // activity: state.activity,
        // product: state.product,
        // shortcut: state.shortcut,
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({replace}, dispatch) }//, getCarousel, getActivity, getProduct, getShortcut
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
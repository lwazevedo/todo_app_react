import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'

import {getListPost} from '../dashboardReduce/action'
import If from '../commons/template/if'
import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Row from '../commons/layout/row'
import InfoBox from '../commons/widget/infoBoxDashboardReact'

class DashboardReduce extends Component {

    componentWillMount() {
        this
            .props
            .getListPost()
    }

    montaBox() {
        if (!_.isUndefined(this.props.listPost[0])) {
            let arrPost = []
            _.each(this.props.listPost, (obj) => {
                arrPost.push(obj)
            })

            return arrPost.map(post => (
                <InfoBox
                    cols='12 6 3'
                    colorBox=''
                    colorIcon='blue'
                    key={post.id}
                    icon='comments-o'
                    iconIdPost='info'
                    iconUserId='user'
                    title={post.title}
                    textIconPost={post.id}
                    textIconUser={post.userId}></InfoBox>
            ))
        }
    }

    render() {

        return (

            <div>
                <ContentHeader title='DS' small='Versão 0.1'/>
                <Content>
                    <Row>

                        {this.montaBox()}

                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({listPost: state.dashboardReduce.listPost})
const mapDispatchToPropos = dispatch => bindActionCreators({
    getListPost
}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropos)(DashboardReduce)

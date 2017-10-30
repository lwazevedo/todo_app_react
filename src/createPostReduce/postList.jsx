import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {getList} from './postActions'
import _ from 'lodash'
import If from '../commons/template/if.jsx'

class PostList extends Component {

    componentWillMount() {
        this
            .props
            .getList()

    }

    renderRows(){
        const list = this.props.list || []
        return list.map(post => (
            <tr key={post.id}>
                <td>
                    {post.title}
                </td>
                <td>{post.id}</td>
                <td>{post.userId}</td>
            </tr>
        ))
    }

    render() {
        const visible = _.isEmpty(this.props.list) ? false : true

        return (
            <div>
                <If test={visible}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>PostId</th>
                                <th>UserId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </If>
            </div>

        )
    }
}

const mapStateToProps = state => ({list: state.postReducer.list})
const mapDispacthToProps = dispacth => bindActionCreators({
    getList
}, dispacth)
export default connect(mapStateToProps, mapDispacthToProps)(PostList)
import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import InfoBox from '../commons/widget/infoBoxDashboardReact'
import Box from '../commons/widget/box'
import Row from '../commons/layout/row'

const URL_BASE = 'https://jsonplaceholder.typicode.com/posts'

class DashboardReact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

        this.init()
    }

    init() {
        const page = 0
        const limit = 4
        axios
            .get(`${URL_BASE}?_page=${page}&_limit=${limit}`)
            .then(resp => this.setState({
                ...this.state,
                posts: resp.data
            }))
    }

    montaBox() {
        const listaPost = this.state.posts
        return listaPost.map(post => (
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

    render() {
        return (
            <div>
                <ContentHeader title='Lista de Posts - React ' small='Versão 0.1'/>
                <Content>
                    <Row>
                        <Box
                            cols='12'
                            color='primary'
                            title='4 PRIMEIROS DA LISTA'
                            hideBtn='true'/> {this.montaBox()}
                    </Row>
                </Content>
            </div>
        )
    }
}

export default DashboardReact
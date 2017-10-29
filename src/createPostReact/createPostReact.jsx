import React, {Component} from 'react'
import axios from 'axios'

import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Grid from '../commons/layout/grid'
import Box from '../commons/widget/box'
import Row from '../commons/layout/row'
import PostForm from '../createPostReact/creatPostReactForm'

const URL_BASE = 'https://jsonplaceholder.typicode.com/posts'

class CreatePostReact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            titulo: '',
            desc: '',
            valid: true,
            enviado: true
        }

        this.handleAdd = this
            .handleAdd
            .bind(this)
        this.handleChange = this
            .handleChange
            .bind(this)

    }

    init() {
        this.setState({
            ...this.state,
            desc: '',
            userId: '',
            titulo: '',
            valid: true,
            enviado: true
        })
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            ...this.state,
            [name]: value,
            valid: true,
            enviado: true
        })
    }

    handleAdd() {

        const post = {
            userId: this.state.userId,
            title: this.state.titulo,
            body: this.state.desc
        }

        if (_.isEmpty(post.userId) || _.isEmpty(post.title) || _.isEmpty(post.body)) {
            this.setState({
                ...this.state,
                valid: false,
                enviado: true
            })
            return
        } else {
            this.setState({
                ...this.state,
                enviado: false
            })
            axios
                .post(URL_BASE, post)
                .then(resp => this.init())
        }
    }

    render() {
        return (
            <div>
                <Content>
                    <Row>
                        <PostForm
                            desc={this.state.desc}
                            userId={this.state.userId}
                            titulo={this.state.titulo}
                            valid={this.state.valid}
                            enviado={this.state.enviado}
                            handleChange={this.handleChange}
                            handleAdd={this.handleAdd}/>
                    </Row>
                </Content>
            </div>

        )
    }
}

export default CreatePostReact
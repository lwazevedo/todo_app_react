import React, {Component} from 'react'
import axios from 'axios'
import _ from 'lodash'

import PageHeader from '../commons/template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            userId: '',
            title: '',
            valid: true,
            list: []
        }
        this.handleAdd = this
            .handleAdd
            .bind(this)
        this.handleChange = this
            .handleChange
            .bind(this)
        this.handleRemove = this
            .handleRemove
            .bind(this)
        this.refresh()
    }

    refresh() {
        const page = 0
        const limit = 4
        axios
            .get(`${URL}?_page=${page}&_limit=${limit}`)
            .then(resp => this.setState({
                ...this.state,
                description: '',
                userId: '',
                title: '',
                valid: true,
                list: resp.data
            }))
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            ...this.state,
            [name]: value,
            valid: true
        })
    }

    handleAdd() {

        const post = {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.description
        }

        if (_.isEmpty(post.userId) || _.isEmpty(post.title) || _.isEmpty(post.body)) {
            this.setState({
                ...this.state,
                valid: false
            })
            return
        }
        axios
            .post(URL, post)
            .then(resp => this.refresh())

    }

    handleRemove(todo) {
        axios
            .delete(`${URL}/${todo.id}`)
            .then(resp => console.log('deletado com sucesso...'))
    }

    render() {
        return (
            <div>
                <PageHeader name='Posts' small='Enviados'></PageHeader>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
                <PageHeader name='' small='Enviar Post'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    userId={this.state.userId}
                    title={this.state.title}
                    valid={this.state.valid}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                

            </div>
        )
    }
}
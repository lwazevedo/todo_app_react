import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
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
                list: resp.data
            }))
    }

    handleChange(e) {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    handleAdd() {
        const description = this.state.description
        axios
            .post(URL, {
            userId: 10,
            title: 'oii',
            body: description
        })
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
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TodoList list={this.state.list} handleRemove={this.handleRemove}/>
            </div>
        )
    }
}
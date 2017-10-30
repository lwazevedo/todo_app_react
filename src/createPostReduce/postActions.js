import axios from 'axios'
import _ from 'lodash'
import {reset as resetForm} from 'redux-form'
import {showTabs, selectTab} from '../commons/tab/tabActions'


import {toastr} from 'react-redux-toastr'

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
const page = 0
const limit = 4

export function getList() {
    const request = axios.get(`${BASE_URL}?_page=${page}&_limit=${limit}`)
    return {type: 'POST_FETCHED', payload: request}
}

export function create(values) {
    let erro = ''
    return dispacht => {
        if (_.isEmpty(values)) {
            erro = 'Todos os campos são obrigatórios.'
        }

        if (_.isEmpty(erro)) {
            axios
                .post(`${BASE_URL}`, values)
                .then(resp => {
                    toastr.success('Sucesso', 'Post criado.')
                    dispacht([
                        resetForm('postForm'),
                        getList(),
                        selectTab('tabCreate')
                    ])
                })
                .catch(e => {
                    toastr.error('Erro', e)
                })
        } else {
            toastr.error('Erro', erro)
        }

    }
}
import React from 'react'
import Grid from '../commons/layout/grid'
import IconButton from '../commons/template/iconButton'
import If from '../commons/template/if'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12'>
            <If test={!props.valid}>
                <div className='alert alert-danger'>
                    <strong>Todos os campos são obrigatórios!</strong>
                </div>
            </If>
            <input
                id='userId'
                name='userId'
                type='number'
                className='form-control'
                placeholder='Informe id do usuário'
                onChange={props.handleChange}
                value={props.userId}
                required={true}></input>
            <input
                id='title'
                name='title'
                type='text'
                className='form-control'
                placeholder='Informe o titulo'
                onChange={props.handleChange}
                value={props.title}
                required={true}></input>
            <textarea
                id='description'
                name='description'
                className='form-control'
                placeholder='Escreva o post'
                onChange={props.handleChange}
                value={props.description}
                required={true}/>
        </Grid>
        <Grid cols='12'>
            <br/>
        </Grid>
        <Grid cols='12'>
            <IconButton style='primary pull-right' icon='send' onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)
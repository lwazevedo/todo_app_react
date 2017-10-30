import React from 'react'
import Grid from '../commons/layout/grid'
import IconButton from '../commons/template/iconButton'
import If from '../commons/template/if'

export default props => (
    <Grid cols='12'>
        <If test={!props.valid}>
            <div className="alert alert-danger alert-dismissible">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4>
                    <i className="icon fa fa-ban"></i>Erro!</h4>todos os campos são obrigratórios.
            </div>
        </If>
        <If test={!props.enviado}>
            <div className="alert alert-success alert-dismissible">
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4>
                    <i className="icon fa fa-check"></i>Post!</h4>enviado com sucesso.
            </div>
        </If>
        <div className='box box-info text-aling-center'>
            <div className="box-header with-border">
                <h3 className="box-title">Novo Post - React</h3>
            </div>
            <div role='form' className='form-horizontal'>
            {/* <form className='form-horizontal'> */}
                <div className='box-body'>
                    <div className='form-group'>
                        <div className='col-sm-2'></div>
                        <label className="col-sm-1  control-label">User ID</label>
                        <div className='col-sm-3'>
                            <input
                                id='userId'
                                name='userId'
                                type='text'
                                className='form-control'
                                placeholder='Informe id do usuário'
                                onChange={props.handleChange}
                                value={props.userId}></input>

                        </div>
                        <label className="col-sm-1 control-label">Titulo</label>
                        <div className='col-sm-3'>
                            <input
                                id='titulo'
                                name='titulo'
                                type='text'
                                className='form-control'
                                placeholder='Informe o titulo'
                                onChange={props.handleChange}
                                value={props.titulo}></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className='col-sm-2'></div>
                        <label className="col-sm-1 control-label">Descrição</label>
                        <div className='col-sm-7'>
                            <textarea
                                id='desc'
                                name='desc'
                                className='form-control noresize'
                                placeholder='Escreva o post'
                                onChange={props.handleChange}
                                value={props.desc}
                                cols="105"
                                rows="3"></textarea>
                        </div>
                        <div className='col-sm-2'></div>
                    </div>
                </div>
                <div className="box-footer col-sm-12">
                    <div className='col-sm-10'>
                        <button
                            type="submit"
                            className="btn btn-info pull-right"
                            onClick={props.handleAdd}>Enviar</button>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            {/* </form> */}
            </div>
        </div>
    </Grid>
)
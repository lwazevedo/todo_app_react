import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import Row from '../commons/layout/row'
import Grid from '../commons/layout/grid'

class PostForm extends Component {
    render() {

        const {handleSubmit} = this.props

        return (
            <Row>
                <Grid cols='12'>
                    <div className='box box-info text-aling-center'>
                        <form role='form' className='form-horizontal' onSubmit={handleSubmit}>
                            <div className='box-body'>
                                <br/>
                                <div className='form-group'>
                                    <div className='col-sm-2'></div>
                                    <label className="col-sm-1  control-label">User ID</label>
                                    <div className='col-sm-3'>
                                        <Field name='userId' className='form-control' component='input'/>
                                    </div>
                                    <label className="col-sm-1 control-label">Titulo</label>
                                    <div className='col-sm-3'>
                                        <Field name='title' className='form-control' component='input'/>
                                    </div>
                                </div>
                                <div className='form-group'>
                                    <div className='col-sm-2'></div>
                                    <label className="col-sm-1 control-label">Descrição</label>
                                    <div className='col-sm-7'>
                                        <Field name='body' className='form-control  noresize' component='textarea'/>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div>
                            </div>
                            <div className="box-footer col-sm-12">
                                <div className='col-sm-10'>
                                    <button type='submit' className="btn btn-info pull-right">Enviar</button>
                                </div>
                                <div className='col-sm-2'></div>
                            </div>
                        </form>
                    </div>
                </Grid>
            </Row>
        )
    }
}

export default reduxForm({form: 'postForm'})(PostForm)
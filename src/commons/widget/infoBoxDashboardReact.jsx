import React from 'react'
import Grid from '../layout/grid'
import If from '../template/if'
import IconButton from '../template/iconButton'

export default props => (
    <Grid cols={props.cols} key={props.id}>
        <div className={`info-box bg-${props.colorBox}`} key={props.id + 1}>
            <If test={!props.hideSpan}>
                <span className={`info-box-icon bg-${props.colorIcon}`}>
                    <i className={`fa fa-${props.icon}`}></i>
                </span>
            </If>
            <If test={!props.hideContent}>
                <div className="info-box-content">
                    <span className="info-box-text">
                        {props.title}</span>
                    <br/>
                    <span className='info-box-text'>
                        <i className={`fa fa-${props.iconIdPost} icon-margin-rt-info`}></i>
                        {props.textIconPost}
                    </span>
                    <span className='info-box-text'>

                        <i className={`fa fa-${props.iconUserId} icon-margin-rt-user`}></i>
                        {props.textIconUser}
                    </span>
                </div>
            </If>
        </div>
    </Grid>
)

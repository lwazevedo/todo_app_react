import React from 'react'
import Grid from '../layout/grid'
import If from '../template/if'
import IconButton from '../template/iconButton'

export default props => (
    <Grid cols={props.cols} key={props.id}>
        <div className={`box box-${props.color} collapsed-box box-solid`} key={props.id}>
            <div className="box-header with-border">
                <h3 className="box-title">{props.title}</h3>
                <If test={!props.hideBtn}>
                    <div className="box-tools pull-right">
                        {<IconButton style={props.style} icon={props.icon} onClick={props.onClick}></IconButton>}
                    </div>
                </If>
            </div>
            <div className="box-body">
                {props.body}
            </div>

        </div>
    </Grid>
)

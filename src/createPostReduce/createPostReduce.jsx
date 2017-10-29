import React, {Component} from 'react'

import _ from 'lodash'


import If from '../commons/template/if'
import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'

import Row from '../commons/layout/row'
import InfoBox from '../commons/widget/infoBoxDashboardReact'

class CreatePostReduce extends Component {

    

    
    render() {

        return (

            <div>
                <ContentHeader title='DS' small='Versão 0.1'/>
                <Content>
                    <Row>
                        
                        <h1>App</h1>

                    </Row>
                </Content>
            </div>
        )
    }
}

export default CreatePostReduce
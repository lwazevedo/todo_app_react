import React, {Component} from 'react'

import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import ValueBox from '../commons/widget/valueBox'
import Row from '../commons/layout/row'

class DashboardReduce extends Component {
    render(){
        return (
            <div>
                <ContentHeader title='DS' small='Versão 0.1'/>
                <Content>
                    <Row>
                    <ValueBox cols='12 6 3' color='green' icon='bank'
                    value='10' text='teste teste teste'/>
                    <ValueBox cols='12 6 3' color='red' icon='credit-card'
                    value='10' text='teste teste teste'/>
                    <ValueBox cols='12 6 3' color='blue' icon='money'
                    value='10' text='teste teste teste'/>
                    <ValueBox cols='12 6 3' color='white' icon='bank'
                    value='10' text='teste teste teste'/>
                    </Row>    
                </Content>
            </div>
        )
    }
}

export default DashboardReduce
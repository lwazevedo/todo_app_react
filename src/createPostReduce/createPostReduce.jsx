import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


import ContentHeader from '../commons/template/contentHeader'
import Content from '../commons/template/content'
import Tabs from '../commons/tab/tabs'
import TabsHeader from '../commons/tab/tabsHeader'
import TabsContent from '../commons/tab/tabsContent'
import TabHeader from '../commons/tab/tabHeader'
import TabContent from '../commons/tab/tabContent'
import {selectTab, showTabs} from '../commons/tab/tabActions'
import {create} from './postActions'
import List from './postList'
import Form from './postForm'

class CreatePostReduce extends Component {

    componentWillMount(){
       this.props.selectTab('tabCreate')     
       this.props.showTabs('tabCreate')
    }

    render() {

        return (

            <div>
                <ContentHeader title='Novo Post - Redux ' small='Versão 0.1'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label=' Listar' icon='bars' target='tabList'/>
                            <TabHeader label=' Incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label=' Alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label=' Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}/>    
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispacthToProps = dispacth => bindActionCreators({selectTab, showTabs, create}, dispacth)
export default connect(null,mapDispacthToProps)(CreatePostReduce)
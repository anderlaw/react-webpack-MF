import React from 'lib-app/react';
import Button from 'component-app/Button'
import Dialog from 'component-app/Dialog'
import Logo from 'component-app/Logo'
export default class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        dialogVisible:false
      }
      this.handleClick = this.handleClick.bind(this);
      this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
    }
    handleClick(ev){
      console.log(ev);
      this.setState({
        dialogVisible:true
      })
    }
    HanldeSwitchVisible(visible){
      this.setState({
        dialogVisible:visible
      })
    }
    render(){
      
      return (<div>
        <h1>基础库 react、react-dom从`lib-app`加载</h1>
        <p>
          从`component-app`加载的Logo组件
        </p>
          <Logo/>
          <p>
          从`component-app`加载的按钮组件
        </p>
        <Button/>
        <p>
          从`component-app`加载的对话框组件
        </p>
        <button onClick={this.handleClick}>打开对话框</button>
        <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible}/>
      </div>)
    }
  }
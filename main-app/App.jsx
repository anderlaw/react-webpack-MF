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
          <Logo/>
        <Button/>
        <br/>
        <button onClick={this.handleClick}>打开对话框</button>
        <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible}/>
      </div>)
    }
  }
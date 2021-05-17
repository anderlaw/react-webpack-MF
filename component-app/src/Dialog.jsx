import React from 'lib-app/react';
export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.visible){
            return (
                <div style={{position:"fixed",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0,0,0,.3)"}}>
                    <button onClick={()=>this.props.switchVisible(false)} style={{position:"absolute",top:"10px",right:"10px"}}>X</button>
                    <div style={{ marginTop:"20%",textAlign:"center"}}>
                        <h1>
                            What is your name ?
                        </h1>
                        <input style={{fontSize:"18px",lineHeight:2}} type="text" />
                    </div>
                    
                </div>
                );
        }else{
            return null;
        }
        
    }
}
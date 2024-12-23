import React, { Component } from 'react'

export default class ClassComponents extends Component {
    constructor(){
        super()
        this.state={
            score:0,
            balls:0,
            wikets:0,
            
        }
    }
    componentDidMount=()=>{
        console.log("CC------>  onComonenet load........")
    }
    componentWillUnmount=()=>{
        console.log("CC----->  onComponent unload.....")
    }
    shouldComponentUpdate=()=>{
        console.log("CC--->  undateComponent=....")
        return true
    }
  render() {
    
    return (
      <>
        <div>
         <h1>Class Components</h1>
         <h2>Overs:{parseInt(this.state.balls/6)}.{this.state.balls%6}</h2>
         <h2>Score:{this.state.score}-</h2>
         <h2 className='wiket'>{this.state.wikets}</h2>
         <br></br>
         <button type='button' onClick={()=>{
                this.setState({balls:this.state.balls+1})
         }}>Dot</button>
         <button type='button' onClick={()=>{
            this.setState({score:this.state.score+1})
            this.setState({balls:this.state.balls+1})
                
         }}>Single</button>
           <button type='button' onClick={()=>{
                 this.setState({score:this.state.score+2})
                 this.setState({balls:this.state.balls+1})
         }}>Dobule</button>
           <button type='button' onClick={()=>{
                this.setState({score:this.state.score+3})
                this.setState({balls:this.state.balls+1})
         }}>Triple</button>
           <button type='button' onClick={()=>{
                 this.setState({score:this.state.score+4})
                 this.setState({balls:this.state.balls+1})
         }}>Four</button>
           <button type='button' onClick={()=>{
                this.setState({score:this.state.score+6})
                this.setState({balls:this.state.balls+1})
         }}>Six</button>
           <button type='button' onClick={()=>{

               this.setState({score:this.state.score+1})
            
         }}>Wide</button>
           <button type='button' onClick={()=>{
               
               this.setState({score:this.state.score+1})
         }}>No Ball</button>
           <button type='button' onClick={()=>{
               this.setState({wikets:this.state.wikets+1})
               this.setState({balls:this.state.balls+1})
         }}>Wikets</button>
           

        </div>
      </>
    )
  }
}

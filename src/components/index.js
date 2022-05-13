import {Component} from 'react'

class CounterApp extends Component{
   state={
    count:0
   }
   increase = () =>{
       this.setState(prevState => ({count: parseInt(prevState.count) + 1}))
        
      
   }
   reset = () =>{
       this.setState({count:0})
   }
   decrease = () =>{
       if(this.state.count ===0){
           alert('Sorry Negative Values not allowed here')
           return
       }
     this.setState(prevState => ({count: parseInt(prevState.count) - 1}))
}
    render(){
        const {count} =this.state
        return(
            <>
                <div className='card p-5'>
                <h1>Counter Application</h1>
                <section>
                    <p id="countVal">{count}</p>
                        <div>
                        <button className='btn btn-primary' onClick={this.increase}>Increase</button>
                        <button className='btn btn-primary' onClick={this.reset}>Reset</button>
                        <button className='btn btn-primary'onClick={this.decrease}>Decrease</button> 
                        </div>
                </section>
                </div>
            </>
        )
    }
}
export default CounterApp
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            count:parseInt(this.props.initial)
        }
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
    }
    increment=(e)=>{
        e.preventDefault();
        console.log("incr")
        this.setState((state,props) => (
           
           {
            count: state.count+parseInt(props.quotient)
            }
        ));
        
    }
    decrement=(e)=>{
        e.preventDefault();
        console.log("decr")
        if(this.state.count-parseInt(this.props.quotient)<0){return }
        this.setState((state,props) => (
            
            {
            
            count: state.count-parseInt(props.quotient)
            }
        ));
    }
    render() {

        return (
            <div className="box">
               <button className="button button1" onClick={this.increment} >+</button>
               <button className="button button2">{this.state.count}</button>
               <button className="button button3" onClick={this.decrement}>-</button>
            </div>
        )
    }
}

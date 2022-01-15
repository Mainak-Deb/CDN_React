
class  Clock extends React.Component{
    constructor(props){
            super(props);
            this.state={
                text:String(new Date())
            };
    }
    componentDidMount(){
        this.clocktimer=setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick(){
        this.setState({
                text:String(new Date())
        })
    }
    componentWillUnmount(){
        clearInterval(this.clocktimer)
    }

    render(){
        return (
            <h1>
              <span>Hello {this.props.user}  </span>
              {this.props.children}
              <span> your time is {this.state.text}</span>
                
            </h1>
        );
    }
}

class  Clock extends React.Component{
    
    render(){
        let text=new Date();
        console.log(this)
        return (
            <h1>
              <span>Hello {this.props.user  </span>
             {this.props.children}
              <span> your time is {String(text)}</span>
                
            </h1>
        );
    }
}
class Names extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>Enter your choice {this.props.array.length}</h1>
                    <ul>

                        {this.props.array.map( (i,index)=>(
                            <Works key={Date.now()+index} deleteMethod={this.props.deleteMethod}  >{i}</Works> 
                           
                        )
                        )}
                    </ul> 
            </div>
        )
    }
}
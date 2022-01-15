class TakeInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange = (e)=>{
        e.preventDefault();
        this.setState(
            {
                value:e.target.value,
            }
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={(e)=>{
                    this.props.todos(e,this.state.value)
                    this.setState(
                        {
                            value:'',
                        }
                    );
                    }} >
                <input type="text" value={this.state.value} onChange={this.handleChange}  />
                <button >Add</button>
            </form>
            </div>
        )
    }
}

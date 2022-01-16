class Fonttext extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="fontbox" style={this.props.divheight}>
               <textarea style={this.props.FontStyle} value={this.props.textval} onChange={(e)=>this.props.textChange(e)} >
                </textarea>
            </div>
        )
    }
}

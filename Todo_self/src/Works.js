class Works extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const  {children,deleteMethod} = this.props;
        return (
           <li>
                <span>
                    <fieldset>
                        {children}
                        <button onClick={(e)=>{deleteMethod(e,children)}} >Delete</button>
                    </fieldset>
    
                </span>
            </li>
        )
    }
}

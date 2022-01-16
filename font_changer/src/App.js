class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            value:'Hello there, this is some text in a text area',
            Fonts:['Sofia','Sofia','ABeeZee','Abel','Abril Fatface','Aclonica','Acme','Adamina','Aguafina Script','Akronim','Aladin','Aldrich','Alegreya SC','Alex Brush','Allura','Amatic SC','Amita']
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
            <div className="box">
              <section className="subbox" style={{overflowY:"hidden"}}>
                  <Fonttext FontStyle={{fontFamily: "Times New Roman, Times, serif"}} divheight={{height: "97%"}}  textval={this.state.value}  textChange={this.handleChange}/>
              </section>
              <section className="subbox" >
                  {this.state.Fonts.map(
                      (i,index)=>(
                        <Fonttext  key={Date.now()+index} FontStyle={{fontFamily:i}} divheight={{ height: "100px" }} textval={this.state.value}  textChange={this.handleChange}/>
                        )
                  )}
                  
                
              </section>
            </div>
        )
    }
}

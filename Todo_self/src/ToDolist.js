class ToDolist extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[]
        }
        this.addElement=this.addElement.bind(this)
    }
    removeItemOnce(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr
    }
      
    addElement= (e,value)=>{
        e.preventDefault();
        if(value.length==0){return}
        var newarr=[...this.state.arr]      
        newarr.push(value)
        this.setState((state) => ({
            arr: newarr
          }));
    }

    DeleteElement= (e,value)=>{
        e.preventDefault();
        var newarr=[...this.state.arr]      
        newarr=this.removeItemOnce(newarr,value)
        this.setState((state) => ({
            arr: newarr
          }));
    }
    render(){
        return(
            <fieldset>
                <div>
                    <Names  array={this.state.arr}  deleteMethod={this.DeleteElement} />
                    <TakeInput todos={this.addElement}  />
                </div>
            </fieldset>
        )
    }
}
const domContainer = document.querySelector("#root")
const content = (
    <div>
        <h1>Hello world</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae mollitia voluptatum vel deleniti magnam quos dignissimos cum soluta inventore, hic sed quis iusto nemo possimus harum non aliquid officia sunt.
        </p>
    </div>
);

const Increment= () => {
    const [counter,setcounter]= React.useState(0)
    return (
        <div>
            <h1 id="number">{counter}</h1>
            <button onClick={()=>setcounter(counter+1)}>increment</button>
        </div>
    );
}

// ReactDOM.render(content,domContainer)
ReactDOM.render(
    (
        <div>
            <Increment/>
            <Increment/>
            <Increment/>
            <Increment/>
        </div>
    )
,domContainer);

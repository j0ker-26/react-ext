import React from 'react';
import ReactDOM from "react-dom";



function Demo() {
    const [count, setCount] = React.useState(0);
    const myRef = React.useRef();

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            add()
        }, 1e3)
        return ()=> {
            clearInterval(timer)
        }
    }, [])

    function add() {
        // setCount(count + 1)
        setCount(count => count + 1)
    }
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    function show() {
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>Count is {count}</h2>
            <button onClick={add}>click me + 1</button>
            <button onClick={unmount}>unmount</button>
            <button onClick={show}>click and alert</button>
        </div>
    );
}

export default Demo;

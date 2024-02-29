import React, {useEffect, useState} from 'react'





// useState
// useState hook is used to update the state of function based components
// import/destruction hook is used to update the state of functions based components
// import/destructure useState from react
// it must be used inside the function body
// must be imported at the top level of your component
// it has three main parts: stateName,function to update the state (i.e setName()) and the useState

const MyHook = () => {
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState({
        bg: "",
        color: "black"
    });
    // setEffect hook. this takes a callback function
    useEffect(() => {
        console.log("use effect called");
    })

    // run only once on page load
    useEffect(() => {
        console.log("use effect called once");
    },[]);

    // use effectHook hook as component

    useEffect(() => {
        if (count === 5){
            setTheme({
                            bg: "black",
                            color: "white"
                        })
        }
    }, [count]);  //componentdidupdate

    // let count = 0;
    const handleIncrease  = () => {
       setCount (count + 1)
    }
    const handleDecrease = () => {
        setCount (count - 1)
    }
    console.log(count);
  return (
    <div style={{backgroundColor: theme.bg, color: theme.color}}>
        <h1 className=''>My hook component</h1>
    <div className=''>
        <button className='btn btn-outline-danger'onClick={handleDecrease}>-</button>
        <span className='mx-4 fw-bold'>{count}</span>
        <button className='btn btn-outline-success'onClick={handleIncrease}>+</button>
        <p>{theme.col}</p>
    </div>
    <div className="">
        <button className='btn btn-outline-danger me-4' onClick={() => setTheme({
            bg: "red",
            color: "white"
        })}>Red</button>
        <button className='btn btn-outline-primary' onClick={() => setTheme({
            bg: "blue",
            color: "yellow"
        })}>Blue</button>
    </div>w
    </div>
    
  )
}

export default MyHook;
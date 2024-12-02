import {useEffect, useState} from "react";

const Countereffect = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log(`Counter count: ${count}`)
        document.title = `Counter count: ${count}`
    },[count])

    return (
        <div>
            Countereffect
            <h2>{count}</h2>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>

    )
}
export default Countereffect

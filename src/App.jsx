import {useCounter} from "./useCounter.js";

export default function App() {
    const { count, increment, decrement, reset } = useCounter(5);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};



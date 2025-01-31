import { useRef, useState, useEffect } from "react";

export default function App()  {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(() => {
        prevCountRef.current = count; // Har safar `count` o'zgarganda eski qiymatni saqlaydi
    }, [count]);

    return (
        <div>
            <p>Current Count: {count}</p>
            <p>Previous Count: {prevCountRef.current}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
};



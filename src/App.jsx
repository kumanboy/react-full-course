import { useRef, useState, useEffect } from "react";

export default function App() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); // Interval ID ni saqlash uchun ref

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current); // Komponent unmount bo‘lganda to‘xtatish
    }, []);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
        </div>
    );
};


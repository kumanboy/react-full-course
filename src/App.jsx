import { useRef, useState } from "react";

export default function App() {
    const [message, setMessage] = useState("Waiting...");
    const timeoutRef = useRef(null); // Timeout ID ni saqlash uchun ref

    const startTimeout = () => {
        timeoutRef.current = setTimeout(() => {
            setMessage("Timeout finished!");
        }, 5000);
    };

    const cancelTimeout = () => {
        clearTimeout(timeoutRef.current); // Timeoutni to‘xtatish
        setMessage("Timeout cancelled!");
    };

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={startTimeout}>Start Timeout</button>
            <button onClick={cancelTimeout}>Cancel Timeout</button>
        </div>
    );
};


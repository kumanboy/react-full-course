import { useRef, useState, useEffect } from "react";

export default function App() {
    const countRef = useRef(0); // useRef – Renderga ta’sir qilmaydi
    const [stateCount, setStateCount] = useState(0); // useState bilan

    // Har safar komponent  (re-render bo‘lganda) ekranga xabar chiqaramiz
    useEffect(() => {
        console.log("Component Re-rendered!");
    });

    const incrementRef = () => {
        countRef.current += 1;
        console.log("Ref count:", countRef.current); // Faqat konsolda o‘zgaradi
    };

    const incrementState = () => {
        setStateCount(stateCount + 1); // Qayta render qiladi
    };

    return (
        <div>
            {console.log("Rendering...")} {/* Qayta render bo‘lganda chiqadi */}
            <p>State Count: {stateCount}</p>
            <p>Ref Count (Ko‘rinmaydi): {countRef.current}</p>
            <button onClick={incrementState}>Increase State</button>
            <button onClick={incrementRef}>Increase Ref</button>
        </div>
    );
}

import  { useRef } from "react";

export  default function App () {
    const inputRef = useRef(null); // useRef dan foydalanamiz

    const focusInput = () => {
        inputRef.current.focus(); // Inputni fokusga olib kelamiz
        inputRef.current.value = "Iltimos ismingizni yozing"; // Inputga ertamiz
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Enter something..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};


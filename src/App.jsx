import {useId, useState} from "react";

export default function App(){
    const stableId = useState(useId())[0]; // Faqat bir marta ID yaratish

    return <p>My stable ID: {stableId}</p>;
}
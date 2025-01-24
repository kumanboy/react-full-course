import ComponentA from "./components/ComponentA.jsx";
import {createContext} from "react";

export const Data = createContext()
export const Data1 = createContext()
export const App = () => {
    const name = "Husan"
    const age = 21

    return(
     <div>
        <Data.Provider value={name}>
            <Data1.Provider value={age}>
                <ComponentA/>
            </Data1.Provider>
        </Data.Provider>
     </div>
 )
}


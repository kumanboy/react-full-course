import {Data, Data1} from "../App"
import {useContext} from "react";

const ComponentC = () => {

    const userName = useContext(Data);
    const userAge = useContext(Data1)
    return (
        <h1>My name is {userName} and I am {userAge}</h1>
    )
}
export default ComponentC

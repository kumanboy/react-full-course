import {Data, Data1} from "../App"

const ComponentC = () => {
    return (
        <Data.Consumer>
            {(name)=>{
                return (
                    <Data1.Consumer>
                        {(age)=>{
                            return (
                                <h1>My name is : {name} and I am {age} years old</h1>
                            )
                        }}
                    </Data1.Consumer>
                )
            }}
        </Data.Consumer>
    )
}
export default ComponentC

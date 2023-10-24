import React, {useState} from "react"


function AlexModule() {
    let ageNonHook = 10;
    const [age, setAge] = useState(10);
    return(
        <body>
            <h1>Site Title</h1>
            <p>Here we have some content</p>
            <p>{age}</p>
            <p>{ageNonHook}</p> 
            <button onClick={() => {setAge(age + 1)}}>+ for hook age</button>
            <button onClick={() => {ageNonHook += 1}}>+ for non-hook age</button>
        </body>
    )
}

export default AlexModule;
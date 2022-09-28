import { useState } from "react"

export default function Array(){
    const[user, setUser] = useState([{firstname:"ramesh", id:"1"},{firstname:"suresh", id:"2"}])
    return<>
    
    {user.map((item,index)=>{
        return<>
        <br/>
        {JSON.stringify(item)}        
        </>
    })}
    </>
}


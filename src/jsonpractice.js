import { useState } from "react"

export default function JsonArray(){
    const[username, setUsername] = useState()
    const[user, setUser] = useState([])
    const[id, setId] = useState()
    function Update(){
        user.push({username,id})
        console.log(user)
        setUsername("")
        setId("")
    }
    return<>
    <input type={"text"} value={username} placeholder="username" onChange={(e)=>setUsername(e.target.value)}/><label>{username}</label>
    <input type={"text"} value={id} placeholder="id" onChange={(e)=>setId(e.target.value)}/><label>{id}</label>

    <button onClick={Update}>submit</button>
    {user.map((item,index)=>{
        return<>
        <br/>
        {JSON.stringify(item)}
        </>
    })}
    </>
}



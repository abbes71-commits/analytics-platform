"use client"

import {useEffect,useState} from "react"

export default function Dashboard(){

const [events,setEvents]=useState([])

useEffect(()=>{

fetch("/api/events")
.then(res=>res.json())
.then(setEvents)

},[])

return(

<div>

<h1>Analytics Dashboard</h1>

<pre>
{JSON.stringify(events,null,2)}
</pre>

</div>

)

}

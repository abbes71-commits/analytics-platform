(function(){

function send(type,data){

fetch("https://deine-domain.vercel.app/api/track",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
type:type,
data:data,
url:window.location.href
})
})

}

document.addEventListener("click",e=>{

send("click",{
x:e.clientX,
y:e.clientY
})

})

window.addEventListener("scroll",()=>{

send("scroll",{
scroll:window.scrollY
})

})

send("pageview",{})

})();


let box=document.querySelector(".box")

export default function getUser(data) {
    box.innerHTML=""
    data.forEach(el=>{
        let div=document.createElement("div")

        let h1=document.createElement("h1")
        h1.innerHTML=el.name

        let h3=document.createElement("h3")
        h3.innerHTML=el.age

        let pStatus=document.createElement("p")
        pStatus.innerHTML=el.status?"Active":"Inactive"

        div.append(h1,h3,pStatus)
        box.append(div)
    })
}


let box=document.querySelector(".box")

export default function getUser(data) {
    box.innerHTML=""
    data.forEach(el=>{
        let div=document.createElement("div")

        let h1=document.createElement("h1")
        h1.innerHTML=el.name

        let h3=document.createElement("h3")
        h3.innerHTML=el.age

        let img =document.createElement("img")
        img.src=el.avatar
        img.style.width="200px"


        let pStatus=document.createElement("p")
        pStatus.innerHTML=el.status?"Active":"Inactive"


        let btnDelet=document.createElement("button")
        btnDelet.innerHTML="DELETE"
        

        div.append(img,h1,h3,pStatus,btnDelet)
        box.append(div)
    })
}


let btn_add=document.getElementById("btn_add")
let input=document.querySelectorAll(".Inputs")
let tr = document.querySelectorAll("tbody tr")
let a=0
 btn_add.addEventListener("click",function(){
    if(a<tr.length)
    {
    let td =tr[a].querySelectorAll("td")

    for(let index=0;index<input.length;index++){
    
         td[index].innerText=input[index].value
    

    }a++
}
    else
    {
        alert("Cedvel dolub")
    }
   
 })

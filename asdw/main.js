const frm = document.querySelector("form") 
const inp = frm.item
const lst = document.querySelector("ul")

frm.addEventListener("submit",(ev) => {
ev.preventDefault()
const valor = inp.value
if(valor.trim() =="") return
inp.value =""
lst.innerHTML += ` 
<li>
    <buttom>remover</buttom>
    <span>${valor}</span>
    
</li>
`
})

lst.addEventListener("click", (ev) =>{
    if(ev.target.closest("button")) return
        ev.target.closest("li").remove()
})

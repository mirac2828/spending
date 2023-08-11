const harcama=document.getElementById("harcama")
const bodyFooter=document.getElementById("bodyFooter")
const fiyat=document.getElementById("fiyat")
const ekle=document.getElementById("ekle")
const toplam=document.getElementById("toplam")
const imgPayment=document.getElementById("imgPayment")
const foots=document.querySelector(".footer")



 bodyFooter.addEventListener("click",handleClick)



ekle.addEventListener("click",addExpense ) 

var total= 0;
function addExpense(){
  
   
   

if(!fiyat.value|| !harcama.value){alert("Bu alan boş bırakılamaz") 
return}
const footer=document.createElement("div")
footer.classList.add("footer")

footer.innerHTML=` <h2> ${harcama.value}</h2>
<h2 id ="deleteFiyat" > ${fiyat.value} <h2>
 <img  id="imgPayment"  src="./icons8-payment-80.png"/>
 <img  id="del" src="./icons8-delete-100.png"/>` 
 bodyFooter.appendChild(footer)
 
 
 total+= parseInt(fiyat.value)
 toplam.innerText= total
 fiyat.value=""
 harcama.value=""

 

} 
function handleClick(e){ if(e.target.id==="del"){ 

    const eleman=e.target
 const last=eleman.parentElement.parentElement
 


 const willDeleteItem=(last.querySelector("#deleteFiyat").innerText)
total-=  +willDeleteItem
toplam.innerText=total
last.classList.add("fall")
last.addEventListener("transitionend",()=>{ last.remove()
    
    }
  )
  
 
  
}  }



 

var priceT=document.getElementById("priceT")



var delete1=document.getElementById("delete1")
function supp (){var e=delete1.parentElement.parentElement
e.style.display="none"}
delete1.addEventListener('click', supp )

var love1=document.getElementById("love1")
love1.addEventListener('click', function love(k)
{k.target.style.color==="red" ? k.target.style.color= "black":k.target.style.color="red"})

var plus1=document.getElementById("plus1")
var price1=document.getElementById("price1")
function plus(){plus1.innerHTML=+plus1.innerHTML+1
                price1.innerHTML=+price1.innerHTML+70
                priceT.innerHTML=+priceT.innerHTML+70}  

var minus1=document.getElementById("minus1")                
function minus(){if(price1.innerHTML>0){
                    plus1.innerHTML=+plus1.innerHTML-1
                    price1.innerHTML=+price1.innerHTML-70
                    priceT.innerHTML=+priceT.innerHTML-70 }}
       
var delete2=document.getElementById("delete2")
function supp1 (){var p=delete2.parentElement.parentElement
p.style.display="none"}
delete2.addEventListener('click', supp1 )

var love2=document.getElementById("love2")
love2.addEventListener('click', function love(k)
{k.target.style.color==="red" ? k.target.style.color= "black":k.target.style.color="red"})

var plus2=document.getElementById("plus2")
var price2=document.getElementById("price2")
function plusn(){plus2.innerHTML=+plus2.innerHTML+1
                price2.innerHTML=+price2.innerHTML+70
                priceT.innerHTML=+priceT.innerHTML+70}   

var minus2=document.getElementById("minus2")                
function minusn(){if(price2.innerHTML>0){
                    minus2.innerHTML=+minus2.innerHTML-1
                    price2.innerHTML=+price2.innerHTML-70
                    priceT.innerHTML=+priceT.innerHTML-70 }}
       

var delete3=document.getElementById("delete3")
function supp2 (){var p=delete3.parentElement.parentElement
p.style.display="none"}
delete3.addEventListener('click', supp2 )

var love3=document.getElementById("love3")
love3.addEventListener('click', function love(k)
{k.target.style.color==="red" ? k.target.style.color= "black":k.target.style.color="red"})

var plus3=document.getElementById("plus3")
var price3=document.getElementById("price3")
function plusm(){plus3.innerHTML=+plus3.innerHTML+1
                price3.innerHTML=+price3.innerHTML+70
                priceT.innerHTML=+priceT.innerHTML+70} 

var minus3=document.getElementById("minus3")
function minusm(){if (price3.innerHTML>0){
                    minus3.innerHTML=+minus3.innerHTML-1
                    price3.innerHTML=+price3.innerHTML-70
                    priceT.innerHTML=+priceT.innerHTML-70 }}
       
plus1.addEventListener('click',plus )
plus2.addEventListener('click',plusn )
plus3.addEventListener('click',plusm )

minus1.addEventListener('click',minus)
minus2.addEventListener('click',minusn)
minus3.addEventListener('click',minusm)



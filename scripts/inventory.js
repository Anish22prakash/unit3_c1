var arr=JSON.parse(localStorage.getItem("products"))

display(arr)
function display(arr){
  arr.forEach(function(ele,index){
    var chota=document.createElement("div")
    chota.setAttribute("id","box")

    var img=document.createElement("img")
    img.setAttribute("src",ele.image)
    img.setAttribute("id","imgbox")

    var naam=document.createElement("p")
    naam.innerText=ele.type

    var desc=document.createElement("p")
    desc.innerText=ele.desc


    var price=document.createElement("p")
    price.innerText=ele.price

    var del=document.createElement("button")
    del.setAttribute("id","remove_product")
    del.innerText="delete"
    del.style.cursor="pointer"
    del.addEventListener("click",function(){
      delrow(ele,index)
    })
    

    chota.append(img,naam,desc,price,del)
    document.querySelector("#all_products").append(chota)
  })
}
function delrow(ele,index){
arr.splice(index,1)
localStorage.setItem("products",JSON.stringify(arr))
window.location.reload()
}
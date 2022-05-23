//store the products array in localstorage as "products"
function myfunction(){
    event.preventDefault()
    var arr=JSON.parse(localStorage.getItem("products"))||[]
    var form=document.getElementById("products")
     
    var type=form.type.value;
    var desc=form.desc.value;
    var price=form.price.value;
    var image=form.image.value;
  
    var get= new products(type,desc,price,image)
    arr.push(get)
    localStorage.setItem("products",JSON.stringify(arr))
    window.location.reload()
  
  }
  
  
  function products(type,desc,price,image){
    this.type=type
    this.desc=desc
    this.price=price
    this.image=image
  }

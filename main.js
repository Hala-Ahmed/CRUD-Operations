
var productNameInput =document.getElementById("productname")
var productPriceInput =document.getElementById("productprice")
var productCategoryInput =document.getElementById("productcategory")
var productDescriptonInput =document.getElementById("productdescripton")
var SearchInput =document.getElementById("SearchInput")

var productList=[];
var currentindex =0 ;
 if(localStorage.getItem("products") != null){
  productList = JSON.parse(localStorage.getItem("products"))
  display()
 }

function Addproduct(){
var product ={

name:productNameInput.value,
price: productPriceInput.value,
cate:productCategoryInput.value,
desc:productDescriptonInput.value,
}

productList.push(product)
localStorage.setItem("products",JSON.stringify(productList))
display()
clearForm()
}



function display(){
  console.log(productList);
    
 var temp=""
for(var i=0 ; i<productList.length; i++){

temp =temp+ `<tr>
    <td>`+i+`</td>
    <td>`+productList[i].name+`</td> 
    <td>`+productList[i].price+`</td> 
    <td>`+productList[i].cate+`</td>
    <td>`+productList[i].desc+`</td>
<td> <button type="button" class="btn btn-warning"     onclick="updateproduct(`+ i +`)">Update</button></td>
<td><button  type="button" class="btn btn-danger"  onclick="Deleteproduct(`+ i +`)" >Delete</button></td>
</tr>`
document.getElementById("tablrow").innerHTML=temp
}
}


function Deleteproduct(index){

  productList.splice(index,1)
  localStorage.setItem("products",JSON.stringify(productList))

  display()

}

function updateproduct(ind){
  currentindex = ind ;
  productNameInput.value= productList[ind].name
  productPriceInput.value= productList[ind].price
  productCategoryInput.value= productList[ind].cate
  productDescriptonInput.value= productList[ind].desc
document.getElementById("addproduct").style.display="none"
document.getElementById("editproduct").style.display="inline-block"

}



function Editproduct(){

  productList[currentindex].name =productNameInput.value
  productList[currentindex].price =productPriceInput.value
  productList[currentindex].cate =productCategoryInput.value
  productList[currentindex].desc =productDescriptonInput.value

  localStorage.setItem("products",JSON.stringify(productList))
  display()
  
document.getElementById("addproduct").style.display="inline-block"
document.getElementById("editproduct").style.display="none"
clearForm()
}

  
function clearForm(){

  productNameInput.value="" 
  productPriceInput.value=""
  productCategoryInput.value="" 
  productDescriptonInput.value="" 

}


function search(){
  var SearchValue=SearchInput.value.toLowerCase()
  var temp="";
  for(var i=0;i<productList.length;i++){
     if
      (productList[i].name.toLowerCase().includes(SearchValue)==true
      ||
      (productList[i].cate.toLowerCase().includes(SearchValue)==true) 
      ) 

      
      {
      temp =temp+ `<tr>
      <td>`+i+`</td>
      <td>`+productList[i].name.toLowerCase().replace(SearchValue ,"<span class='text-danger fw-bolder'>"+SearchValue+"</span>")+`</td> 
      <td>`+productList[i].price+`</td> 
      <td>`+productList[i].cate.toLowerCase().replace(SearchValue ,"<span class='text-danger fw-bolder'>"+SearchValue+"</span>")+`</td> 
      <td>`+productList[i].price+`</td> >
      <td>`+productList[i].desc+`</td>
  <td> <button type="button" class="btn btn-warning"     onclick="updateproduct(`+ i +`)">Update</button></td>
  <td><button  type="button" class="btn btn-danger"  onclick="Deleteproduct(`+ i +`)" >Delete</button></td>
  </tr>`
    }
  }
  document.getElementById("tablrow").innerHTML=temp

}
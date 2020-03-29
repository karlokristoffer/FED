const modal = document.getElementById("myModal");

function pullItemDetails (sku) {
  for (let i = 0; i< arrayAllItems.length; i++){ 
   let {itemsku, itemname, itemprice, itemcategory,imagepath} = arrayAllItems[i] ;
   if (itemsku === sku) 
   {
     console.log(itemsku, itemname, itemprice, itemcategory,imagepath)
     modal.style.display = "block";
   }
  }
}

var span = document.getElementsByClassName("close")[0];

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
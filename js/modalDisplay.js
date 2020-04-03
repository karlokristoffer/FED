const imageModal = document.getElementById("imageModal");
const modalName = document.getElementsByClassName("modalName")[0];
const modalImagePath = document.getElementsByClassName("modalImagePath")[0];
const modalSku = document.getElementsByClassName("modalSku")[0];
const modalDesc = document.getElementsByClassName("modalDesc")[0];
const modalPrice = document.getElementsByClassName("modalPrice")[0];
const modalAddToCart = document.getElementsByClassName("addCart")[0];
const viewCartModal = document.getElementById("viewCartModal");
const viewCartImage= document.getElementsByClassName("viewcart")[0];
const cartAlert = document.getElementsByClassName("cartAlert")[0];

function deconArray (sku) {
  for (let i = 0; i< arrayAllItems.length; i++){ 
    let {itemsku, itemname, itemprice, itemcategory,imagepath,itemdesc} = arrayAllItems[i] ;
    if (itemsku === sku) {
      return [{itemsku, itemname, itemprice, itemcategory,imagepath,itemdesc}];
    }
  }
}

function pullItemDetails (sku) {
 let localArray = deconArray(sku);
 let {itemsku, itemname, itemprice,imagepath,itemdesc} = localArray[0] ;

  if (itemsku === sku) 
  {
    modalImagePath.setAttribute("src", imagepath);
    modalName.innerText = itemname;
    modalSku.innerText = `Item # ${itemsku}`;
    modalDesc.innerText = itemdesc;
    modalPrice.innerText = `₱${itemprice}`;
    modalAddToCart.setAttribute('onclick',`addToCart("${itemsku}");`);
    imageModal.style.display = "block";
  }
}


window.onclick = function(event) {
  if (event.target == imageModal) {
    imageModal.style.display = "none";
    cartAlert.style.display = "none";
  }
  else   if (event.target == viewCartModal) {
    viewCartModal.style.display = "none";
  }
}

viewCartImage.addEventListener("click", function (){
  viewCartModal.style.display = "block";
})
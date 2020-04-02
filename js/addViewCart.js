
const showCart = document.getElementById("showCart");
const totalPriceDispay = document.getElementById("totalPrice");
const orderNowDisplay = document.getElementById("orderNowDisplay");
const finalCart = [];


function addToCart (sku) {  
  let localArray = deconArray(sku);
  let {itemsku, itemname, itemprice,imagepath, quantity= 1} = localArray[0] ;
  if (itemsku === sku) 
  {
    let newQuantity = checkQuantity(itemsku, 1);
    if (newQuantity > 1 ){
      // console.log("Adding Quantity");
    }
    else{
    finalCart.push({itemsku,itemname, itemprice,imagepath, quantity});
    }
  }
  displayCart();
}

function checkQuantity (sku, count)
{
  if (count > 0)
  {
    for (let i= 0 ; i < finalCart.length; i++)
    {
      let {itemsku, quantity} = finalCart[i];
      if (itemsku === sku)
      {
        finalCart[i].quantity = quantity + count;
        return quantity + count;
      }
    }
    return count;
  }
}

function displayCart ()
{
  let cartContent = " <tr class='viewCartHeader'><td>Item Name</td><td>Quantity</td><td>Price</td><tr></tr>";
  let totalPriceContent = "";
  let orderNowContent = "";
  let totalPrice = 0;
  for (let i=0; i < finalCart.length; i++)
  {
    let {itemname, itemprice,quantity} = finalCart[i] ;
    totalPrice += itemprice*quantity;
    cartContent += "<table>"
      +"<tr>"
        +"<td class='viewCartName'>"+itemname+"</td>"
        +"<td class='viewCartQuantity'>"+quantity+"</td>"
        +"<td class='viewCartPrice'>"+itemprice+"</td>"
        // +"<td class='viewCartRemove'>X</td>"
      +"</tr>"
    +"</table>";
  }
  if (totalPrice !== 0)
  {
    totalPriceContent += "Total Price: "+totalPrice;
    orderNowContent += "<button class='ordernow' onclick = 'clearCart()'>ORDER NOW!</button>";
    
  }
  else 
  {
    cartContent = "";
    cartContent += "No Item in the Cart";
  }
  // console.log(cartContent);
  showCart.innerHTML = cartContent;
  totalPriceDispay.innerHTML = totalPriceContent;
  orderNowDisplay.innerHTML = orderNowContent;
}

function clearCart ()
{
  finalCart.length = 0;
  displayCart();
}

displayCart();
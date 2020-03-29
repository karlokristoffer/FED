const arrayRecomItems = JSON.parse(recommendedItems);
const arrayBrowseItems = JSON.parse(browseItems);
const arrayAllItems = arrayCombineItems(arrayBrowseItems,arrayRecomItems);
var shuffledAllItems = shuffleArray(arrayAllItems);

function arrayCombineItems(firstarray,secondarray)  
{
    return firstarray.concat(secondarray)
}

function loadItems(array, items)
{
    let htmlItems = document.getElementById(items);

    for (let i = 0; i < array.length ; i++)
    {
        // Deconstruct object array
        let {itemname, itemprice, itemcategory,imagepath} = array[i];
        
        // div gridcontainer
        let gridcontainer = document.createElement("div");
        gridcontainer.setAttribute("class","gridcontainer "+itemcategory);
      
        // Recommended Image Path
        let recomImage = document.createElement("img");
        recomImage.setAttribute ("src",imagepath)
      
        // Recommended Price
        let recomPrice = document.createElement("p");
        let recomPriceData = document.createTextNode("₱"+itemprice)
        recomPrice.setAttribute("class","itemprice");
        recomPrice.appendChild(recomPriceData);

        // Recommended Name
        let recomName = document.createElement("p");
        let recomNameData = document.createTextNode(itemname)
        recomName.setAttribute("class","itemname");
        recomName.appendChild(recomNameData);

        // AppendChild All Recommeded data to gridcontainer
        gridcontainer.appendChild(recomImage);
        gridcontainer.appendChild(recomName);
        gridcontainer.appendChild(recomPrice);  

        // AppendChild gridcontainer to parent div id=items
        htmlItems.appendChild(gridcontainer);
    }
}

function shuffleArray(arra1) {
    let ctr = arra1.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

window.addEventListener("load",function() {
    loadItems(arrayRecomItems, "recommendeditems");
    loadItems(shuffledAllItems, "browseitems");
})



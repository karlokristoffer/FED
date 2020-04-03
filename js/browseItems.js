const wallCategory = document.getElementsByClassName("wallCategory")[0];
const clipCategory = document.getElementsByClassName("clipCategory")[0];
const documentCategory = document.getElementsByClassName("documentCategory")[0];
const floatCategory = document.getElementsByClassName("floatCategory")[0];
const categoryList = document.getElementsByTagName("li");
const browseCategory = document.getElementById("browseitems").getElementsByClassName("gridcontainer");

function filterCategory (type, category){
    
    for (let i = 0; i < category.length; i++)
    {
        if(category[i].classList.contains(type))
        {
            category[i].style.display = "block";
        }
        else
        {
            category[i].style.display = "none";
        }        
    }
}


function activeCategory (type, category){
    
    for (let i = 0; i < category.length; i++)
    {
        if(category[i].classList.contains(type))
        {
            category[i].setAttribute("class",type+" shadow");
        }
        else
        {
            category[i].classList.remove("shadow")
        }        
    } 
}

wallCategory.addEventListener("click", function () {
    filterCategory("wall",browseCategory);
    activeCategory("wallCategory", categoryList)
});

clipCategory.addEventListener("click", function () {
    filterCategory("clip",browseCategory);
    activeCategory("clipCategory", categoryList)
});

documentCategory.addEventListener("click", function () {
    filterCategory("document",browseCategory);
    activeCategory("documentCategory", categoryList)
});

floatCategory.addEventListener("click", function () {
    filterCategory("float",browseCategory);
    activeCategory("floatCategory", categoryList)
});
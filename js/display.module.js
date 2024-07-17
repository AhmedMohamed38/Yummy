export class Display{
    constructor(){
        
    }
    displayHome(FinalData){
        var container=``
    for(var i =0 ; i<FinalData.length;i++){
        container+=`
        <div class="col-xl-3 col-lg-4 col-md-6 ">
                    <div  class="position-relative card-mail shadow shadow-lg  overflow-hidden rounded-3">
                        <div>
                            <img class="img-fluid" src="${FinalData[i].strMealThumb}" alt="">
                        </div>
                        <div data-id="${FinalData[i].idMeal}" class="cont-layer pointer d-flex align-items-center justify-content-center">
                            <h3 class="text-center ">${FinalData[i].strMeal}</h3>
                        </div>

                    </div>
                </div>
        `
    }
    document.getElementById("display1").innerHTML=container
    document.getElementById("category").classList.remove("act-sec")
    document.getElementById("area").classList.remove("act-sec")
    document.getElementById("Ingredients").classList.remove("act-sec")

    document.getElementById("home").classList.add("act-sec")


    }
    // saerch
    displaySearch(FinalData){
        var container=``
    for(var i =0 ; i<FinalData.length;i++){
        container+=`
        <div class="col-xl-3 col-lg-4 col-md-6">
                    <div  class="position-relative card-mail shadow shadow-lg  overflow-hidden rounded-3">
                        <div>
                            <img class="img-fluid" src="${FinalData[i].strMealThumb}" alt="">
                        </div>
                        <div data-id="${FinalData[i].idMeal}" class="cont-layer pointer d-flex align-items-center justify-content-center">
                            <h3 class="text-center ">${FinalData[i].strMeal}</h3>
                        </div>

                    </div>
                </div>
        `
    }
    document.getElementById("searchCon").innerHTML=container
    


    }

    // dis detailes
    displayDetailes(FinalData2){
        
        var container=`
    <div class="col-lg-4">
                    <img class="w-100 rounded-top-0 rounded-3" src="${FinalData2[0].strMealThumb
                        }">
                </div>
                <div class="col-lg-8">
                    <div class="text-white">
                        <h2>Instructions</h2>
                        <p>${FinalData2[0].strInstructions}</p>
                        <h5>Area: <span class="de-text">${FinalData2[0].strArea}</span></h5>
                        <h5>Category: <span class="de-text">${FinalData2[0].strCategory}</span></h5>
                        <h5>Recipes: </h5>
                        <ul class="list-unstyled d-flex align-items-center justify-content-around flex-wrap">
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient1}.</li>
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient2}</li>
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient3}.</li>
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient4}.</li>
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient5}.</li>
                            <li class="alert alert-primary m-2 p-1">${FinalData2[0].strIngredient6},</li>

                        </ul>
                        <h5>Tags: </h5>
                        <ul class="list-unstyled d-flex align-items-center justify-content-start">
                            <li class="alert alert-success m-2 p-1">${FinalData2[0].strTags}</li>
                            


                        </ul>


                        <a  href="${FinalData2[0].strYoutube}" target="_blank" class="btn btn-outline-warning rounded-top-0 text-white ">Source</a>
                        <a href="${FinalData2[0].strYoutube}" target="_blank" class="btn btn-warning rounded-top-0 text-white">Youtube</a>
                    </div>
                </div>
    `
document.getElementById("detaCon").innerHTML=container
    }

    displayCat(data){
        var container=``
    for(var i =0 ; i<data.length;i++){
        var x = data[i].strCategoryDescription.split(" ").slice(0,9).join(" ")
        container+=`
        <div class="col-xl-3 col-lg-4 col-md-6">
                    <div class="position-relative card-cat  overflow-hidden rounded-3">
                        <div>
                            <img class="img-fluid" src="${data[i].strCategoryThumb}" alt="">
                        </div>
                        <div data-id=${data[i].idCategory} class="cont-layer-cat d-flex flex-column align-items-center justify-content-center">
                            <h3>${data[i].strCategory}</h4>
                                <p class="text-center ">${x}</p>
                        </div>
                        </div>
                </div>
        `


    }
    document.getElementById("catCon").innerHTML=container
}



}




import { Detailes } from "./detailes.module.js"
import { Display } from "./display.module.js"
import { LinkApi } from "./link.module.js"

export class Home{
    constructor(){
        
        this.display = new Display
        this.HomeApi()
        this.sidNavLink()
        this.links = new LinkApi
        this.NavBar()
        
        
        
    
        
    }
     NavBar (){
        $(".side-nav").css("left", -$(".side-nav-inner").innerWidth());
    $("#closeIcon").fadeOut(0);
    $(".side-nav ul li").css("top", 150);
    
    let left = $(".side-nav-inner").innerWidth();
    function closeSideNav() {
      $(".side-nav").css("left", -left);
      $("#closeIcon").fadeOut(0);
      $("#openIcon").fadeIn(0);
      $(".side-nav ul li").animate({ top: 150 }, 80);
    }
    
    function openSideNav() {
      $(".side-nav").css("left", 0);
      $("#closeIcon").fadeIn(0);
      $("#openIcon").fadeOut(0);
      for (let i = 0; i < 6; i++) {
        $(".side-nav ul li")
          .eq(i)
          .animate({ top: 0 }, (i + 2) * 80);
      }
    }
    
    $(".menuIcon").click(() => {
      if ($(".side-nav").css("left") === "0px") {
        closeSideNav();
      } else {
        openSideNav();
      }
    });
    
    
    }
    

























       async HomeApi(){
        document.querySelector(".spin").classList.remove("d-none")
        const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
     let data = await api.json()
     let FinalData = data.meals
      this.display.displayHome(FinalData)
      document.querySelector(".spin").classList.add("d-none")

      
    //   home detailes
      document.querySelectorAll(".cont-layer").forEach((card =>{
        card.addEventListener("click",()=>{
            console.log(card.dataset.id)
            new Detailes().ApiDetailes(card.dataset.id)
            document.getElementById("home").classList.remove("act-sec")
            document.getElementById("detailes").classList.add("act-sec")


        })
      }))

       }
       // cat detailes
       
       
    
       sidNavLink(){
        document.querySelectorAll(".link").forEach((link =>{
            link.addEventListener("click",()=>{
                document.querySelector("section.act-sec").classList.remove("act-sec")
                if(link.innerHTML == "Search"){
                    document.getElementById("searchSection").classList.add("act-sec")
                    document.getElementById("category").classList.remove("act-sec")
                    document.getElementById("area").classList.remove("act-sec")
                    document.getElementById("Ingredients").classList.remove("act-sec")
                    document.getElementById("contact").classList.remove("act-sec")
                    
                }else if(link.innerHTML == "Categories"){
                    document.getElementById("category").classList.add("act-sec")
                    document.getElementById("area").classList.remove("act-sec")
                    document.getElementById("Ingredients").classList.remove("act-sec")
                    document.getElementById("contact").classList.remove("act-sec")
                    document.getElementById("searchSection").classList.remove("act-sec")
                    this.links.catApiName()

                    
                }else if(link.innerHTML == "Area"){
                    document.getElementById("category").classList.remove("act-sec")
                    document.getElementById("area").classList.add("act-sec")
                    document.getElementById("Ingredients").classList.remove("act-sec")
                    document.getElementById("contact").classList.remove("act-sec")
                    document.getElementById("searchSection").classList.remove("act-sec")

                    
                }else if(link.innerHTML == "Ingredients"){
                    document.getElementById("category").classList.remove("act-sec")
                    document.getElementById("area").classList.remove("act-sec")
                    document.getElementById("Ingredients").classList.add("act-sec")
                    document.getElementById("contact").classList.remove("act-sec")
                    document.getElementById("searchSection").classList.remove("act-sec")

                    
                }else if(link.innerHTML == "Contact us"){
                    document.getElementById("category").classList.remove("act-sec")
                    document.getElementById("area").classList.remove("act-sec")
                    document.getElementById("Ingredients").classList.remove("act-sec")
                    document.getElementById("contact").classList.add("act-sec")
                    document.getElementById("searchSection").classList.remove("act-sec")

                    
                }
                
            // document.querySelector(".fa-x").classList.add("d-none")
            // document.querySelector(".fa-bars-staggered").classList.remove("d-none")
            })
        }))
       }
    

}






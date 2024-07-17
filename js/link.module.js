import { Detailes } from "./detailes.module.js"
import { Display } from "./display.module.js"

export class LinkApi {
    constructor() {
        this.displayN = new Display
        this.discat = new Detailes
        this.seaechLettar()
        this.seaechName()
        this.Araeapi()
        this.AntApi()
        this.varInput()

    }
    async catApiName() {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        let data = await api.json()
        let FinalData = data.categories
        document.querySelector(".spin").classList.add("d-none")

        this.displayN.displayCat(FinalData)


        document.querySelectorAll(".card-cat").forEach((card => {
            card.addEventListener("click", () => {
                let catName = card.querySelector("h3").innerHTML
                console.log(catName)
                this.catApi2(catName)




            })
        }))

    }





    async catApi2(name) {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        let data = await api.json()
        let FinalData = data.meals
        document.querySelector(".spin").classList.add("d-none")

        this.displayN.displayHome(FinalData)
        document.querySelectorAll(".cont-layer").forEach((card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id)
                new Detailes().ApiDetailes(card.dataset.id)
                document.getElementById("home").classList.remove("act-sec")
                document.getElementById("detailes").classList.add("act-sec")


            })
        }))


    }

    async seaechLettarApi(lettar) {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${lettar}`)
        const data = await api.json();
        let FinalData = data.meals
        this.displayN.displaySearch(FinalData)
        document.querySelector(".spin").classList.add("d-none")

        document.querySelectorAll(".cont-layer").forEach((card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id)
                new Detailes().ApiDetailes(card.dataset.id)
                document.getElementById("searchSection").classList.remove("act-sec")
                document.getElementById("detailes").classList.add("act-sec")


            })
        }))
    }
    seaechLettar() {
        document.getElementById("sea-let").addEventListener("keyup", () => {
            let lettar = document.getElementById("sea-let").value
            console.log(lettar)
            this.seaechLettarApi(lettar)

        })


    }

    // name
    async seaechNameApi(name) {
        // document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const data = await api.json();
        let FinalData = data.meals
        this.displayN.displaySearch(FinalData)
        //  document.querySelector(".spin").classList.add("d-none")

        document.querySelectorAll(".cont-layer").forEach((card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id)
                new Detailes().ApiDetailes(card.dataset.id)
                document.getElementById("searchSection").classList.remove("act-sec")
                document.getElementById("detailes").classList.add("act-sec")


            })
        }))
    }
    seaechName() {
        document.getElementById("sea-na").addEventListener("keyup", () => {
            let lettar = document.getElementById("sea-na").value
            console.log(lettar)
            this.seaechNameApi(lettar)

        })


    }



    async Araeapi(coun) {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${coun}`);
        const data = await api.json();
        let FinalData = data.meals
        console.log(FinalData)

        this.Arae()
        this.displayN.displayHome(FinalData)
        document.querySelector(".spin").classList.add("d-none")
        document.querySelectorAll(".cont-layer").forEach((card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id)
                new Detailes().ApiDetailes(card.dataset.id)
                document.getElementById("home").classList.remove("act-sec")
                document.getElementById("detailes").classList.add("act-sec")


            })
        }))





    }
    Arae() {
        document.querySelectorAll(".card-area").forEach((card => {
            card.addEventListener("click", () => {
                let x = card.querySelector("h3").innerHTML
                console.log(x)
                this.Araeapi(x)
            })
        }))
    }







    async AntApi(coun) {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${coun}`);
        const data = await api.json();
        let FinalData = data.meals
        console.log(FinalData)

        this.integ()
        this.displayN.displayHome(FinalData)
        document.querySelector(".spin").classList.add("d-none")
        document.querySelectorAll(".cont-layer").forEach((card => {
            card.addEventListener("click", () => {
                console.log(card.dataset.id)
                new Detailes().ApiDetailes(card.dataset.id)
                document.getElementById("home").classList.remove("act-sec")
                document.getElementById("detailes").classList.add("act-sec")


            })
        }))





    }







    integ() {
        document.querySelectorAll(".card-int").forEach((card => {
            card.addEventListener("click", () => {
                let x = card.querySelector("h3").innerHTML
                console.log(x)
                this.AntApi(x)
            })
        }))
    }



    // 
    varInput() {
        let NameIn = document.getElementById("NameIn")
        let EmailIn = document.getElementById("EmailIn")
        let PhoneIn = document.getElementById("PhoneIn")
        let AgeIn = document.getElementById("AgeIn")
        let PassIn = document.getElementById("PassIn")
        let RePassIn = document.getElementById("RePassIn")

        let EmaileVali = false
        let PhoneVali = false
        let AgeVali = false
        let PassVali = false
        let RePassVali = false
        var regex = {

            EmailIn: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            PassIn: /[A-Z]+[a-z]*(@|#|&)[0-9]*/,
            PhoneIn: /^^01[0-2,5]{1}[0-9]{8}$/,
            AgeIn: /^\S[0-6]{0,1}$/,
        }
        EmailIn.addEventListener("input",()=>{
            if(regex[EmailIn.id].test(EmailIn.value)== true){
                EmailIn.nextElementSibling.classList.replace("d-block", "d-none")
                EmaileVali = true
                btnValid()

            } else {
                EmailIn.nextElementSibling.classList.replace("d-none", "d-block")
            }
        })
        PhoneIn.addEventListener("input",()=>{
            if(regex[PhoneIn.id].test(PhoneIn.value)== true){
                PhoneIn.nextElementSibling.classList.replace("d-block", "d-none")
                PhoneVali = true

            } else {
                PhoneIn.nextElementSibling.classList.replace("d-none", "d-block")
            }
        })
        AgeIn.addEventListener("input",()=>{
            if(regex[AgeIn.id].test(AgeIn.value)== true){
                AgeIn.nextElementSibling.classList.replace("d-block", "d-none")
                AgeVali = true

            } else {
                AgeIn.nextElementSibling.classList.replace("d-none", "d-block")
            }
        })
        PassIn.addEventListener("input",()=>{
            if(regex[PassIn.id].test(PassIn.value)== true){
                PassIn.nextElementSibling.classList.replace("d-block", "d-none")
                PassVali = true

            } else {
                PassIn.nextElementSibling.classList.replace("d-none", "d-block")
            }
        })
        RePassIn.addEventListener("input", () => {
            if (RePassIn.value == PassIn.value) {
                RePassIn.nextElementSibling.classList.replace("d-block", "d-none")
                RePassVali = true

            } else {
                RePassIn.nextElementSibling.classList.replace("d-none", "d-block")
            }
            btnValid()

        })



        function btnValid(){
            if (EmaileVali && PhoneVali && AgeVali&& PassVali&&RePassVali) {
                document.getElementById("btn").classList.remove("disabled")
                document.getElementById("btn").addEventListener("click",()=>{
                    EmailIn.value =""
                    PhoneIn.value =""
                    AgeIn.value =""
                    PassIn.value =""
                    RePassIn.value =""
                    NameIn.value =""

                })

            } else {
                document.getElementById("btn").classList.add("disabled")
            }
            
        }






















    }








}
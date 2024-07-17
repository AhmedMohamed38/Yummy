import { Display } from "./display.module.js"

export class Detailes {
    constructor(id) { 
        this.ApiDetailes(id)
    }


    async ApiDetailes(id) {
        document.querySelector(".spin").classList.remove("d-none")

        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        let data1 = await api.json()
        let FinalData2 = data1.meals
        console.log(FinalData2)
        document.querySelector(".spin").classList.add("d-none")

        new Display().displayDetailes(FinalData2)

    }
}
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: ()=>({
        count: 20,
        name: "Inioluwa",
        arrobj:JSON.parse(localStorage.getItem("allsignupusers"))
    }),
    actions: {
        increment(){
            this.count++
        }
    }
})
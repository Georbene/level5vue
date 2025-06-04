import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state:()=>({
        name: 'ini',
        alluser: '',
        allusersarray:[]
    }),
    actions:{
        receiveuser(username,fullname,password){
            let allusers = [
                username,
                fullname,
                password
            ]
            this.allusersarray.push(allusers)
        // this.alluser=allusers
        },
        getusers(){
            return this.allusersarray;
        }
    }
})
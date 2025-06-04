<template>
    <div>
        <h1>Login page</h1>
        <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
        
        <input type="text" class="form-control my-2" placeholder="Email" v-model="email">
        <input type="text" class="form-control my-2" placeholder="Password" v-model="password">
        <button class="btn btn-success" @click="handleLogin">Login</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: "",
            password: "",
            allusers: [],
            errorMsg: ''
        }
    },   
    mounted(){
    this.allusers=JSON.parse(localStorage.getItem('allsignupusers')) || [] 
    // console.log(this.allusers);
    
    },
    methods: {
        handleLogin(){            
            let user = this.allusers.find(user => user.email === this.email && user.password === this.password)
            if(!user)
            {
            this.errorMsg = 'user does not exist'
            setTimeout(() => {
            this.errorMsg = ''
        }, 4000);
            return 
        }
         if(user){
            localStorage.setItem('currentUser', JSON.stringify(user))
            // alert('Login Successfully');
            this.errorMsg = ''
            this.$router.push('/dashboard')
        }
        

        // else{
        //     this.errorMsg ='Invalid User'
        // }
            
        }
    }
}
</script>

<style>

</style>
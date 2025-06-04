<template>
  <div class="container">
        <h1>Sign Up</h1>
        <!-- <p v-for="errorMessage in Allusers">{{ errorMessage }}</p> -->
        <form @submit.prevent="handleSubmit">
            <div class="form-group mb-2">
               <label for="">User Name</label>
               <input type="text" class="form-control" name="username" v-model.trim="username">
               <!-- <small v-if="usernameError" class="text-danger">{{ usernameError }}</small> -->
           </div>
    
           <div class="form-group mb-2">
               <label for="">Full Name</label>
               <input type="text" class="form-control" name="fullname" v-model.trim="fullname">
           </div>
    
           <div class="form-group mb-2">
               <label for="">Password</label>
               <input type="password" class="form-control" name="password" v-model.trim="password">
           </div>
    
           <div class="form-group mb-2">
               <button type="" class="btn btn-outline-primary">Sing Up Here</button>
           </div>
        </form>
    </div>
    <div v-for="user in userStore.getuser()" :key="user.username">
        <p>username: {{ user.username }}</p>
        <p>fullname: {{ user.fullname }}</p> <hr>
        <!-- <p>{{ user.password }}</p> -->
    </div>
</template>

<script>
import { useUserStore } from '@/Stores/user';

export default {
    data () {
        return {
            username: '',
            fullname: '' ,
            password: '',
            userStore: useUserStore()
        }
    },
    
    methods: {
        handleSubmit () {
            this.userStore.recieveuser(this.username, this.fullname, this.password);
            console.log(this.userStore.getuser());
            
            // console.log(this.userStore.getuser());
            
         
            
        }
    }
}
</script>

<style>

</style>
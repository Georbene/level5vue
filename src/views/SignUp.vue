<template>
    <div class="container">
        <h1>Sign Up</h1>
        <form @submit.prevent="handleSubmit">
        <div class="form-group mb-2">
           <label for="">Full Name</label>
           <input type="text" class="form-control" name="fullname" v-model.trim="fullname">
       </div>

       <div class="form-group mb-2">
           <label for="">Email</label>
           <input type="email" class="form-control" name="email" v-model.trim="email">
       </div>

       <div class="form-group mb-2">
           <label for="">Password</label>
           <input type="password" class="form-control" name="password" v-model.trim="password">
       </div>
       
       <div class="form-group mb-2">
           <button type="" class="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
</template>

<script setup>
  import {onMounted, ref} from 'vue';
import { useRouter } from 'vue-router';
  const fullname=ref('')
  const email=ref('')
  const password=ref('')
  let allusers= []
  const router=useRouter()

  onMounted(()=>{
    allusers=JSON.parse(localStorage.getItem('allsignupusers')) || []
    // console.log("Mounted");
    
  })
  const handleSubmit=()=>{
    let obj={
      fullname:fullname.value,
      email:email.value,
      password:password.value
    }    
    allusers.push(obj)
    localStorage.setItem('allsignupusers',JSON.stringify(allusers))
    if(localStorage['allsignupusers']){
        alert('User Created Successfully');
        router.push('/login')
    }
    console.log(allusers);
  
  }

  


</script>

<style>

</style>
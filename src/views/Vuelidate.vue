<template>
  <div class="container">
        <h1>Sign Up</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group mb-2">
                <label for="">Email</label>
                <input type="email" class="form-control" name="email" v-model="form.email">
            </div>
            <div v-for="(errors, index) in v$.form.email.$errors" :key="index">
             <p v-if="v$.form.email.$dirty">{{ errors.$message }}</p>
            </div>

            <div class="form-group mb-2">
               <label for="">Full Name</label>
               <input type="text" class="form-control" name="fullname" v-model="form.fullname">
           </div>
           <div v-for="(errors, index) in v$.form.fullname.$errors" :key="index">
             <p v-if="v$.form.fullname.$dirty">{{ errors.$message }}</p>
            </div>

            <div class="form-group mb-2">
               <label for="">Gender</label>
               <input type="text" class="form-control" name="gender" v-model="form.gender">
           </div>
           <div v-for="(errors, index) in v$.form.gender.$errors" :key="index">
             <p v-if="v$.form.gender.$dirty">{{ errors.$message }}</p>
            </div>
           <!-- <div class="form-group mb-2">
               <label for="">Password</label>
               <input type="password" class="form-control" name="password" v-model.trim="password">
           </div> -->
    
           <div class="form-group mb-2">
               <button class="btn btn-outline-primary">Sign Up Here</button>
           </div>
        </form>
    </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';

export default {
    data() {
        return {
            form: {
                email: '',
                fullname: '',
                gender: '',
         },
            v$:null
        }
    }, 
    validations() {
        return {
            form:{
                email:{required, minLenght:minLength(3)},
                fullname:{required},
                gender:{required},
            }
        }
    },
    created() {
        this.v$ =useVuelidate();
    },
    methods: {
        submitForm() {
            this.v$.$touch();
            if (this.v$.$invalid) {
                console.log('Form is invalid');
            }
            else {
                console.log('Form is valid');
            }
        }
    }

}
</script>

<style>

</style>
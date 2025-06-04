<template>
  <h4>Welcome to Vue 3, {{ name }}</h4> <br>
  <p>He is {{ age }} years old</p>

  <!-- <button v-on:click="IncreaseNum">Increase</button> -->
  <button @click="IncreaseNum">Increase</button>

  <!--Loop rendering-->
  <!-- <ul v-for="student in students" v-bind:key="student"> -->
    <ul v-for="student in students" :key="student">
    <li>{{ student }}</li>
  </ul>

  <!--Conditonal statement-->
  <span v-if="day === 'Wednesday'">Today is wednesday</span>
  <span v-else-if="day === 'Monday'">The day is actually Monday</span>
  <span v-else>The day is {{ day }}</span>
  <span>{{ date }}</span>
  <span>{{ day === 'Wednesday' ? '' : '' }}</span>
  <span v-show="day === 'Wednesday'">Yes, today is Monday</span>

    <div class="div d-flex justify-content-center align-items-center" :class="condition ? 'bg-success' : 'bg-danger'">
      <button class="btn btn-dark" @click="condition = !condition">Change color</button>
      </div>

    <input :type="show ? 'text' : 'password'" class="form-control" v-model="userInput">
    <button class="btn btn-light" @click="show = !show">{{ show ? 'Hide' : 'Show' }}</button>

    <span>{{ userInput }}</span>

    <button class="btn btn-dark px-3" @click="goToAbout">Go to about</button>
    <button class="btn btn-outline-light bg-dark mx-2" @click="back">Back</button>
    <button class="btn btn-outline-light bg-dark mx-2" @click="next">Next</button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
 
    const name = "Inioluwa";
    const age = ref(25);
    const students = ['Inioluwa', 'Dotun', 'Kenny', 'Oluwa'];
    const day = 'Monday';
    const date = new Date();

    const condition = ref(false);

    const show = ref(false);
    const userInput = ref('');

    const IncreaseNum = ()=>{
        age.value++;
    }

    const router = useRouter();

    const back = () => {
      router.go(-1);
    }

    const next = () => {
      router.go(1);
    }

    const goToAbout = () => {
      // router.push('/about-us');
      router.push({ name: 'about' });
    }
</script>

<style>
.div {
  width: 300px;
  height: 300px;
}
</style>
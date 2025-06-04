<template>
  <div>Counter</div>
  <div>{{ counter.count }}</div>
  <button @click="incrementCounter">Increment</button>
</template>

<script>
import { useCounterStore } from '../Stores/counter'
export default {
data(){
    return{
        // allusers:[],
        counter: useCounterStore()
    }
},
methods:{
    incrementCounter(){
        this.counter.increment()
    }
}
}
</script>

<style>

</style>


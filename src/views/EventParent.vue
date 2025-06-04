<template>
  <div class="container-fluid">
    <div class="col-6 mx-auto shadow">
       <span>Parent: {{ count }}</span>
    </div>
    <div class="col-6 mx-auto shadow">
        <ChildEvent @counts="Increase"/>
    </div>
  </div>
</template>

<script>
import ChildEvent from './ChildEvent.vue';

export default {
components:{
    ChildEvent
},
data(){
    return{
        count:0
    }
},
methods:{
    Increase(data){
            this.count=data
    }
}
}
</script>

<style>

</style>
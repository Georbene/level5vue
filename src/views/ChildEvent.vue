<template>
  <div class="text-center text-success">
    {{ count }}
    <!-- ChildEvent -->
     <button class="btn btn-outline-primary" @click="increaseCount">Increase</button>
  </div>
</template>

<script>
export default {
    data() {
        return{
            count: 0
        }
    },
    methods: {
        increaseCount() {
            // this.count++
            this.$emit('counts', this.count)
        }
    }

}
</script>

<style>

</style>
<template>
  <div>Welcome, {{ user.fullname }}</div>
</template>

<script>
export default {
    data() {
        return {
            user: JSON.parse(localStorage.getItem('currentUser'))
        }
    },
    mounted() {
        console.log(this.user);
    }
}
</script>

<style>

</style>
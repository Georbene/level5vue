<template>
  <div>Welcome, {{ user.username }}</div>
  <!-- <button class="btn btn-danger" @click="logout">Logout</button> -->
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('NowUser'))
    }
  },
  mounted() {
    console.log(this.user);
  },

  methods: {
  logout() {
    localStorage.removeItem('NowUser');
    this.$router.push('/log');
  }
}
}
</script>
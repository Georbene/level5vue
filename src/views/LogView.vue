<template>
  <div>
    <h1>Login page</h1>
    <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
    <input type="text" class="form-control my-2" placeholder="username" v-model="username">
    <input type="text" class="form-control my-2" placeholder="Password" v-model="password">
    <button class="btn btn-success" @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      allusers: [],
      errorMsg: ''
    }


  },
  mounted() {
    this.allusers = JSON.parse(localStorage.getItem('alllogusers')) || []
  },
  methods: {
    handleLogin() {
  let user = this.allusers.find(user => user.username === this.username && user.password === this.password)
  if (user) {
    localStorage.setItem('NowUser', JSON.stringify(user))
    this.$router.push({ name: 'dashview', params: { username: user.username } })
  } else {
    this.errorMsg = 'Invalid username or password'
    setTimeout(() => {
      this.errorMsg = ''
    }, 4000);
  }
}
  }
}
</script>
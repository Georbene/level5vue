<template>
  <div class="container">
    <h1>Sign Up</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group mb-2">
        <label for="">Username</label>
        <input type="text" class="form-control" name="username" v-model.trim="username">
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

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      allusers: []
    }
  },
  mounted() {
    this.allusers = JSON.parse(localStorage.getItem('alllogusers')) || []
  },
  methods: {
    handleSubmit() {
      let obj = {
        username: this.username,
        password: this.password
      }
      if (this.allusers.find(user => user.username === obj.username)) {
        alert('Username already exists')
        return
      }
      this.allusers.push(obj)
      localStorage.setItem('alllogusers', JSON.stringify(this.allusers))
      localStorage.setItem('NowUser', JSON.stringify(obj))
      alert('User Created Successfully');
      this.$router.push('/log')
    }
  }
}
</script>
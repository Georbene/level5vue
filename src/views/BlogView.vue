<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ getblog.blog_content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.title,
      allblogs: JSON.parse(localStorage.getItem('allblogdetails')),
    }
  },
  computed: {
    getblog() {
      return this.allblogs.find((blog) => blog.blog_id == this.$route.params.id)
    }
  },
  mounted() {
    console.log(this.getblog);
  }
}
</script>
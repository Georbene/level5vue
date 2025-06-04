<template>
    <h1>Dynamic Page</h1>
    <div v-for="blog in allblogs" :key="blog.blog_id" class="shadow col-6 mx-auto p-5">
        <h3 class="text-center my-3 text-success fw-bold fs-3 ">{{blog.title}}</h3>
        <p>{{blog.blog_content.slice(0, 40)}}.....</p>

        <!-- <router-link @click="storeuser(blog)" :to="{name: 'blogview', params:{id: blog.blog_id}}" class="btn btn-outline-success">Read More...</router-link>  -->
         <router-link @click="storeuser(blog)" :to="{name: 'blogview', params:{id: blog.blog_id, title: blog.title}}" class="btn btn-outline-success">Read More...</router-link>

    </div>
  </template>
  
  <script>
  export default {
    methods: {
        storeuser(blog) {
            localStorage.setItem('blogdetails', JSON.stringify(blog))
            console.log(blog);
            
        }
    },
      data() {
          return {
              allblogs: [
                  {blog_id: 1, title:'Housing', blog_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi'
                  },
                  {blog_id: 2, title:'Agriculture', blog_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi'
                  },
                  {blog_id: 3, title:'Sports', blog_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi'
                  },
                  {blog_id: 4, title:'Health', blog_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi'
                  },
                  {blog_id: 5, title:'Education', blog_content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisiLorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatibus unde, vero ea dolore dolorum enim voluptatum doloremque quidem nisi'
                  },
              ]
  
          }
      }, 
      mounted(){
        localStorage.setItem('allblogdetails', JSON.stringify(this.allblogs));
        // console.log(localStorage['allblogdetails']);
        
      }

  }
  </script>
  
  <style>
  
  </style>
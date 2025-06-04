<template>
  <div>Computed Properties</div>
  <p>{{getFullName}}</p>
  <div>
    <ul>
      <li v-for="item in arrayOne" :key="item.name">
        {{item.name}}
        {{item.age}}
        {{item.status}}
      </li>
    </ul>
  </div>
  <div>



  <div>Pallindrome</div>
    <input v-model="input" type="text" placeholder="Enter a word">
    <button @click="checkPalindrome">Check</button>
    <!-- <p>{{isPalindrome}}</p> -->
     <p>{{ this.Palindrome }}</p>

    <!-- <p v-if="isPalindrome">The word "{{ input }}" is a palindrome.</p>
    <p v-else>The word "{{ input }}" is not a palindrome.</p> -->
  </div>
 


</template>

<script>
export default {
  data() {
    return {
      firstName: 'Inioluwa',
      lastName: 'George',
      Palindrome: '',
      arrayOne:[
        {
          name: 'Geroge',
          age: 25,
          status: 'active'
        },
        {
        name: 'Inioluwa',
        age: 25,
        status: 'active'
      },
      {
        name: 'Guller',
        age: 25,
        status: 'inactive'
      },
      {
        name: 'Gavi',
        age: 25,
        status: 'active'
      },
      {
        name: 'Jude',
        age: 25,
        status: 'inactive'
      },
      {
        name: 'Lewy',
        age: 25,
        status: 'active'
      },
      {
        name: 'Rudiger',
        age: 25,
        status: 'inactive'
      }
      
    ],
    input: ''
    }
    

  },
  computed: {
    getFullName() {
      return this.firstName + ' ' + this.lastName
    },
    arrayOne() {
      return this.arrayOne.filter((item) => item.status === 'active')
    },
    isPalindrome() {
    return this.input.toLowerCase();
    // this.Palindrome= '';

    },
    Pall() {
      return this.input.split('').reverse().join('').toLowerCase();
    }
  },
  methods: {
    checkPalindrome() {
      if(this.isPalindrome === this.Pall) {
        this.Palindrome = "this is a pallindrome";
        // console.log("pall");
    } else{
      this.Palindrome = "this is not a pallindrome";
      
      // console.log("not pall");
      
    }
    setTimeout(() => {
      this.Palindrome = '';
    }, 3000);
  }
}
}
</script>

<style>

</style>
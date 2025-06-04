<!-- Child Component -->
<template>
  <div class="child-container">
      <div class="chat-container">
          <h1 class="title">Child View</h1>
          <hr>
          <div class="chat-header">
        <h2 class="chat-title">Chat with Parent</h2>
      </div>
      <div class="chat-body">
        <ul class="message-list">
          <li v-for="(msg, index) in messages" :key="index" class="message">
            {{ msg }}
          </li>
        </ul>
      </div>
      <div class="chat-footer">
        <input type="text" v-model="message" placeholder="Enter your message" class="input-field">
        <button @click="sendMessage" class="send-button">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages'],
  emits: ['newMessage'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$emit('newMessage', this.message)
      this.message = ''
    }
  }
}
</script>

<style>
.child-container {
  width: 90%;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;
  /* display: flex; */
}

.title {
  text-align: center;
  margin-bottom: 20px;
}

.chat-container {
  width: 100%;
  height: 500px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.chat-header {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-title {
  margin: 0;
  padding: 10px;
}

.chat-body {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}

.message-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.message {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.chat-footer {
  padding: 10px;
  background-color: #f0f0f0;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}

.input-field {
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.send-button {
  width: 20%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.send-button:hover {
  background-color: #3e8e41;
}
</style>
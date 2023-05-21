<template>
  <div class="message-composer">
    <textarea type="text" name="message-input" class="message-input" rows="1" @keypress.enter="sendMessage" v-model="messageContent"></textarea>
    <button class="send-btn" @click="sendMessage">
      <img src="https://cdn-icons-png.flaticon.com/512/1933/1933005.png" alt="send-message">
    </button>
  </div>
</template>

<script>
import { formatDate } from "@/store/utils/date"
import { MESSAGE_STATUS } from "@/store/constants"
export default {
  name: 'ComposeMessage',
  components: {
  },
  data () {
    return {
      messageContent: ""
    }
  },
  methods: {
    clearMessageContent () {
      this.messageContent = ""
    },
    sendMessage () {
      const id = (this.$store.state?.messages?.length + 1) || 0
      const messagePayload = {
        id,
        from: this.$store.state?.currentUser || {},
        message: this.messageContent,
        date: formatDate(new Date()),
        status: MESSAGE_STATUS.PENDING
      }

      this.$store.dispatch("sendNewMessage", {message: messagePayload}).then(() => {
        this.clearMessageContent()
      })
    }
  }
}
</script>

<style scoped>
.message-composer {
  display: flex;
  align-items: center;
  gap: 12px;
}
.message-input {
  flex: 1;
  box-sizing: border-box;
  height: 100%;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 0%;
}
.send-btn {
  height: 100%;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  margin-right: 12px;
}
.send-btn img {
  width: 25px;
}
</style>

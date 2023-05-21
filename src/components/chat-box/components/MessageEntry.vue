<template>
  <div>
    <div :class="{'message-entry': true, 'my-message-entry': isMyMessage}">
      <img v-if="!isMyMessage" :src="userProfileImage" :alt="fromUser.firstName" class="user-thumbnail">
      <div :class="{'message-bubble': true, 'my-message-content': isMyMessage}">
        <p>{{messageContent}}</p>
        <span class="message-status" :style="{color: messageFailed ? 'red' : ''}">{{messageStatus}}</span>
      </div>
      <img v-if="isMyMessage" :src="userProfileImage" :alt="fromUser.firstName" class="user-thumbnail">
    </div>
  </div>
</template>

<script>
import { MESSAGE_STATUS } from "@/store/constants"

export default {
  name: 'MessageEntry',
  props: {
    message: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    fromUser () {
      return this.message?.from || {}
    },
    userProfileImage () {
      return this.fromUser?.thumbnail || ""
    },
    messageContent () {
      return this.message.message
    },
    messageStatus () {
      return this.message.status
    },
    messageFailed () {
      return this.messageStatus === MESSAGE_STATUS.FAILED
    },
    isMyMessage () {
      return this.$store.getters.currentUserId === this.fromUser.id
    }
  }
}
</script>

<style scoped>
.message-entry {
  margin: 8px 0;
  padding: 0 8px;

  display: flex;
  align-items: flex-end;
  gap: 12px;
  justify-content: flex-start;
}
.my-message-entry {
  justify-content: flex-end;
}
.user-thumbnail {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: lightgrey;
}
.message-bubble {
  margin: 0;
  background: #e5e5e5;
  border-radius: 8px;
  padding: 8px;
  width: 60%;
  position: relative;
}
.message-bubble p {
  margin: 0
}
.my-message-content {
  background: skyblue;
}
.message-status {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 12px;
  text-transform: capitalize;
}
</style>

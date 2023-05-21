<template>
  <div :class="{'message-entry': true, 'my-message-entry': isMyMessage}">
    <img v-if="!isMyMessage" :src="userProfileImage" :alt="fromUser.firstName" class="user-thumbnail">
    <p :class="{'message-bubble': true, 'my-message-content': isMyMessage}">
      {{messageContent}}
    </p>
    <img v-if="isMyMessage" :src="userProfileImage" :alt="fromUser.firstName" class="user-thumbnail">
  </div>
</template>

<script>

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
}
.my-message-content {
  background: skyblue;
}
</style>

<template>
  <div id="conversation-area">
    <message-entry v-for="message in messages" :message="message" :key="message.id" ></message-entry>
  </div>
</template>

<script>
import MessageEntry from "./MessageEntry"

export default {
  name: 'ConversationArea',
  components: {
    MessageEntry
  },
  mounted () {
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style scoped>
</style>

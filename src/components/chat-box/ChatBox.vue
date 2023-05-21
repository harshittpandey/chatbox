<template>
  <div class="chat-box" :style="{width: containerWidth, height: containerHeight}">
    <conversation-area class="conversation-area-container"></conversation-area>
    <compose-message class="compose-message-container"></compose-message>
  </div>
</template>

<script>
import ConversationArea from "./components/ConversationArea"
import ComposeMessage from "./components/ComposeMessage"

const DEFAULT_CONTAINER_WIDTH = "500px"
const DEFAULT_CONTAINER_HEIGHT = "400px"

export default {
  name: 'ChatBox',
  components: {
    ConversationArea,
    ComposeMessage
  },
  props: {
    containerWidth: {
      type: String,
      default: DEFAULT_CONTAINER_WIDTH
    },
    containerHeight: {
      type: String,
      default: DEFAULT_CONTAINER_HEIGHT
    }
  }
}
</script>

<style scoped>
.chat-box {
  box-sizing: border-box;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  gap: 10px
}

.chat-box .conversation-area-container {
  flex: 1;
  height: calc(100% - 50px);
  overflow: scroll;
  border: 1px solid grey;
}

.chat-box .compose-message-container {
  border: 1px solid green;
  height: 40px
}

</style>

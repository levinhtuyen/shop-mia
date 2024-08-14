<template>
  <div class="chat-container">
    <span
      class="chat-menu__item"
      style="
        display: flex;
        align-items: flex-end !important;
        justify-content: flex-end !important;
      "
    >
      <div class="mt-tooltip">
        <span class="chat-button chat-button--circle facebook" @click="onChatFace()"
          ><span class="rounded-full"
            style="
              background-color: #ffffff;
              opacity: 1;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0px;
              left: 0px;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
              z-index: -1;
            "
          ></span
          ><img
            alt="url"
            src="@/assets/messenger.png"
            class="chat-button__icon chat-button__icon--motion"
          /><span class="chat-button__label" style="color: #cf4e10"
            >Facebook Chat</span
          ></span
        >
      </div>
    </span>
    <span
      class="chat-menu__item"
      style="
        display: flex;
        align-items: flex-end !important;
        justify-content: flex-end !important;
      "
    >
      <div class="mt-tooltip">
        <span class="chat-button chat-button--circle zalo" @click="onChatZalo()"
          ><span class="rounded-full"
            style="
              background-color: #ffffff;
              opacity: 1;
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0px;
              left: 0px;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
              z-index: -1;
            "
          ></span
          ><img
            alt="url"
            src="@/assets/zalochat.png"
            class="chat-button__icon"
          /><span class="chat-button__label" style="color: #cf4e10"
            >Zalo Chat</span
          ></span
        >
      </div>
    </span>
  </div>
</template>

<script lang="ts" setup>

const router = useRouter()
const onChatFace = () => {
  console.log('face');
  let href = 'https://www.messenger.com/t/404638292728697'
  window.open(href, '_blank')
}
const onChatZalo = () => {
  console.log('face');
  let href = ' http://zalo.me/0338524407'
  window.open(href, '_blank')
}
</script>

<style lang="scss" scoped>
.chat-container {
  position: fixed;
  right: 24px;
  bottom: 100px;
  z-index: 2147483646;
  pointer-events: none;
  box-sizing: border-box;
  .chat-menu__item {
    pointer-events: auto;
    .mt-tooltip {
        display: inline-flex;
        position: relative;
        justify-content: center;
        align-items: center;
    }
    .chat-button {
      display: flex;
      align-items: center;
      align-self: stretch;
      padding: 0 10px;
      flex-direction: row;
      cursor: pointer;
      position: relative;
      justify-content: flex-start;
      border-radius: 3px;
      height: 60px;
      margin: 10px 5px;
    }
    .chat-button.chat-button--circle {
      margin: 4px 5px !important;
      border-radius: 50% !important;
    }
    .facebook.chat-button.chat-button--circle {
      .chat-button__icon {
        margin: 0;
        transition: margin-right 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .chat-button__icon--motion {
        animation: tada 1.2s infinite;
      }
      .chat-button__icon {
        width: 40px;
        height: 40px;

        box-sizing: border-box;
      }
      .chat-button__label {
        width: 0;
        overflow: hidden;
        transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        text-overflow: clip;
      }
      .chat-button__label {
        font-size: 18px;
        line-height: 20px;
      }
      &:hover .chat-button__label {
        width: 168px;
        margin-left: 20px;
      }
    }
    .zalo.chat-button.chat-button--circle {
      .chat-app--circle-bottom-right {
        align-items: flex-end;
        justify-content: flex-end;
      }

      .chat-app--circle {
        height: 100vh;
        width: 100% !important;
        flex-direction: column;
        padding: 8px;
      }
      .chat-button__icon {
        margin: 0;
        transition: margin-right 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .chat-button__icon--motion {
        animation: tada 1.2s infinite;
      }
      .chat-button__icon {
        width: 40px;
        height: 40px;

        box-sizing: border-box;
      }
      .chat-button__label {
        width: 0;
        overflow: hidden;
        transition: width 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        white-space: nowrap;
        text-overflow: clip;

      }
      .chat-button__label {
        font-size: 18px;
        line-height: 20px;
      }
      &:hover .chat-button__label {
        width: 168px;
        margin-left: 20px;
      }
    }
  }
}
</style>

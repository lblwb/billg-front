<template>
  <div
    class="modal"
    @blur="close_btn"
    :class="{ modal_full: status_view !== 'default' }"
  >
    <div
      class="modal_close_btn"
      style="
        width: 26px;
        height: 26px;
        position: absolute;
        right: 8px;
        top: 10px;
        border-radius: 24px;
        /* background: #222; */
        background: var(--bg-base);
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <button
        style="
          background: none;
          border: none;
          color: var(--color-base);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        "
        @click="close_btn"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3332 2.5465L17.4532 0.666504L9.99984 8.11984L2.5465 0.666504L0.666504 2.5465L8.11984 9.99984L0.666504 17.4532L2.5465 19.3332L9.99984 11.8798L17.4532 19.3332L19.3332 17.4532L11.8798 9.99984L19.3332 2.5465Z"
            fill="#A1A3AB"
          ></path>
        </svg>
      </button>
    </div>

    <div class="modal_heading" style="margin-top: 24px">
      <slot name="heading">
        <div
          class="modal__title"
          style="
            padding: 25px 20px;
            text-align: center;
            font-size: 18px;
            font-weight: 500;
            color: var(--color-base);
          "
        >
          <slot name="heading_title">Title</slot>
        </div>
      </slot>
    </div>

    <!-- <button type="button" class="btn-close" @click="close">x</button> -->

    <div class="modal__body">
      <slot name="body"> This is the default body! </slot>
    </div>

    <!-- <div class="modal__bg_wrapper">
      <slot name="bg_wrapper"> BG </slot>
    </div> -->

    <div class="modal__footer">
      <slot name="footer">
        <div class="modal__footer_action">
          <div class="footer_action__btn footer_action_btn_success">
            <button @click="action_btn">
              <slot name="action_btn_text">Действие</slot>
            </button>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
export default {
  emit: ["action_button", "close_button"],
  //
  props: ["title_center", "status_view"],
  methods: {
    scrollFixedToggle(status = true) {
      document.documentElement.style.overflow = status ? "hidden" : "auto";
      //   document.documentElement.style.overflow = "auto";
    },
    async close_btn() {
      this.$emit("close_button");
    },
    async action_btn() {
      this.scrollFixedToggle(false);
      //
      this.$emit("action_button");
      //
    },
    mounted() {
      this.scrollFixedToggle(true);
    },
  },
};
</script>
<style>
.modal {
  /* background: #0a0a0a; */
  background: var(--bg-block);
  max-width: 456px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  color: #fff;
  /*  */
  transform: translateY(-150%);
  animation: ani 0.2s both;
}

@keyframes ani {
  0% {
    transform: translateY(-150%);
  }

  100% {
    transform: translateY(0);
  }
}

.modal.modal_full {
  /* min-height: 525px; */
}

.modal__header {
  margin-bottom: 45px;
  /* color: #ffffff; */
  color: var(--color-base);
  padding: 40px 30px 30px;
  position: relative;
}

/* .modal__header.modal__header_success {
    min-height: 130px;
    background: #28283f;
    padding: unset;
    text-align: center;
    margin-bottom: 32px;
  } */

.modal__header .header_content {
  text-align: center;
}

.modal__header.modal__header {
  min-height: 130px;
  padding: unset;
  text-align: center;
  margin-bottom: 32px;
  background: #28283f;
}

.modal__header.modal__header.modal__header_success
  .header_content
  .header_content__title {
  font-size: 14px;
  line-height: 29px;
  color: #06cb70;
}

.modal__header.modal__header.modal__header_info
  .header_content
  .header_content__title {
  font-size: 14px;
  line-height: 29px;
  color: #2787f5;
}

.modal__header.modal__header.modal__header_wait
  .header_content
  .header_content__title {
  font-size: 14px;
  line-height: 29px;
  color: #00c696;
}

.modal__header.modal__header.modal__header_failed
  .header_content
  .header_content__title {
  font-size: 14px;
  line-height: 29px;
  color: #ff5630;
}

.modal__header.modal__header .header_content {
  padding: 20px 0;
}

.modal__header .header_content .header_content__title {
  font-family: "Inter", sans-serifs;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 29px;
  /* or 121% */
  color: #ffffff;
}

.modal__header .header_content .header_content__title.title_center {
  text-align: center;
}

.modal__header .subtitle_content__title {
  color: #000;
}

.modal__header .header_status_panel {
  position: absolute;
  bottom: -30px;
  right: 0;
  left: 0;
}

.modal__header .header_status_panel .heading_status_panel_wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.modal__header .header_status_panel .header_status_panel_bordered {
  border: solid 2px transparent;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.171);
  /*  */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__header
  .header_status_panel
  .header_status_panel_bordered
  .bordered__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__header
  .header_status_panel
  .header_status_panel_bordered
  .bordered__icon
  svg {
  width: 32px;
  height: 32px;
}

.modal__footer .modal__footer_action {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.footer_action__btn {
  width: 100%;
  /* padding: 40px 30px 30px; */
  padding: 20px 30px;
  display: block;
  /* padding: 0 15px; */
  box-sizing: border-box;
}

.footer_action__btn.footer_action_btn_success button {
  background: #00d972;
  color: #161c27;
}

.footer_action__btn button {
  width: 100%;
  /* background: #222; */
  border-radius: 15px;
  background-color: #0000;
  padding: 10px 20px;
  border: none;
  /*  */
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14.5px;
  line-height: 29px;
  /*  */
  /* color: #fff; */
  color: #9d9d9d;
  transition: color 0.4s ease-in-out 2s;
  border: 1px solid #737373;
  /*  */
  text-align: center;
  cursor: pointer;
}

.footer_action__btn button:hover,
.footer_action__btn button:focus,
.footer_action__btn button:active {
  background-color: #222;
  color: #fff;
  opacity: 0.9;
}

.modal__body {
  /* padding: 0 50px;    */
  padding: 0 30px;
  min-height: 35px;
  /* style="min-height: 502px" */
}

.modal__bg_wrapper {
  margin-top: 10px;
  background: #28283f;
  color: #4e5d78;
  padding: 12px 50px;
}

.modal__bg_wrapper .block_info {
  margin-bottom: 20px;
}

.modal__bg_wrapper .block_info .block_info__title {
  margin-bottom: 10px;
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 29px;

  color: #4e5d78;
}

.modal__bg_wrapper .block_info .block_info__content {
  font-family: "IBM Plex Sans", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1px;

  color: #ffffff;
}
</style>

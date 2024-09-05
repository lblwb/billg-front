<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "modalEdit",
    props: {
        isOpen: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        isModalOpen() {
            return this.isOpen;
        }
    },
    watch: {
        isOpen(value) {
            if (value) {
                this.disableBodyScroll();
            } else {
                this.enableBodyScroll();
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
        disableBodyScroll() {
            document.body.style.overflow = 'hidden';
        },
        enableBodyScroll() {
            document.body.style.overflow = '';
        },
        closeOnEsc(event) {
            if (event.key === 'Escape') {
                this.closeModal();
            }
        }
    },
    mounted() {
        document.addEventListener('keydown', this.closeOnEsc);
    },
    beforeDestroy() {
        document.removeEventListener('keydown', this.closeOnEsc);
    },
})
</script>

<template>
    <div class="modalWrapper" v-if="isModalOpen" @keydown.esc="closeOnEsc">
        <div class="modal-overlay" @click="closeModal">
        </div>

        <div class="modal-content">
            <button class="close-btn" @click="closeModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                     class="icon icon-tabler icons-tabler-outline icon-tabler-x">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M18 6l-12 12"/>
                    <path d="M6 6l12 12"/>
                </svg>
            </button>
            <!-- Your modal content goes here -->
            <slot></slot>
        </div>
    </div>

</template>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal-content {
    position: fixed;
    background: #111;
    padding: 20px;
    min-width: 20vw;
    min-height: 10vw;
    max-width: 26vw;
    border-radius: 18px;
    z-index: 20;
    top: 28vh;
    left: 0;
    right: 0;
    bottom: auto;
    margin-right: auto;
    margin-left: auto;
}

.close-btn {
    position: absolute;
    top: -28px;
    right: -28px;
    background: var(--primaryBlurBg);
    border: solid 1px #333;
    color: #fff;
    font-size: 18px;
    border-radius: 18px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.close-btn:hover,
.close-btn:focus {
    opacity: 0.7;
}
</style>
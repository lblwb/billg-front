<template>
    <div class="inputRangeBlock" style="">
        <div class="value-text" style="font-size: 16px;font-weight: 500;">{{ result }} {{ count_text }}</div>

        <div class="inputContainer"
             style="">
<!--            {{step}}-->
            <vue-slider
                    v-model="result"
                    :adsorb="false"
                    :interval="step"
                    :process="false"
                    :order="false"
                    :min="minValue ?? minValue"
                    :max="maxValue ?? maxValue"
                    tooltip="none"
                    style="z-index: 4; width: 90%; margin: 0 auto; transform: translateX(-3%);"
                    rail-style="height: 1px; background: #686767; bottom: -2px"
                    @change="changeData"
                    dot-style=""
            />
        </div>

    </div>
</template>

<script>
import VueSlider from 'vue-slider-component';

import 'vue-slider-component/theme/antd.css'

export default {
    props: {
        step: {
            type: Number,
            default: 1
        },
        minValue: {
            type: Number,
            default: 1
        },
        maxValue: {
            type: Number,
            default: 0
        },
        result: {
            type: Number,
            default: 0
        },
        count_text: {
            type: String,
            default: "Количество"
        },
        price_unit: {
            type: Number,
            default: 0
        }
    },
    watch: {
        minValue: {
            handler: function (val, oldVal) {
                this.result = this.minValue;
                this.changeData();
            },
            deep: true
        },
        // Result: {
        //     handler: function (val, oldVal) {
        //         this.changeData();
        //     },
        //     deep: true
        // },
    },
    data() {
        return {
            // Result: this.minValue,  // Начальное значение
            marks: {}
        };
    },
    methods: {
        changeData() {
            console.log('changeData', this.result);
            // this.$emit("input", this.result);
            this.$emit("input", {price: this.price_unit * this.result, value: this.result});
        }
    },
    created() {
        this.result = this.minValue;
        this.$emit("input", {price: this.price_unit * this.result, value: this.result});
    },
    components: {
        VueSlider
    }
};
</script>

<style scoped>
.value-text {
}


.inputRangeBlock {
    display: flex;
    border-radius: 16px;
    border: solid 1px #686767;
    background: #fff;
    padding: 10px 16px;
    box-sizing: border-box;
    width: 100%;
    min-width: 71vh;
    position: relative;
}

[data-theme="dark"] .inputRangeBlock{
    background: none!important;
    border: solid 1px var(--primaryBg)!important;
    color: var(--primaryBg);
}

@media screen and (max-width: 960px) {
    min-width: unset!important;
}


.inputContainer {
    position: absolute;
    right: auto;
    left: auto;
    box-sizing: border-box;
    transform: translateY(50%);
    bottom: 0;
    width: 100%;
    z-index: 2;
}
</style>

<style>

.vue-slider-dot-handle {
    border: 2px solid #434343;
    height: 14px;
    width: 19px;
    background: #1CDEA7;
    border-radius: 16px;
}

.vue-slider-dot-handle:hover,
.vue-slider-dot-handle:focus {
    border: 2px solid #000;
}

.vue-slider:hover .vue-slider-dot-handle:hover {
    border: 2px solid #000;
}

.vue-slider-dot-handle-focus {
    border: 2px solid #000;
    box-shadow: 0 0 0 5px rgba(27, 204, 154, 0.28);
}


.vue-slider:hover .vue-slider-dot-handle-focus {
    border: 2px solid #000;
}

.vue-slider-dot-handle:hover {
    border: 2px solid #000;
}

.vue-slider:hover .vue-slider-dot-handle:hover {
    border: 2px solid #000;
}
</style>

<template>
    <div class="inputTextBlock">
        <!--        <input type="hidden"-->
        <!--               :value="form.tariff.params[paramInput.option_name.toLowerCase()] !== null ?? form.tariff.params[paramInput.option_name.toLowerCase()]['price']"-->
        <!--               v-model="paramInput ?? paramInput.price_unit['rub']">-->

        <!--        <input type="url" v-if="">-->

        <input type="text" :placeholder="placeholder"
               ref="compInput"
               :type="optionInputType"
               :value="internalValue"
               @input="updateInternalValue($event)"
               required/>
    </div>
  <!--               @change="changeData"-->

  <!--                                                    {{form.tariff.params[paramInput.option_name.toLowerCase()] ?? (form.tariff.params[paramInput.option_name.toLowerCase()].price = paramInput.price_unit['rub'])}}-->

</template>
<script>
import {defineComponent} from 'vue'
import _debounce from 'lodash/debounce'

export default defineComponent({
    name: "TextInput",
    data: {
        internalValue: "",
        inputData: ""
    },
    props: {
        price_unit: {
            type: Number,
            default: 0
        },
        placeholder: {
            type: String,
            default: ""
        },

        resultText: {
            type: String,
            default: ""
        },
        resultPrice: {
            type: Number,
            default: 0
        },

        optionInputType: {
            type: String,
            default: "text"
        },

        optionSlug: {
            type: String,
            default: ""
        },
        optionInputPattern: {
            type: String,
            default: ""
        }
        // unit_name: {
        //     type: String,
        //     default: ""
        // }
    },
    watch: {
        // inputData: {
        //     handler: function (val, oldVal) {
        //         this.onChangeData(val);
        //     },
        //     deep: true
        // },
        // Result: {
        //     handler: function (val, oldVal) {
        //         this.changeData();
        //     },
        //     deep: true
        // },
    },
    methods: {
        updateInternalValue(event) {
            this.touched = true
            this.updateValue(event.target.value)
        },
        updateValue: _debounce(function (value) {
            let isValid = false;

            //
            this.internalValue = value;
            this.resultPrice = this.price_unit;

            //Check Pattern
            if (this.optionInputPattern !== undefined && this.optionInputPattern != "") {
                const regexPattern = new RegExp(this.optionInputPattern);
                isValid = regexPattern.test(this.internalValue);
            } else {
                isValid = true
            }


            // console.log(regexPattern, isValid);
            if (isValid) {
                // Валидация прошла успешно
                // Здесь вы можете отправить данные на сервер, например, с использованием Axios
                // и выдать уведомление об успешной отправке

                //
                this.$emit("input", {
                    price: this.resultPrice,
                    value: this.internalValue,
                    slug: this.optionSlug
                });

                this.$toast.success('Всё в порядке :)');
            } else {
                this.$emit("input", {
                    price: 0,
                    value: "",
                    slug: this.optionSlug
                });
                // Валидация не прошла
                this.$toast.error('Усп! Что-то тут не правильно :(');
            }

        }, 600),
    },
    created() {
        if (this.optionInputType === "url") {
            this.internalValue = "youdomain.com";
        }
        this.resultPrice = this.price_unit;
        //
        this.$emit("input", {
            price: this.resultPrice,
            value: this.internalValue,
            slug: this.optionSlug
        });
    }
})
</script>

<style scoped>
.inputTextBlock input {
    display: flex;
    border-radius: 16px;
    border: solid 1px #686767;
    background: #fff;
    padding: 10px 16px;
    box-sizing: border-box;
    width: 100%;
    min-width: 71vh;
    position: relative;
    font-size: 16px;
    font-weight: 500;
}

@media screen and (max-width: 960px) {
    .inputTextBlock input {
        min-width: unset !important;
    }
}
</style>
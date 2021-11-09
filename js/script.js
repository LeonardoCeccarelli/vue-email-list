"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        emailList: [],
        counterApiCalls: 0,
    },

    methods: {
        getApiEmailList() {

            this.counterApiCalls = 0

            this.emailList = []

            const url = "https://flynn.boolean.careers/exercises/api/random/mail"

            for (let i = 0; i < 10; i++) {

                this.counterApiCalls++

                axios.get(url).then((ajaxResponse) => {
                    this.emailList.push(ajaxResponse.data.response)
                })
            }
        }
    },
})
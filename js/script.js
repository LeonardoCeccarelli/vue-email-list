"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        emailList: [],
    },

    methods: {
        getApiEmailList() {

            // this.emailList = []

            // let counterApiCalls = 0

            const verifiedArray = []

            const url = "https://flynn.boolean.careers/exercises/api/random/mail"

            for (let i = 0; i < 10; i++) {

                axios.get(url).then((ajaxResponse) => {
                    // counterApiCalls++
                    verifiedArray.push(ajaxResponse.data.response)

                    if (verifiedArray.length === 10) {
                        this.emailList = verifiedArray
                    }
                })
            }
        }
    },
})
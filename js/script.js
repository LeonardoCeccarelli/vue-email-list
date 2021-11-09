"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        emailList: [],
        counterApiCalls: 0,
    },

    methods: {
        getApiEmailList(array) {

            const url = "https://flynn.boolean.careers/exercises/api/random/mail"

            for (let i = 0; i < 10; i++) {

                axios.get(url).then((ajaxResponse) => {
                    array.push(ajaxResponse.data.response)
                })
            }

            console.log(this.emailList);
        }
    },
})
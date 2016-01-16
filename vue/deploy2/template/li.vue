<template>
    <li v-for="ite in items">
        {{ite.message}}
    </li>
</template>

<script>
    export default{
        ready:function(){
            this.$http.get("./test1.json").then(function (response) {
                this.$set("items", response.data)
            }, function (response) {
            });
        },
        data(){
            return{
                items: ""
            }
        }
    }
</script>
<template>
    <!--<div>{{msg}}</div>-->
    <div v-for="day in msg.List">
        <span>{{day.Day}}</span>
        <div v-for="list in day.List">
            <!--<span>{{list.BlockStart}}</span>-->
            <div v-for="info in list.List">
                <span>{{info.bctime}}</span>
                <span>{{info.name}}</span>
            </div>
        </div>
    </div>


</template>
<style>
</style>
<script>
    export default{
        ready: function () {
            this.$http.get("./list.json").then(function (response) {
                this.$set("msg",response.data)
            }, function (response) {

            })
        },
        data(){
            return {
                msg: {}
            }
        }
    }
</script>
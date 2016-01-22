<template>
    <!--<div>{{msg}}</div>-->
    <div v-for="day in msg.List">
        <span class="time">{{day.Day}}</span>
        <div v-for="list in day.List">
            <!--<span>{{list.BlockStart}}</span>-->
            <div v-for="info in list.List">
                <span>{{info.bctime}}</span>
                <span>{{info.name}}</span>
            </div>
        </div>
    </div>


</template>
<style >
.time{ width:100%; height:40px;display: block; line-height:40px;}
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
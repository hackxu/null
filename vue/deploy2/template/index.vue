<template>
        <li v-for="ite in items">
            {{ite.message}}
        </li>
        <table cellpadding="1" cellspacing="1">
            <tr v-for="book in books ">
                <td>{{book.id}}</td>
                <td>{{book.name}}</td>
                <td>{{book.author}}</td>
                <td>{{book.price}}</td>
            </tr>
        </table>
</template>
<script>
//    require("!css!sass!../css/one.scss");
//require("style!css../css/css.css");
//import css from "../css/css.css";
import one from "../css/one.scss";
    export default {
        ready: function () {
            this.$http.get("./test1.json").then(function (response) {
                this.$set("items", response.data)
            }, function (response) {
            });
            this.$http.get("./test2.json").then(function (response) {
                this.$set("books", response.data)
            }, function (response) {
            });
        },
        data() {
            return {
                items: "",
                books: ""
            }
        }
    }
</script>
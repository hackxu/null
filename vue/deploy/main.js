/**
 * Created by bluexu on 16/1/14.
 */
require.config({
    baseUrl:"deploy",
    paths :{
        "vue":"../common/js/vue",
        "one":"js/one",
        "jquery":"js/jquery"
    }
});

require(["vue","one","jquery"]);

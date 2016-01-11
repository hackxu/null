/**
 * Created by bluexu on 16/1/4.
 */
function getBasePath() {
    var nodes = document.getElementsByTagName("script");
    if (window.VBArray) {
        for (var i = 0, node; node = nodes[i++];) {
            if (node.readyState === "interactive") {
                break;
            }
        }
    } else {
        node = nodes[nodes.length - 1]
    }
    var src = document.querySelector ? node.src : node.getAttribute("src", 4);
    return src;
}

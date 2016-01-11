/**
 * Created by bluexu on 16/1/4.
 */
function mix(target, source) {
    var args = [].slice().call(arguments), i = 1, key,
        ride = typeof args[args.length - 1] == "boolean" ? args.pop() : true;
    if (args.length === 1) {
        target = !this.window ? this : {};
        i = 0;
    }
    while ((source = args[i++])) {
        for (key in source) {
            if (ride || !(key in target)) {
                target[key] = source[key]
            }
        }
    }
    return target;
}
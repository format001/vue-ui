export default {
    getInfo(state, get) {
        console.log(state, get)
        return function (a) {
            console.log(a)
            return 1231231;
        };
    }
}

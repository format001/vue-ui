export default {
    changeCityInfo (state, index) {
        state.curIdx = index;
    },
    setUserInfo (store, userInfo) {
        console.log(userInfo)
        store.userInfo = userInfo;
    }
}
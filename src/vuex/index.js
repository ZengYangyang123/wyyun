//数据仓库对象(Vue插件)
// let Vue = null
// let store = null
// export const mapState = (stateKeys = []) => {
    
//     return stateKeys.reduce((prev,key) =>{
//         prev[key] = function () {
//             return store.state[key]
//         }
//     },{})
// }

// export default {
//     Store:class {
//         constructor({ state={} }){
//             this.state = Vue.observable(state)
//         }
//     },
//     install(_Vue){
//         Vue = _Vue
//         Vue.mixin({
//             created() {
//                 if(!this.$parent) {
//                     Vue.prototype.$store = this.$options.store
//                     store = this.$options.store
//                 }
//             }
//         })

//     }
// }
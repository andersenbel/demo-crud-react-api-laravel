import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import { createStore } from 'vuex'
import router from "./router"
import store from "./store";

// const store = createStore({
//     state() {
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     }
// })
const app = createApp(App).use(store).use(router)
app.mount('#app')
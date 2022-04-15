import { createApp } from 'vue'
import App from './App.vue'
import ScrollPicker from "vue3-scroll-picker"

const app = createApp(App);
app.use(ScrollPicker);
app.mount('#app')


//createApp(App).mount('#app')
//App.use(ScrollPicker);


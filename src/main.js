import { createApp } from 'vue'
import App from './App.vue'
// import Home from './views/Home.vue'
import Mermaid from 'mermaid'
import { router } from './route/route.js'

const app = createApp(App);

// Home.use(Mermaid); // Use Mermaid as a Vue plugin
app.use(Mermaid); // Use Mermaid as a Vue plugin
app.use(router); // Use the router

app.mount('#app');

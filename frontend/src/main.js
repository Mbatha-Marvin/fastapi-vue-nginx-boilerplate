import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios';
import './style.css';


const app = createApp(App)

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000';  // the FastAPI backend


app.use(router)
app.mount('#app')

import Vue from 'vue'
import '@inkline/inkline/dist/inkline.css';
import Inkline from '@inkline/inkline';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faLinkedinIn, faTwitter, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faEnvelope)
library.add(faGithubAlt)
library.add(faLinkedinIn)
library.add(faTwitter)
library.add(faTelegramPlane)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Inkline);

new Vue({
  render: h => h(App),
}).$mount('#app')

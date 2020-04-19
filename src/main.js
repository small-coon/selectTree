import Vue from 'vue'
import App from './App.vue'
import { Button, Select, Tree, Form, Input, Option, FormItem } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Tree.name, Tree);
Vue.component(Form.name, Form);
Vue.component(Input.name, Input);
Vue.component(Option.name, Option);
Vue.component(FormItem.name, FormItem);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/* eslint-disable */
import { createApp } from 'vue'
import App from './App.vue'
import Dialog from 'primevue/dialog';
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputSwitch from 'primevue/inputswitch'
import InputText from 'primevue/inputtext'
import Ripple from 'primevue/ripple'
import MultiSelect from 'primevue/multiselect';
import StyleClass from 'primevue/styleclass'
import Image from 'primevue/image'
import Card from 'primevue/card';
import Chip from 'primevue/chip';
import Dropdown from 'primevue/dropdown';
import Toast from 'primevue/toast';
import Panel from 'primevue/panel';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import ProgressSpinner from 'primevue/progressspinner';
import ProgressBar from 'primevue/progressbar';

import router from './router'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css' 

const app = createApp(App);

app.use(PrimeVue).use(router);

app.component('TabPanel',TabPanel);
app.component('TabView',TabView);
app.component('MultiSelect',MultiSelect);
app.component('Accordion',Accordion);
app.component('Divider',Divider);
app.component('AccordionTab',AccordionTab);
app.component('Panel',Panel);
app.component('Toast',Toast);
app.component('Dropdown', Dropdown);
app.component('Chip', Chip);
app.component('Card', Card);
app.component('Dialog', Dialog);
app.component('InputSwitch', InputSwitch);
app.component('Button', Button);
app.component('InputText', InputText)
app.component('ProgressSpinner', ProgressSpinner);
app.component('ProgressBar', ProgressBar);
app.component('Image', Image)
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);

app.mount('#app');
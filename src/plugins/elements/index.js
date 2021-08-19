import Vue from 'vue';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/packages/theme-chalk/lib/index.css';
import {
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
} from 'element-ui';

// вносим всеотдельные элементы в массив
const elements = [
    Button,
    Card,
    Form,
    FormItem,
    Input,
    Select,
    Option,
    Alert
];

// активируем английский язык для element-ui
locale.use(lang);

// устанавливаем глобальность использования элементов массива
elements.forEach(el => Vue.use(el, { locale }));
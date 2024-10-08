
      
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export const alertToastify = (message='',type='success') => {
toast(message,{
    theme:'colored',
    type,
    autoClose:3000,
    transition:'slide'
})
}


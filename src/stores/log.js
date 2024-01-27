import { defineStore } from 'pinia'
import {ref} from "vue";
import { useGlobalStore } from './global';
import { useRequestsStore } from './request';
import { useToast } from 'vue-toast-notification';
import {storeToRefs} from "pinia";
import axios from 'axios';



export const useLogStore = defineStore("log", ()=>{
 var {globalUrl} = storeToRefs(useGlobalStore());
 var {request} = storeToRefs(useRequestsStore());
 
 var showLogs = ref(false)
 var toast = useToast();
   
 var logs = ref([])

    function getLogs(id){
        toast.info("Getting logs");
         debugger
        var data = new FormData();
        data.append("id", id); 
     axios.post(globalUrl.value + "getLogs", data).then((response)=>{
        toast.clear()
        debugger
        logs.value = response.data;
     }).catch((error)=>{
        toast.clear()
        toast.warning(error)
     });
    
    }

     
    return {
        logs,
        showLogs, 
        getLogs
    }
}, {
  persist:true
})



import { defineStore } from 'pinia'
import {ref} from "vue";

import axios from 'axios';



export const useGlobalStore = defineStore("global", ()=>{
 var globalUrl = ref("http://192.168.1.15:5266/")


 return {
  globalUrl
 }
 
}, {
  persist:true
})



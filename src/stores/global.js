import { defineStore } from 'pinia'
import {ref} from "vue";

import axios from 'axios';



export const useGlobalStore = defineStore("global", ()=>{
 var globalUrl = ref("http://localhost:5266/")
 var frontUrl = ref("http://localhost:5173/#/")


 return {
  globalUrl,
  frontUrl
 }
 
}, {
  persist:true
})



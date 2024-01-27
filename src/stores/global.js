import { defineStore } from 'pinia'
import {ref} from "vue";

import axios from 'axios';



export const useGlobalStore = defineStore("global", ()=>{
 var globalUrl = ref("http://localhost:5266/")


 return {
  globalUrl
 }
 
}, {
  persist:true
})



import { defineStore, storeToRefs } from 'pinia'
import { useGlobalStore } from './global';
import {ref, computed} from "vue"
import {useToast} from 'vue-toast-notification';


import axios from 'axios';

import {useRouter, useRoute} from 'vue-router'




export const useHelperStore = defineStore("helper", ()=>{

var travelMode = ref([
    "plane",
    "car",
    "bus",
    "train",
    "ship",
    "helicopter",
    
  
])


var initiatedValues = ref([
    "Yes",
    "No"
])


var userTypes = ref([
    "normal",
    "admin",
    "auditor",
    "manager"
])










return {
    travelMode,
    initiatedValues,
    userTypes
}

})
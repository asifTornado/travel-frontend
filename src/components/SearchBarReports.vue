<template>

    <div class="flex flex-row justify-end items-center space-x-10 w-full pb-[10px] pr-[100px] mt-10 ">
    

     <a :href="globalStore.globalUrl + 'getCSV'" class="bg-green-400 p-2 font-bold border border-solid border-green-900 text-white hover:cursor-pointer" >Download CSV</a>


    <div class="flex flex-row  justify-center elevation-4  bg-white">
    
     <input v-model="searchTerm" type="search" name="" placeholder="Search Request" id="" class="focus:outline-none text-bold  p-3 w-[200px]">
     <div class="flex flex-col  justify-center bg-blue-lighten-2 items-center p-3  hover:cursor-pointer" @click="search"><v-icon class="text-white">mdi-magnify</v-icon></div>
    </div>
    
    </div>
    
    
    
    
    </template>
    
    
    
    <script setup>
    import { ref, computed, defineProps } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useReportStore } from '../stores/report';
    import axios from "axios";
    import { useGlobalStore } from '../stores/global';
    import { useToast } from 'vue-toast-notification';
    
    var props = defineProps(["store"])
    var globalStore = useGlobalStore()
    var {searchTerm} = storeToRefs(props.store())
    var {search} = props.store()
    var toast = useToast()
    
    function downloadCSV(){
         axios.get(globalStore.globalUrl + "getCSV").then((results)=>{
              console.log(results.data)
         }).catch((error)=>toast.warning(error))
    }
    
    
    
    </script>
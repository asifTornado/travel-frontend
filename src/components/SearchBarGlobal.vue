<template>

    <div class="flex flex-row justify-end w-full pb-[10px] pr-[100px] mt-10 ">
    
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
    
    var props = defineProps(["store"])

    var {searchTerm} = storeToRefs(props.store())
    var {search} = props.store()
    
    
    
    
    
    
    </script>
<template>

    <div class="flex flex-row justify-end w-full  pr-[100px] mt-10 ">
    
    <div class="flex flex-row mt-5 justify-center elevation-4 ">
    
     <input v-model="searchTerm" type="search" name="" placeholder="Search Request" id="" class="focus:outline-none text-bold   p-3 w-[200px] bg-white">
     <div class="flex flex-col  justify-center bg-blue-lighten-2 items-center p-3  hover:cursor-pointer" @click="search"><v-icon class="text-white">mdi-magnify</v-icon></div>
    </div>
    
    </div>
    
    
    
    
    </template>
    
    
    
    <script setup>
    import { ref, computed } from 'vue'
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '../stores/users';
    
    
    var {searchTerm} = storeToRefs(useUserStore())
    var {search} = useUserStore()
    
    
    
    
    
    </script>
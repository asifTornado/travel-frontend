<template>

    <v-dialog
    v-model="show"
    width="auto"
    persistent
>
  <img src="../assets/loader.svg" alt="">
  <span class="text-h5 text-black">
    Loading Please Wait...
  </span>
    </v-dialog>
    
    </template>
    
    
    <script setup>
     import {ref} from "vue";


     var show = ref(true)
    
    
    
    
    
    
    
    
    
    </script>
    
    
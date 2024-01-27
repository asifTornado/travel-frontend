<template>
  
     <div  class=" w-full h-full flex flex-row justify-center items-start pl-[35vw]  mt-[40px] ml-[30px]"   id="login">
 
   
   <div class="w-96 h-50 ">
   
   <div style="box-shadow: 10px 10px 1px rgba(0, 0, 0, 0.5)"    class="bg-white drop-shadow-md   rounded-b-md    pb-8  h-auto " id="form">
   
   
   
   <div class="w-full bg-gradient-to-r bg-blue-darken-2 rounded-t-md  text-white font-bold text-start pl-5 p-4 text-4xl">Register</div>
            
   <div class=" px-4 py-4">
   
   
     <v-autocomplete
   label="Select"
   :items="mappedUserEmails"
   v-model="email"
 ></v-autocomplete>
   
   
   </div>
   
   
   <div class="mb-2 px-4">
   
   
    
      <div class="flex flex-row mb-5 mt-3">
       <v-text-field
         name="name"
         label="password"
         id="id"
         type="password"
         v-model="password"
       ></v-text-field>
     
      </div>
     </div>
   
   <div class="flex items-center px-4 justify-between"><button @click="register" class="bg-blue-darken-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Submit</button></div>
   <hr class="border border-solid border-slate-200 mb-5  flex flex-row justify-center items-center ml-5 mt-5" style="width:90%"/>
   
   
   
                <div  class="text-white font-bold  w-full flex flex-row justify-center   items-center h-auto"><button class="bg-green-darken-2 p-4 rounded-md text-xl hover:cursor-pointer " style="filter:grayscale(0.3)" @click="router.push('/')">Login</button></div>
   </div>
   
   
   
   
   
   </div>
      </div>
   </template>
   
   
   <script setup>
   import {ref, onMounted} from 'vue';
   import {useGlobalStore} from "../stores/global";
   import {useRouter} from "vue-router"
   import {useToast} from 'vue-toast-notification';
   import { useUserStore } from '../stores/users';
   import {useAuthStore} from "../stores/auth";
   import axios from "axios";
   import { storeToRefs } from 'pinia';
  
 
 
   var router = useRouter()
   
   var {getApiUsers} =  useUserStore()
   var {register, test} = useAuthStore()
   
   getApiUsers()
 
   var {mappedUserEmails} = storeToRefs(useUserStore())
   var {user, email, password} = storeToRefs(useAuthStore())
 
 
    
 
   
   
   
   </script>
   
   <style>
   @media (min-width: 1024px) {
     .about {
       min-height: 100vh;
       display: flex;
       align-items: center;
     }
   }
   </style>
   
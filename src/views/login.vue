<template>
  
    <div v-if="mappedUserEmails" class=" w-full h-full flex flex-row justify-center items-start    ml-[50px] bg-blue-lighten-5 pa-10"   id="login">
   
 <div class="flex flex-col"> 
  <img src="../assets/front.png" class=" mt-10 mr-24 plane" style="filter:grayscale(0.4)" alt="" srcset="">
<div class="text-[60px] bg-red-darken-4 mt-10 mr-15 font-bold text-white ">Travel </div>
<div class="text-[60px]    bg-blue-darken-4  mr-15 font-bold text-white mt-0 ">Management </div>

</div>
  
  <div class="w-96 h-50   hover:shadow-blue-500 ml-10 ">
  
  <div     class=" shadow-2xl shaodow-black bg-white   rounded-b-md    pb-8  h-auto " id="form">
  
  
  
  <div class="w-full bg-gradient-to-r bg-blue-darken-2 rounded-t-md bg-white text-white font-bold text-start pl-5 p-4 text-4xl">Login</div>
           
  <div class=" px-4 py-4">
  
  
    <v-autocomplete
  label="Select"
  :items="mappedUserEmails"
  v-model="email"
  variant="outlined"
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
        variant="outlined"
      ></v-text-field>
    
     </div>
    </div>
  
  <div class="flex items-center px-4 justify-between"><button @click="takeOff" class="bg-blue-darken-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Submit</button></div>
  <hr class="border border-solid border-slate-200 mb-5  flex flex-row justify-center items-center ml-5 mt-5" style="width:90%"/>
  
  
  
               <div  class="text-white font-bold  w-full flex flex-row justify-center   items-center h-auto"><button class="bg-green-darken-2 text-white p-4 rounded-md text-xl hover:cursor-pointer " style="filter:grayscale(0.3)" @click="router.push('/register')">Create New Account</button></div>
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
  
  var {getAllUsers} =  useUserStore()
  var {login, test} = useAuthStore()
  
  getAllUsers()

  var {mappedUserEmails} = storeToRefs(useUserStore())
  var {user, email, password} = storeToRefs(useAuthStore())

  var takeOff = () => {
    var plane = document.querySelector(".plane")
    plane.style.display = "fixed"
    plane.style.top = "0px"
    login()
  }
   

  
  
  
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
  
<template>

 <UserSearchBar/>
    <!-- Add Agent  -->
    <div v-if="addAgentCheck" class="fixed bg-white min-w-[300px] top-[30vh] left-[40vw] w-auto h-auto border border-solid border-black p-[10px]">
    <div class="flex flex-col justify-center items-end w-full">
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="name"
        label="name"
        v-model="newAgent.name"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="email"
        label="email"
        v-model="newAgent.email"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="phone"
        label="phone"
        v-model="newAgent.phone"
        >
    
    </v-text-field>
    
    </div>
    
    
    
    
    <div class="flex flex-row w-full justify-end">  
    
    <div class=" bg-blue-500 p-2 mr-2 font-bold text-white hover:cursor-pointer hover:bg-blue-600" @click="proceedAddAgent">
    Proceed
    </div>
    
    
    <div class=" bg-gray-500 p-2 font-bold text-white hover:cursor-pointer hover:bg-gray-600" @click="cancelAddAgent">
    Cancel
    </div>
    
    </div>
    
    
    
    
    </div>
    
    </div>
    
    <!-- add agent end  -->
    
    
    
    
    <!-- update agent  -->
    
    <div v-if="editCheck" class="bg-white fixed min-w-[300px] top-[30vh] left-[40vw] w-auto h-auto border border-sol__id border-black p-[10px]">
    <div class="flex flex-col justify-center items-end w-full">
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="name"
        label="name"
        v-model="editAgent.name"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="email"
        label="email"
        v-model="editAgent.email"
        >
    
    </v-text-field>
    
    </div>
    
    
    <div class="flex flex-row w-full">  
      <v-text-field
        name="phone"
        label="phone"
        v-model="editAgent.phone"
        >
    
    </v-text-field>
    
    </div>
    
    
    
    
    <div class="flex flex-row w-full justify-end">  
    
    <div class=" bg-blue-500 p-2 mr-2 font-bold text-white hover:cursor-pointer hover:bg-blue-600" @click="proceedEditAgent">
    Proceed
    </div>
    
    
    <div class=" bg-gray-500 p-2 font-bold text-white hover:cursor-pointer hover:bg-gray-600" @click="cancelEditAgent">
    Cancel
    </div>
    
    </div>
    
    
    
    
    </div>
    
    </div>
    
    <!-- update agent end  -->
    
    
    <div class="ml-[40px]   ">
    
    <v-table  fixed-header max-height="60vh" class="h-[60vh] m-[20px]   elevation-4tr " density="compact">
        <thead   class="bg-blue-lighten-2">
          <tr>
            <th class="text-center font-extrabold text-xl text-white bg-blue-lighten-2">
              Name
            </th>
            <th class="text-center font-extrabold text-xl text-white  bg-blue-lighten-2">
              Email
            </th>
            <th class="text-center text-xl text-white bg-blue-lighten-2">
              Department
            </th>
            <th class="text-center text-xl text-white bg-blue-lighten-2">
              Designation
            </th>
            <th class="text-center text-xl text-white bg-blue-lighten-2">
              Location
            </th>

            <th class="text-center text-xl text-white bg-blue-lighten-2">
               Unique Id
              </th>
            
            <th class="text-center text-xl text-white bg-blue-lighten-2">
               
            </th>
            <th class="text-center text-xl text-white bg-blue-lighten-2">
               
              </th>
     
          
          
       
          
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, userCounter) in filteredUsers" 
            :key="userCounter" class="hover:border-sol__id hover:border-black hover:border-2 hover:cursor-pointer hover:font-bold" 
          >
            <td >{{ user.empName }}</td>
            <td >{{ user.mailAddress }}</td>
            <td >{{ user.department }}</td>
            <td >{{ user.designation }}</td>
            <td>{{ user.location }}</td>
            <td>{{ user.empId }}</td>

            <td class="hover:cursor-pointer hover:bg-green-500 hover:text-white" @click="updateuserPage(user._id)">Check</td>
            <td class="hover:cursor-pointer hover:bg-red-500 hover:text-white" @click="deleteuser(user._id)">Delete</td>
          
        
            
          </tr>
        </tbody>
      </v-table>
    
    
    <div class="flex flex-row justify-end w-full items-end fixed bottom-2 pr-[20px]">
      <div class=" bg-emerald-500 bottom-10 border-2 border-solid border-black right-3 p-2 mr-[20px]  font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
    Upload Excel
    </div>
    
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    
    <div class=" bg-blue-500 border-2 border-solid border-black bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer hover:bg-blue-600" @click="adduserPage">
    Add user
    </div>
    </div>
    </div>
    
    </template>
    
    
    <script setup>
    import UserSearchBar from '../../components/userSearchBar.vue';
    import {ref} from 'vue'
    import axios from "axios"
    import { useGlobalStore } from '../../stores/global';
    import {useRoute, useRouter} from 'vue-router'
    import { useUserStore } from '../../stores/users';
    import { storeToRefs } from 'pinia';
    import { useAuthStore } from '../../stores/auth';
      

    var {getAllUsers, getUserByName, addUser, getUser, setText, updateUser, resetUser, adduserPage, updateuserPage,
         uploadExcel, deleteuser} = useUserStore()

     
    getAllUsers()

    var {fileInput, users, filteredUsers} = storeToRefs(useUserStore())

   
    
   
    
    
    </script>
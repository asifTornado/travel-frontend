<template>
    
    <div class="flex flex-col    items-center h-full  w-full p-10"  id="body">
    
        <div class="flex flex-row  text-3xl font-bold underline">Roles</div>
         
        <div class="flex flex-col w-[40%] max-h-[70vh]  p-[20px]  mb-2  mt-2  items-center">
            <div class="flex flex-row  w-full h-auto mb-2 p-3  justify-between border border-solid border-blue-100 bg-white shadow-md shadow-black" v-for="(role, roleCounter) in roles">
             <div class="flex flex-row"> <span class="text-lg font-bold mr-10  ">Role {{roleCounter + 1}}:</span> <span class="">{{ role.value }}</span> </div>
             <v-icon  class="text-red-600 hover:cursor-pointer hover:text-red-500 " @click="deleteRole(role)" >mdi-delete-outline </v-icon> 
        </div>
        </div>
    
    
        <div class="flex flex-row w-full justify-center ml-[200px]">
    
    <div class="h-auto w-auto p-2 bg-blue-500 text-white font-bold text-lg hover:cursor-pointer shadow-md shadow-black" @click="addRole">Add New Role</div>
    </div>
    </div>
    
    <AddRoleDialog/>
    </template>
    
    
    
    
    <script setup>
    
    import axios from 'axios'

    import { useRoleStore } from '../stores/roles';
import { storeToRefs } from 'pinia';
import AddRoleDialog from '../components/AddRoleDialog.vue';
    
var {getRoles, addRole, deleteRole} = useRoleStore()

getRoles()

var {roles} = storeToRefs(useRoleStore())

    
    
    
    
    
    
    </script>
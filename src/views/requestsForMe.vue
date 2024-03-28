<template>


<div class="flex flex-row justify-end w-full pb-[20px] pr-[100px] mt-10">

<div class="flex flex-row mt-5 justify-center elevation-4 ">

 <input v-model="searchTerm" type="search" name="" placeholder="Search Request" id="" class="focus:outline-none text-bold  p-3 w-[200px] bg-white">
 <div class="flex flex-col  justify-center bg-blue-lighten-2 items-center p-3  hover:cursor-pointer" @click="requestStore.search"><v-icon class="text-white">mdi-magnify</v-icon></div>
</div>

</div>
    <div class="box pl-[100px]">
    
    <v-table density="compact" fixed-header max-height="60vh"  class=" elevation-4 hover-y-scroll elevation-4">
        <thead class="bg-blue-lighten-1 ">
          <tr>
            <th class="text-center  text-white bg-blue-lighten-1">
              Number
            </th>
            <th class="text-center  text-white bg-blue-lighten-1">
              Status
            </th>
            <th class="text-center  text-white bg-blue-lighten-1">
              Purpose
            </th>
            <th class="text-center  text-white bg-blue-lighten-1">
              Destination
            </th>
    
            <th class="text-center  text-white bg-blue-lighten-1">
              Start Date
            </th>    
            <th class="text-center  text-white bg-blue-lighten-1">
              End Date
            </th>
            <th class="text-center  text-white bg-blue-lighten-1">
              Current Handler
            </th>
            <th class="text-center text-white bg-blue-lighten-1">
           Type
        </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(request, requestCounter) in filteredRequests"
            :key="requestCounter" class="hover:cursor-pointer hover:bg-gray-400 hover:font-bold" @click="requestStore.showRequest(request)"
          >
            <td >{{ request.number }}</td>
            <td >{{ request.status }}</td>
            <td >{{ request.purpose }}</td>
            <td >{{ request.destination }}</td>
            <td >{{ request.startDate }}</td>
            <td >{{ request.endDate }}</td>
            <td v-if="request.currentHandlerName">{{ request.currentHandlerName }}</td>
            <td v-else>Not Assigned</td>
            <td v-if="request.custom == false">Planned</td>
        <td v-else>Unplanned</td>
          </tr>
        </tbody>
      </v-table>
    
    </div>
    
    
    </template>
    
    
    
    <script setup>
   
import { useRequestsStore } from '../stores/request';
import {storeToRefs} from 'pinia'


var requestStore = useRequestsStore()

var {searchTerm, filteredRequests} =  storeToRefs(useRequestsStore()) 


requestStore.getRequestsForMe()
    

    
    
    
    
    </script>
    
    
    <style scoped>
    .box{
        width:90vw;
        margin-left: 30px;
    }
    
    </style>
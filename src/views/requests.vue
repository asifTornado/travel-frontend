<template>
  <SearchBar/> 

    <div class="mx-16    elevation-4  ">

    

    <v-table class="border-2 elevation-4 border-solid border-black "   
   
    >
        <thead class="bg-blue-lighten-1 text-white border-b-2 border-b-solid border-b-black elevation-4">
          <tr>
            <th class="text-center text-white ">
              Number
            </th>
          
            <th class="text-center text-white ">
              Status
            </th>
            <th class="text-center text-white ">
              Purpose
            </th>
            <th class="text-center text-white ">
              Destination
            </th>
    
          
            <th class="text-center text-white ">
              Start Date
            </th>    
            <th class="text-center text-white ">
              End Date
            </th>
            <th class="text-center text-white ">
              Current Handler
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(request, requestCounter) in filteredRequests"
            :key="requestCounter" class="hover:cursor-pointer hover:border-2 hover:border-solid hover:border-black hover:font-bold " @click="showRequest(request)"
          >
            <td >{{ request.number }}      </td>
     
            <td> {{ request.status }}      </td>
            <td >{{ request.purpose }}     </td>
            <td >{{ request.destination }} </td>
      
            <td >{{ request.startDate }}   </td>
            <td >{{ request.endDate }}     </td>
            <td v-if="request.currentHandlerName">{{ request.currentHandlerName }}</td>
            <td v-else>Not Assigned</td>
          </tr>
        </tbody>
      </v-table>
    
    </div>
    
    
    </template>
    
    
    
    <script setup>

    import SearchBar from '../components/searchBar.vue';
  
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
   
    var {getAllRequests, showRequest} = useRequestsStore();
    
    getAllRequests()
    
    var {filteredRequests} = storeToRefs(useRequestsStore())
    
    
    
    
   
    

    
    
    
    
    
    </script>
    
    
    <style scoped>
    .box{
        width:90vw;
        margin-left: 30px;
    }
    
    </style>
<template>
  <SearchBar  /> 

    <div class="mx-16    elevation-4  ">

    

    <v-table fixed-header max-height="60vh" class="elevation-4 " density="compact"   
   
    >
        <thead class="bg-blue-lighten-1 text-white  ">
          <tr>
            <th class="text-center text-white  bg-blue-lighten-1">
              Number
            </th>
          
            <th class="text-center text-white  bg-blue-lighten-1">
              Status
            </th>
            <th class="text-center text-white  bg-blue-lighten-1">
              Purpose
            </th>
            <th class="text-center text-white  bg-blue-lighten-1">
              Destination
            </th>
    
          
            <th class="text-center text-white  bg-blue-lighten-1">
              Start Date
            </th>    
            <th class="text-center text-white  bg-blue-lighten-1">
              End Date
            </th>
            <th class="text-center text-white bg-blue-lighten-1 ">
              Current Handler
            </th>
            <th class="text-center text-white bg-blue-lighten-1 ">
              Type
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
            <td v-if="request.custom == false">Planned</td>
        <td v-else>Unplanned</td>
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
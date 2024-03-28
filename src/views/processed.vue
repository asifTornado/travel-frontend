<template>
<div class="flex flex-row justify-end w-full pb-[20px] pr-[100px] mt-10">

<div class="flex flex-row mt-5 justify-center elevation-4">

 <input v-model="searchTerm" type="search" name="" placeholder="Search Request" id="" class="focus:outline-none text-bold  p-3 w-[200px]">
 <div class="flex flex-col  justify-center bg-blue-lighten-1 items-center p-3 hover:cursor-pointer" @click="search"><v-icon>mdi-magnify</v-icon></div>
</div>

</div>

    <div class="box pl-[100px] ">
    
    <v-table fixed-header max-height="60vh" class="elevation-4" density="compact">
        <thead  class="bg-blue-lighten-1 ">
          <tr>
            <th class="text-center text-white bg-blue-lighten-1">
              Number
            </th>
            <th class="text-center text-white bg-blue-lighten-1">
             Status
            </th>
            <th class="text-center text-white bg-blue-lighten-1">
              Purpose
            </th>
            <th class="text-center text-white bg-blue-lighten-1">
              Destination
            </th>
    
            <th class="text-center text-white bg-blue-lighten-1">
              Start Date
            </th>    
            <th class="text-center text-white bg-blue-lighten-1">
              End Date
            </th>
            <th class="text-center text-white bg-blue-lighten-1">
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
            :key="requestCounter" class="hover:cursor-pointer hover:bg-gray-400 hover:font-bold" @click="showRequest(request)"
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
    import {ref, onMounted} from 'vue'
    import axios from "axios";
    import {useRouter} from "vue-router";
    import Fuse from 'fuse.js'
    import { useAuthStore } from '../stores/auth';
    
    
    
    
    import { useGlobalStore } from '../stores/global';
import { storeToRefs } from 'pinia';
    
    
    var searchTerm = ref(null);
var fuse = ref(null);
var filteredRequests = ref([])
    var router = useRouter();
    var globalStore  = useGlobalStore();
    var {globalUrl} = storeToRefs(useGlobalStore())
    var {user} = storeToRefs(useAuthStore())
    
    var requests = ref([])


    
    var options = ref({
        includeScore: true,

          keys: [{name:'requester.empName', weight:0.1},
         
          {name:'requester.mailAddress', weight:0.1},
          {name:'requester.departmentHead.mailAddress', weight:0.1},
          {name:'requester.departmentHead.empName', weight:0.5},
          {name:'requester.superVisor.mailAddress', weight:0.1},
          {name:'requester.superVisor.empName', weight:0.1},
          {name:'purpose', weight:0.1},
          {name:'destination', weight:0.1},
          {name:'mode', weight:0.5},
          {name:'startDate', weight:0.5},
          {name:'endDate', weight:0.5},
          {name:'status', weight:0.1},
       
        
        ]
        })
    
    var getMyRequests = ()=>{
     
     
          
          console.log("This is the user id")
          console.log(user.value)
          var data = new FormData();
          data.append("user", JSON.stringify(user.value))
    
    
          axios.post(globalUrl.value + "getRequestsProcessedByMe", data).then((result)=>{
            console.log("these are the data")
            console.log(result.data)
            requests.value = result.data;
        filteredRequests.value = result.data;
        fuse.value = new Fuse(result.data, options.value)
    
          }).catch((error)=>console.log(error))
    
    
    
      }
    
    
      getMyRequests();
    
    function showRequest(request){
      var id = request._id;
    
      var url = "/travel/showRequest/" + id;
      router.push(url)
    }
    
    
  function search(){
  
  var vm = this;

  if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
      filteredRequests.value = requests.value
      return
  }
  var result = fuse.value.search(searchTerm.value);

  filteredRequests.value = result.map(result => result.item);

  



}
 
    
    </script>
    
    
    <style scoped>
    .box{
        width:90vw;
        margin-left: 30px;
    }
    
    </style>
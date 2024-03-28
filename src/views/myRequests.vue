<template>





<SearchBar/>



<div class="mx-16    elevation-4  ">

<v-table fixed-header max-height="60vh" class=" elevation-4 " density="compact">
    <thead class="bg-blue-lighten-1 ">
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
        :key="requestCounter" class="hover:cursor-pointer hover:bg-gray-200 hover:font-bold hover:text-black" @click="showRequest(request)"
      >
        <td >{{ request.number }}</td>
        <td >{{ request.status }}</td>
        <td >{{ request.purpose }}</td>
        <td >{{ request.destination }}</td>
        <td >{{ request.startDate }}</td>
        <td >{{ request.endDate }}</td>
        <td v-if="request.currentHandlerName" >{{ request.currentHandlerName }}</td>
        <td v-else >Not Assigned</td>
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
import SearchBar from '../components/searchBar.vue';




import { useRequestsStore } from '../stores/request';
import { useGlobalStore } from '../stores/global';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';


var {getMyRequests, showRequest} = useRequestsStore()

getMyRequests()


var {filteredRequests} = storeToRefs(useRequestsStore())




// var getMyRequests = ()=>{
 
 
   
    
//       var data = new FormData();
//       data.append("id", user.value._id)
//       console.log("this is the id")
//       console.log(user.value._id)

//       axios.post(globalUrl.value + "getMyRequests", data).then((result)=>{
//         requests.value = result.data;
        
//         filteredRequests.value = result.data;
//         fuse.value = new Fuse(result.data, options.value)

//       }).catch((error)=>console.log(error))



//   }


//   getMyRequests();

// function showRequest(request){
//   var id = request._id;

//   var url = "/travel/showRequest/" + id;
//   router.push(url)
// };



// function search(){
  
//   var vm = this;

//   if(searchTerm.value == '' || searchTerm.value == null || searchTerm.value == undefined){
//       filteredRequests.value = requests.value
//       return
//   }
//   var result = fuse.value.search(searchTerm.value);

//   filteredRequests.value = result.map(result => result.item);

  



// }






</script>


<style scoped>


</style>
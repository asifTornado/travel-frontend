<template>

    <div class="mx-10 pl-[50px] mt-10 bg-red-500 ">

      <div class="flex flex-row p-1  w-[10vw] ">
        <RouterLink to="/travel/hotelsForBrand" class=""><span class="hover:cursor-pointer underline text-lg mr-2 whitespace-nowrap">Main</span><span class="text-lg mr-2">></span></RouterLink>
        <RouterLink to="" class="hover:cursor-pointer underline text-lg whitespace-nowrap">{{ route.params.brand }}</RouterLink>
        

      </div>
    
    <table  class="w-full elevation-4 bg-white" density="compact"> 
        <thead class=" text-white" >
          <tr>
            <th class="text-center font-extrabold text-xl  bg-blue-lighten-1" style="padding: 8px;">
             Name
            </th>
        
            
           
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
  </th>
       
          
          </tr>
        </thead>
        <tbody>
      
          <TableRowLocations  v-for="(location, Counter) in locations" :key="Counter" :location="location" />
    

    
      </tbody>
      </table>
    
    
    <div class="flex flex-row justify-end w-full items-end fixed bottom-10 pr-[70px] ">
      <!-- <div class=" bg-emerald-500 bottom-10 right-3 p-2 mr-[20px] border-2 border-solid border-black  font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
    Upload Excel
    </div> -->
    
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    
    <div class=" bg-blue-500  border-2 border-solid border-black  bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="router.push(`/travel/hotelsForBrand/addLocation/${route.params.id}/${route.params.brand}`)">
    Add Location
    </div>
    </div>
    </div>
    
    </template>
    
    
    <script setup>
    import { storeToRefs } from 'pinia';
    import {useHotelsForBrandStore} from "../../stores/hotelsForBrand"
    import TableRowLocations from "./components/tableRowLocations.vue"
    import { useRouter, useRoute } from 'vue-router';
    import { useGlobalStore } from '../../stores/global';
    import axios from "axios"
    import {ref} from "vue"
    
    var router = useRouter()
    var route = useRoute()
    var globalStore = useGlobalStore()
    var {locations}  = storeToRefs(useHotelsForBrandStore())
    
   function getLocations(){
         var data = new FormData()
         data.append("id", route.params.id)
    
        
          axios.post(globalStore.globalUrl + "getHotelLocations", data)
          .then((result)=>{
            console.log("these are the locations", result)
            locations.value = result.data
          }).catch((error)=>{
            console.log(error)
          })
        
    }
   
getLocations()

    


 

   
   


   

    
    
    </script>
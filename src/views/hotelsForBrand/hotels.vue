<template>

    <div class="mx-10 pl-[50px] mt-10 ">

      <div class="flex flex-row p-1  w-[10vw] ">
        
        <RouterLink to="/travel/hotelsForBrand" class=""><span class="hover:cursor-pointer underline text-lg mr-2">Main</span><span class="text-lg mr-2">></span></RouterLink>
        <RouterLink :to="`/travel/hotelsForBrand/locations/${route.params.brandId}/${route.params.brand}`" class=""><span class="hover:cursor-pointer underline text-lg mr-2 whitespace-nowrap">{{route.params.brand}}</span><span class="text-lg mr-2">></span></RouterLink>
        <RouterLink to="" class="hover:cursor-pointer underline text-lg whitespace-nowrap">{{ route.params.location }}</RouterLink>
     

      </div>

    
    <table  class="w-full elevation-4 bg-white" density="compact"> 
        <thead class=" text-white" >
          <tr>
            <th class="text-center font-extrabold text-xl  bg-blue-lighten-1" style="padding: 8px;">
              Hotel Name
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 ">
              Hotel Address
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
  </th>
         
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
            </th>
          
       
          
          </tr>
        </thead>
        <tbody>
        
       <TableRowHotels  v-for="(hotel, Counter) in hotels" :key="Counter" :hotel="hotel" />
    
    
      </tbody>
      </table>
    
    
    <div class="flex flex-row justify-end w-full items-end fixed bottom-10 pr-[70px] ">
      <!-- <div class=" bg-emerald-500 bottom-10 right-3 p-2 mr-[20px] border-2 border-solid border-black  font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
    Upload Excel
    </div> -->
    
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    
    <div class=" bg-blue-500  border-2 border-solid border-black  bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="router.push(`/travel/hotelsForBrand/addHotel/${route.params.brandId}/${route.params.brand}/${route.params.locationId}/${route.params.location}`)">
    Add Hotel
    </div>
    </div>
    </div>
    
    </template>
    
    
    <script setup>
    import { storeToRefs } from 'pinia';
    import {useHotelsForBrandStore} from "../../stores/hotelsForBrand"
    import TableRowHotels from "./components/tableRowHotels.vue"
    import { useRoute, useRouter } from 'vue-router';
    

    import {ref} from "vue"
import axios from 'axios';
import { useGlobalStore } from '../../stores/global';

    var route = useRoute()
    var router = useRouter()
    var {hotels} = storeToRefs(useHotelsForBrandStore())
    var globalStore = useGlobalStore()

  

    function removeItem(id){
            hotelsForBrands.value = hotelsForBrands.value.filter((x)=>x != id)
    }

    var getHotels = () => {
      var data = new FormData()
      data.append("id", route.params.locationId)
      axios.post(globalStore.globalUrl + "getHotels", data)
      .then((result)=>{
        hotels.value = result.data
      }).catch((error)=>{
        console.log(error)
      })
    }

    getHotels()

   

    
    
    </script>
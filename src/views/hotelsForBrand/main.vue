<template>

    <div class="mx-10 pl-[50px] mt-16 ">
      <div class="h-[60vh] pl-[2vw] overflow-y-auto">
    <table  class="w-full elevation-4 bg-white" density="compact"> 
        <thead class=" text-white" >
          <tr>
            <th class="text-center font-extrabold text-xl  bg-blue-lighten-1" style="padding: 8px;">
              Brand Name
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 ">
              Office Address
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
        
       <TableRow  v-for="(hotelForBrand, Counter) in hotelsForBrands" :key="Counter" :hotelForBrand="hotelForBrand" />
    
       
      </tbody>
      </table>
    </div>
    
    <div class="flex flex-row justify-end w-full items-end fixed bottom-10 pr-[70px] ">
      <!-- <div class=" bg-emerald-500 bottom-10 right-3 p-2 mr-[20px] border-2 border-solid border-black  font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
    Upload Excel
    </div> -->
    
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    
    <div class=" bg-blue-500  border-2 border-solid border-black  bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="router.push('/travel/hotelsForBrand/addBrand')">
    Add Brand
    </div>
    </div>
    </div>
    
    </template>
    
    
    <script setup>
    import { storeToRefs } from 'pinia';
    import {useHotelsForBrandStore} from "../../stores/hotelsForBrand"
    import TableRow from "./components/tableRow.vue"
    import { useRouter } from 'vue-router';
    var router = useRouter()

    import {ref} from "vue"

   


    var {updateHotelsForBrandPage, deleteHotelsForBrand, getHotelsForBrands, addHotelsForBrand} = useHotelsForBrandStore()


    getHotelsForBrands()

    function removeItem(id){
            hotelsForBrands.value = hotelsForBrands.value.filter((x)=>x != id)
    }

     var {hotelsForBrands} = storeToRefs(useHotelsForBrandStore())


   

    
    
    </script>
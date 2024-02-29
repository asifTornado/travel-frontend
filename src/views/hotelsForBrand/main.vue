<template>

    <div class="mx-10 pl-[50px] mt-16 ">
    
    <v-table fixed-header max-height="60vh" class=" elevation-4 bg-white" density="compact"> 
        <thead class=" text-white" >
          <tr>
            <th class="text-center font-extrabold text-xl  bg-blue-lighten-1" style="padding: 8px;">
              Brand Name
            </th>
            
           
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
            </th>
            <th class="text-center text-xl  bg-blue-lighten-1 " style="padding: 8px;">
    
            </th>
          
       
          
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(hotelsForBrand, hotelsForBrandCounter) in hotelsForBrands" 
            :key="hotelsForBrandCounter" class="hover:cursor-pointer hover:border-2 hover:border-solid hover:border-black " 
          >
            <td >{{ hotelsForBrand.brand }}</td>
            
          
            <td class="hover:bg-blue-500 hover:text-white" @click="updateHotelsForBrandPage(hotelsForBrand._id)">
    
            Check
              <!-- <v-icon
               @click="updateBudget(budget.id)"
              icon="mdi-border-color"
            ></v-icon>
            -->
            </td>
            <td class="hover:bg-red-500 hover:text-white" @click="deleteHotelsForBrand(hotelsForBrand._id)">
    
            
    <!-- <v-icon
    @click="deleteBudget(budget.id)"
    icon="mdi-delete"
    ></v-icon> -->
    Delete
    
    </td>
            
          </tr>
        </tbody>
      </v-table>
    
    
    <div class="flex flex-row justify-end w-full items-end fixed bottom-10 pr-[70px] ">
      <!-- <div class=" bg-emerald-500 bottom-10 right-3 p-2 mr-[20px] border-2 border-solid border-black  font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="uploadExcel">
    Upload Excel
    </div> -->
    
    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
    
    <div class=" bg-blue-500  border-2 border-solid border-black  bottom-10 right-3 mr-[100px] p-2 font-bold text-white hover:cursor-pointer hover:bg-emerald-600" @click="addHotelsForBrand">
    Add Hotels For Brand
    </div>
    </div>
    </div>
    
    </template>
    
    
    <script setup>
    import { storeToRefs } from 'pinia';
    import {useHotelsForBrandStore} from "../../stores/hotelsForBrand"


    var {updateHotelsForBrandPage, deleteHotelsForBrand, getHotelsForBrands, addHotelsForBrand} = useHotelsForBrandStore()


    getHotelsForBrands()

     var {hotelsForBrands} = storeToRefs(useHotelsForBrandStore())


   

    
    
    </script>
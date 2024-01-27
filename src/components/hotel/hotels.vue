<template>

<div class="w-[90vw] h-[95vh]  p-[10px] ml-[200px] flex flex-col  ">
<div class="h-[30px] w-full flex flex-row justify-center items-center font-bold">Add A Custom Hotel Quotation</div>


<div class="w-full h-[80px] flex flex-col ">
   <span class="font-bold text-xl"> Search</span>
    <div class=" w-full h-[80px] flex flex-row justify-start ">
     <v-container class="border border-solid ">
       <v-row>
         
         <v-col>  
          <v-text-field  
                name="name"
                label="Brand"
                id="name"
                type="text"
                v-model="brand">
            </v-text-field>
          </v-col>
          <v-col>  
          <v-text-field 
                name="location"
                label="Location"
                id="destination"
                type="text"
                v-model="location">
            </v-text-field>
          </v-col>
         
       </v-row>
       <v-row class="flex flex-row justify-end">
      <v-btn @click="searchHotelsForBrands">
  Search
</v-btn>
       </v-row>
     </v-container>
    </div>
  </div>




  <v-table class="border border-solid border-black mt-[100px] mx-[10px] elevation-4 overflow-y-scroll" >
        <thead class="bg-blue-400 ">
          <tr>
            <th class="text-center text-white">
              Brand
            </th>

            <th class="text-center text-white">
               Hotel
            </th>
            <th class="text-center text-white">
              Location
            </th>
            <th class="text-center text-white">
              Average Rate
            </th>
    
            <!-- <th class="text-center text-white">
              Mode
            </th> -->
            <th class="text-center text-white">
              Actual Rate
            </th>    
            <th class="text-center text-white">
          
            </th>
          
          
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(hotelForBrand, hotelForBrandCounter) in hotelsForBrands"
            :key="hotelForBrandCounter" class=" " 
          >
          <td class="text-center">{{ hotelForBrand.brand }}</td>
            <td class="text-center">{{ hotelForBrand.hotel }}</td>
           
            <td class="text-center">{{ hotelForBrand.location }}</td>
            <td class="text-center">{{ hotelForBrand.average_rate }}</td>
            <!--class="text-center" <td >{{ budget.mode }}</td> -->
            <td class="text-center">
            <v-text-field
               name="actual_rate"
               label="Actual Rate"
               id="actual_rate"
               v-model="hotelsForBrands[hotelForBrandCounter].actual_rate"
            ></v-text-field>
            </td>
          
           <td class="hover:cursor-pointer hover:bg-green-500 font-bold hover:text-white" @click="addCustomHotelQuote(hotelForBrand)">Select</td>
          </tr>
        </tbody>
      </v-table>




</div>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../../stores/request';
    import { storeToRefs } from 'pinia';
    import {useHotelsForBrandStore} from "../../stores/hotelsForBrand";
   


    

    var {addCustomHotelQuote} = useRequestsStore()
    var {searchHotelsForBrands} = useHotelsForBrandStore()


    var {brand, location, hotelsForBrands} = storeToRefs(useHotelsForBrandStore())
    
    
    
    
    
    
    
    
    
    </script>
    
    
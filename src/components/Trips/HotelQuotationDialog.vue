<template>
<v-overlay
:model-value="hotelQuotationDialog"



scrim="blue"
class="align-center justify-center w-full pa-10"
>


  <v-icon style="position:absolute; top:0px; right:10px" class="hover:cursor-pointer font-weight-bold" @click="hotelQuotationDialog = false">
    mdi-close
  </v-icon>



<div class="w-[90vw] h-[95vh] bg-grey-lighten-2 p-[10px] flex ml-15 flex-col  elevation-10">
    
    
    
    <div class="w-full h-auto flex flex-col   bg-white  pa-2 mt-5">
       <div class="font-bold text-xl w-full text-center"> Search</div>
        <div class=" w-full h-auto flex flex-row justify-start ">
         <v-container >
           <v-row >
             
             <v-col>  
              <v-text-field  
                    name="name"
                    label="Brand"
                    id="name"
                    type="text"
                    v-model="brand"
                    variant="solo"
                    
                    >
                </v-text-field>
              </v-col>
              <v-col>  
              <v-text-field 
                    name="location"
                    label="Location"
                    id="destination"
                    type="text"
                    v-model="location"
                    variant="solo"
                    >
                </v-text-field>
              </v-col>

              <v-col>
                <v-btn @click="searchHotelsForBrands" class="mt-3">
      Search
    </v-btn>
              </v-col>
             
           </v-row>
     
         </v-container>
        </div>
      </div>
    
    
    
    
      <v-table class="border border-solid border-black mt-[10px] mx-[10px] elevation-4 overflow-y-scroll">
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
              
               <td class="hover:cursor-pointer hover:bg-green-500 font-bold hover:text-white" @click="openProceedHotelQuotationDialog(hotelForBrand)">Select</td>
              </tr>
            </tbody>
          </v-table>
    
    
     
    
    
    </div>

</v-overlay>


<ProceedHotelQuotationDialog/>


</template>


<script setup>
        
import { useRequestsStore } from '../../stores/request';
import { storeToRefs } from 'pinia';
import {useHotelsForBrandStore} from "../../stores/hotelsForBrand";
import { useTripStore } from '../../stores/trips';
import ProceedHotelQuotationDialog from './ProceedHotelQuotationDialog.vue';





var {addCustomHotelQuote} = useRequestsStore()
var {searchHotelsForBrands} = useHotelsForBrandStore()


var {hotelQuotationDialog, trip} = storeToRefs(useTripStore())

var {TAddHotelQuote, openProceedHotelQuotationDialog} = useTripStore()


var {brand, location, hotelsForBrands} = storeToRefs(useHotelsForBrandStore())









</script>
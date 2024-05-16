<template>
  <div class="mx-10 pl-[20px]  " >
            
          <v-form @submit.prevent="insertHotelsForBrand" class="bg-blue-lighten-5" ref="form">

            <v-container class="pa-10  bg-blue-lighten-5 ">
              <v-row class="mb-2 text-subtitle font-weight-bold">
                  Fields with * are mandatory
              </v-row>
              <v-row class="row1  bg-white shadow-md shadow-black  pa-4" >
                
                <v-col md="12"  class="col1">
                  
            <v-text-field
            name="name"
              label="Brand Name *"
              id="brand"
              v-model="hotelsForBrand.brand"
              class="brand "
              :rules="exist"
              variant="outlined"
            
           
              
              prepend-inner-icon="mdi-shield-star"
          
              clearable
              ></v-text-field>
              
            </v-col>
            
            <v-col md="12">
              <v-text-field 
              name="brandOfficeAddress"
              label="Brand Office Address *"
              id="brandOfficeAddress"
              class="brandOfficeAddress"
              prepend-inner-icon="mdi-map-marker"
              v-model="hotelsForBrand.brandOfficeAddress"
              variant="outlined"
      
              clearable
              :rules="exist"
              >
              
            </v-text-field>
          </v-col>
        </v-row>
        
        
        

  </v-container>

  
  
  
  
  <v-btn type="submit" color="success" class="mt-15 mb-10 shadow-md shadow-black  " size="large">Insert</v-btn>
  
  
  
</v-form>
  
  
</div>
</template>



<script setup>
import { useHotelsForBrandStore } from '../../stores/hotelsForBrand';
import {ref} from 'vue'
import { storeToRefs } from 'pinia';


var {hotelsForBrand, form, exist} = storeToRefs(useHotelsForBrandStore())
var {addLocation, addRoom, deleteRoom, deleteLocation, addHotel, deleteHotel, insertHotelsForBrand, resetHotelsForBrand} = useHotelsForBrandStore()
resetHotelsForBrand();




</script>


<style scoped>

.col1{
 
}


.brand{

}

.brandOfficeAddress{

  margin-top: -20px ;

}


.hotelAddress{

}

.v-text-field {
  font-size: 2px;
  
}


</style>
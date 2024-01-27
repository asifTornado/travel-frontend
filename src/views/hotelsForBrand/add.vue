<template>
  <div class="mx-10 pl-[20px] mt-15 bg-grey-lighten-3 " >
            
          <v-form @submit.prevent="insertHotelsForBrand" ref="form">

            <v-container class="pa-10 bg-white elevation-10">
              <v-row class="mb-2 text-subtitle font-weight-bold">
                  Fields with * are mandatory
              </v-row>
              <v-row class="row1   elevation-4 pa-4" >
                
                <v-col md="12"  class="col1">
                  
            <v-text-field
            name="name"
              label="Brand Name *"
              id="brand"
              v-model="hotelsForBrand.brand"
              class="brand "
              :rules="exist"
            
           
              
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
      
              clearable
              :rules="exist"
              >
              
            </v-text-field>
          </v-col>
        </v-row>
        
        
        
        <v-row v-for="(location, locationCounter) in hotelsForBrand.locations" class=" mt-10 pa-10 elevation-5">
          <v-col cols="11" md="10">
            <!-- Your content for the first column -->
        <v-card class="elevation-5 pa-5">
          <v-card-title>
            <v-text-field name="name" label="City/State *" prepend-inner-icon="mdi-city"
             v-model="location.locationName"  
              variant="outlined"  
              clearable
              :rules="exist"
            id="id"></v-text-field></v-card-title>
            <v-card-text>
              <v-container v-for="(hotel, hotelCounter) in location.hotels" class=" border-2" >
                <v-row >
               
                    <v-col md="5">
                      
                      <v-text-field
                      name="name"
                      label="Hotel Name *"
                      id="hotelName"
                      class="hotelName"
                      v-model="hotel.hotelName"
                      prepend-inner-icon="mdi-rename"
                      clearable
                      variant="solo"
                      :rules="exist"
                      ></v-text-field>
                      
                    </v-col>
                    
                    <v-col md="5">
                      
                      <v-text-field
                      name="name"
                      label="Hotel Address *"
                      id="hotelAddress"
                      class="hotelAddress"
                      prepend-inner-icon="mdi-store-marker"
                      clearable
                      variant="solo"
                      :rules="exist"
                      v-model="hotel.hotelAddress"
                      ></v-text-field>
                      
                    </v-col>
                    
                    
              
                  <!-- <v-col md="3"><v-text-field
                    name="name"
                    label="Average Rate *"
                    id="id"
                    v-model="hotel.average_rate"
                    prepend-inner-icon="mdi-currency-usd"
                    clearable
                    variant="solo"
                    :rules="exist"
                    ></v-text-field></v-col> -->
            
                    <v-col md="1" class="flex flex-col ">
                      <v-btn  prepend-icon="mdi-plus" class="mt-3" size="small" color="" dark @click="addHotel(hotelCounter, locationCounter)"></v-btn>
                      
                    </v-col>
                    <v-col md="1" class="flex flex-col ">
                      <v-btn prepend-icon="mdi-minus" class="mt-3" color="primary" size="small" dark @click="deleteHotel(hotelCounter, locationCounter)"></v-btn>
                      
                    </v-col>
                  </v-row>

                  <v-row v-for="(room, roomCounter) in hotel.rooms" :key="roomCounter">
                    <v-col md="3" density="compact" style="font-size: 2px;">
                   <v-text-field label="Room Type">

                   </v-text-field>
                  </v-col>
                   <v-col md="3">
                     <v-text-field label="Average Rate">
  
                     </v-text-field>

                   </v-col>

                   <v-col md="1" class="flex flex-col ">
                      <v-btn  prepend-icon="mdi-plus" class="mt-3" size="small" color="" dark @click="addRoom(roomCounter, hotelCounter, locationCounter)"></v-btn>
                      
                    </v-col>
                    <v-col md="1" class="flex flex-col ">
                      <v-btn prepend-icon="mdi-minus" class="mt-3" color="primary" size="small" dark @click="deleteRoom(roomCounter, hotelCounter, locationCounter)"></v-btn>
                      
                    </v-col>
                  

                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-btn color="success" prepend-icon="mdi-plus" class="mt-[20px]" @click="addLocation(locationCounter)"></v-btn>
          </v-col>
          
          <v-col>
            <v-btn color="success" prepend-icon="mdi-minus" class="mt-[20px]" @click="deleteLocation(locationCounter)"></v-btn>
          </v-col>
          
        </v-row>
  </v-container>

  
  
  
  
  <v-btn type="submit" color="success" class="mt-15 mb-10  " size="large">Insert</v-btn>
  
  
  
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
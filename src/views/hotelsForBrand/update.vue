<template>
    <div class="mx-10 pl-[20px] mt-15 bg-grey-lighten-3 " >
            
            <v-form @submit.prevent="updateHotelsForBrand" ref="form">
  
              <v-container class="pa-10 bg-white elevation-4 ">
                <v-row class="mb-2 text-subtitle font-weight-bold">
                    Fields with * are mandatory
                </v-row>
                <v-row class="row1 pa-4  elevation-3" >
                  
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
                
                clearable
                :rules="exist"
                v-model="hotelsForBrand.brandOfficeAddress"
                >
                
              </v-text-field>
            </v-col>
          </v-row>
          
          
          
          <v-row v-for="(location, locationCounter) in hotelsForBrand.locations" class=" mt-10  elevation-5 pa-5">
            <v-col cols="11" md="10">
              <!-- Your content for the first column -->
          <v-card class="pa-10 elevation-10">
            <v-card-title >
              <v-text-field name="name" label="City/State *" prepend-inner-icon="mdi-city"
               v-model="location.locationName"  
                variant="outlined"  
                clearable
                :rules="exist"
              id="id"></v-text-field></v-card-title>
              <v-card-text>
                <v-container>
                  <v-row v-for="(hotel, hotelCounter) in location.hotels" class="" align="center" justify="center">
                 
                      <v-col md="3">
                        
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
                      
                      <v-col md="4">
                        
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
                      
                      
                
                    <v-col md="3"><v-text-field
                      name="name"
                      label="Average Rate *"
                      id="id"
                      v-model="hotel.average_rate"
                      prepend-inner-icon="mdi-currency-usd"
                      clearable
                      variant="solo"
                      :rules="exist"
                      ></v-text-field></v-col>
              
                      <v-col md="1" class="flex flex-col ">
                        <v-btn  prepend-icon="mdi-plus" size="small" color="" dark @click="addHotel(hotelCounter, locationCounter)"></v-btn>
                        
                      </v-col>
                      <v-col md="1" class="flex flex-col ">
                        <v-btn prepend-icon="mdi-minus" color="primary" size="small" dark @click="deleteHotel(hotelCounter, locationCounter)"></v-btn>
                        
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
  
    
    
    
    
    <v-btn type="submit" color="success" class="mt-15 mb-10  " size="large">Update</v-btn>
    
    
    
  </v-form>
    
    
  </div>
  </template>
  
  
  
  <script setup>
  import { useHotelsForBrandStore } from '../../stores/hotelsForBrand';
  import { storeToRefs } from 'pinia';
  
  
  var {addLocation, deleteLocation, addHotel, deleteHotel, updateHotelsForBrand, getHotelsForBrand,
  deleteHotelBackEnd, deleteLocationBackEnd} = useHotelsForBrandStore()
  
  getHotelsForBrand()
  
  
  var {hotelsForBrand, form, exist} = storeToRefs(useHotelsForBrandStore())
 
  
 
  
  console.log("this is the hotelsForBrand from the page")
  console.log(hotelsForBrand)
 

  </script>
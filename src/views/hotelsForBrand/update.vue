<template>
    <div class="mx-10 pl-[20px]  b" >
            
            <v-form @submit.prevent="updateHotelsForBrand"  ref="form">
  
              <v-container class="pa-10  bg-blue-lighten-5 ">
                <v-row class="mb-2 text-subtitle font-weight-bold">
                    Fields with * are mandatory
                </v-row>
                <v-row class="row1 pa-4  bg-white shadow-md shadow-black "  >
                  
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
                variant="outlined"
                
                clearable
                :rules="exist"
                v-model="hotelsForBrand.brandOfficeAddress"
                >
                
              </v-text-field>
            </v-col>
          </v-row>
          
          
          
          <v-row v-for="(location, locationCounter) in hotelsForBrand.locations" class="   ">
            <v-col cols="11" md="10" class="">
              <!-- Your content for the first column -->
          <v-card class="pa-10 border-2 border-black border-solid shadow-md shadow-black">
            <v-card-title >
              <v-text-field name="name" label="City/State *" prepend-inner-icon="mdi-city"
               v-model="location.locationName"  
               variant="outlined"
                 
                clearable
                :rules="exist"
              id="id"></v-text-field></v-card-title>
              <v-card-text>
                <v-container  v-for="(hotel, hotelCounter) in location.hotels" class=" border border-black ">
                  <v-row  class="border-b border-b-black" align="center" justify="center">
                 
                      <v-col md="5">
                        
                        <v-text-field
                        name="name"
                        label="Hotel Name *"
                        id="hotelName"
                        class="hotelName"
                        v-model="hotel.hotelName"
                        prepend-inner-icon="mdi-rename"
                        clearable
                        variant="outlined"
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
                        variant="outlined"
                        :rules="exist"
                        v-model="hotel.hotelAddress"
                        ></v-text-field>
                        
                      </v-col>
                      
                      
<!--                 
                    <v-col md="3"><v-text-field
                      name="name"
                      label="Average Rate *"
                      id="id"
                      v-model="hotel.average_rate"
                      prepend-inner-icon="mdi-currency-usd"
                      clearable
                      variant="solo"
                      :rules="exist"
                      ></v-text-field>
                    </v-col> -->
              
                      <v-col md="1" class="flex flex-col ">
                        <v-btn   size="small" class="bg-blue-darken-4" dark @click="addHotel(hotelCounter, locationCounter)">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        
                      </v-col>
                      <v-col md="1" class="flex flex-col ">
                        <v-btn class="bg-blue-lighten-1" size="small" dark @click="deleteHotel(hotelCounter, locationCounter)">
                        <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        
                      </v-col>
                    </v-row>


                    <v-row density="compact" v-for="(room, roomCounter) in hotel.rooms" :key="roomCounter">
                    <v-col md="3" density="compact" style="font-size: 2px;">
                   <v-text-field label="Room Type" variant="outlined" v-model="hotel.rooms[roomCounter].type">

                   </v-text-field>
                  </v-col>
                   <v-col md="3">
                     <v-text-field label="Average Rate" variant="outlined" v-model="hotel.rooms[roomCounter].average_rate">
  
                     </v-text-field>

                   </v-col>

                   <v-col md="1" class="flex flex-col ">
                      <v-btn   class="mt-3 bg-indigo-darken-3" size="extra-small"  dark @click="addRoom(roomCounter, hotelCounter, locationCounter)">
                      <v-icon>
                        mdi-plus
                      </v-icon>
                      </v-btn>
                      
                    </v-col>
                    <v-col md="1" class="flex flex-col ">
                      <v-btn class="mt-3 bg-indigo-lighten-2"   size="extra-small" dark @click="deleteRoom(roomCounter, hotelCounter, locationCounter)">
                      <v-icon>
                        mdi-minus
                      </v-icon>
                      </v-btn>
                      
                    </v-col>
                  

                  </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-btn class="bg-blue-darken-4 mt-[20px]" @click="addLocation(locationCounter)">
              <v-icon>
                mdi-plus
              </v-icon>
              </v-btn>
            </v-col>
            
            <v-col>
              <v-btn  class="bg-blue-lighten-2 text-white mt-[20px]" @click="deleteLocation(locationCounter)">
              <v-icon>
                mdi-minus
              </v-icon>
              </v-btn>
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
  deleteHotelBackEnd, deleteLocationBackEnd, addRoom, deleteRoom} = useHotelsForBrandStore()
  
  getHotelsForBrand()
  
  
  var {hotelsForBrand, form, exist} = storeToRefs(useHotelsForBrandStore())
 
  
 
  
  console.log("this is the hotelsForBrand from the page")
  console.log(hotelsForBrand)
 

  </script>
<template>
    <div class="mx-10 pl-[20px]  " >
              
            <v-form @submit.prevent="updateHotel" class="bg-blue-lighten-5" ref="form">
  
              <v-container class="pa-10  bg-blue-lighten-5 ">
                <v-row class="mb-2 text-subtitle font-weight-bold">
                    Fields with * are mandatory
                </v-row>
          
          
          
          
         
                <v-container class=" border border-black border-solid " >
                  <v-row class="border-b border-b-black">
                 
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
              
                      
                    </v-row>
  
                    <v-row v-for="(room, roomCounter) in hotel.rooms" :key="roomCounter">
                      <v-col md="3" density="compact" style="font-size: 2px;">
                     <v-text-field label="Room Type" variant="outlined" v-model="hotel.rooms[roomCounter].type">
  
                     </v-text-field>
                    </v-col>
                     <v-col md="3">
                       <v-text-field label="Average Rate" variant="outlined" v-model="hotel.rooms[roomCounter].average_rate">
    
                       </v-text-field>
  
                     </v-col>
  
                     <v-col md="1" class="flex flex-col ">
                        <v-btn   class="mt-3 bg-indigo-darken-3" size="extra-small" dark   @click="addRoom(roomCounter)">
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        
                      </v-col>
                      <v-col md="1" class="flex flex-col ">
                        <v-btn  class="mt-3 bg-indigo-lighten-2"  size="extra-small" dark  @click="deleteRoom(roomCounter)">
                        <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        
                      </v-col>
                    
  
                    </v-row>
                  </v-container>
           
           
    </v-container>
  
    
    
    
    
    <v-btn type="submit" color="success" class="mt-15 mb-10 shadow-md shadow-black  " size="large">Update</v-btn>
    <v-btn  color="warning"  class="mt-15   mb-10 shadow-md shadow-black ml-2  " size="large" @click=" router.push(`/travel/hotelsForBrand/hotels/${route.params.brandId}/${route.params.brand}/${route.params.locationId}/${route.params.location}`)">Cancel</v-btn>
    
    
  </v-form>
    
    
  </div>
  </template>
  
  
  
  <script setup>
  import { useHotelsForBrandStore } from '../../stores/hotelsForBrand';
  import {ref} from 'vue'
  import { storeToRefs } from 'pinia';
  import { useGlobalStore } from '../../stores/global';
  import {useRouter, useRoute} from "vue-router"
  import axios from "axios";  
  
  var route = useRoute()
  var router = useRouter()
  var hotelName = ref('')
  var hotelAddress = ref('')
  var rooms = ref([{
    type:"",
    average_rate:"",
    actual_rate:""
  }])


  var hotel = ref({})
  
  
  var globalStore = useGlobalStore()
  
  
  function addRoom(counter){
    var newRoom = {
      type:"",
      average_rate:"",
      actual_rate:"",
    }
  
    hotel.value.rooms.splice(counter + 1, 0, newRoom)
  }
  
  
  function deleteRoom(counter){
    if(hotel.value.rooms.length < 2) return
    hotel.value.rooms.splice(counter, 1)
  }
  

  function getHotel(){
    var data = new FormData()
    data.append("id", route.params.hotelId)
    axios.post(globalStore.globalUrl + "getHotel", data).then((result)=>{
        hotel.value = result.data
    }).catch((error)=>console.log(error))
  }
  
  function updateHotel(){
    
  
    var data = new FormData()
    data.append("hotel", JSON.stringify(hotel.value))
    
  
    axios.post(globalStore.globalUrl + "updateHotel", data).then((result)=>{
      
      router.push(`/travel/hotelsForBrand/hotels/${route.params.brandId}/${route.params.brand}/${route.params.locationId}/${route.params.location}`)
    }).catch((error)=>console.log(error))
  }
  
  
  getHotel()
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
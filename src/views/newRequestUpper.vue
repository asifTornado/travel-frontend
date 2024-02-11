<template>

    <div class="mt-12 "> 

     <v-divider></v-divider>

     <v-form @submit.prevent="submit" ref=form>

     
          <v-container class="elevation-4 ">
            <v-row><v-col cols="12" class="font-weight-bold">Travel Information</v-col></v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
             
              >
              
               <v-autocomplete
                :items="mappedUsers"
                v-model="requester"
                label="Requester*"
                :rules="exist"
                density="compact"
                variant="outlined"
               ></v-autocomplete>
              </v-col>
              <v-col
                cols="12"
                md="4"
             
              >
              
               <v-select
                :items="locations"
                v-model="destination"
                label="Location*"
                :rules="exist"
                density="compact"
                variant="outlined"
               ></v-select>
              </v-col>
      
              <v-col
                cols="12"
                md="4"
              >
              <v-select
                :items="modes"
                v-model="mode"
                label="Travel Mode"
                :rules="exist"
                density="compact"
                variant="outlined"
              ></v-select>
              </v-col>



            </v-row>
            <v-row>
             <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="startDate"
                label="Start Date*"
                id="startDate"
                type="date"
                density="compact"
                v-model="startDate"
                :rules="exist"
                variant="outlined"
                @change="getNumberOfDays"
              ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="endDate"
                label="End Date*"
                id="endDate"
                type="date"
                v-model="endDate"
                density="compact"
                :rules="exist"
                variant="outlined"
                @change="getNumberOfDays"
              ></v-text-field>
              </v-col>
                <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="Number Of Nights Required To Stay"
                label="Number Of Nights Required To Stay*"
                id="id"
                type="number"
                :rules="exist"
                variant="outlined"
                density="compact"
                v-model="numberOfNights"
              ></v-text-field>
              </v-col>
    
            </v-row>
    
          <v-row>
           <v-col
                cols="12"
                md="4"
              >
             <v-textarea density="compact"      variant="outlined" box label="Purpose of travel*" v-model="purpose"></v-textarea>
              </v-col>
          </v-row>
          
      
        
          </v-container >

          <Objectives/>
          <Meetings/>
          <Activities/>
          <Items/>
          <Personnel/>
    
    
          <v-divider></v-divider>
            <v-container  class="elevation-5 mt-3 mb-4">
            <v-row><v-col cols="12" class="font-bold">Estimated Total Cost</v-col></v-row>

            <v-row  class="">
            <v-col
            cols="4"
            class="font-bold"
            >
                Item
            </v-col>
            <v-col
            cols="3"
            class="font-bold"
            >
                Number of Days
            </v-col>
            <v-col
            cols="2"
            class="font-bold"
            >
                Price
            </v-col>
            <v-col
            cols="1"
            class="font-bold"
            >
          Total 
            </v-col>
            <v-col
            cols="2"
            >
         
            </v-col>
         </v-row>


    
          
         <v-row v-for="(item, itemCounter) in costItems" >
            <v-col
            cols="4"
            >
              <v-text-field
               type="string"
               v-model="item.item"
               density="compact"
               variant="outlined"
              ></v-text-field>
            </v-col>
            <v-col
            cols="3"
            >
            <v-text-field
            type="string"
            v-model="item.numberOfItems"
            density="compact"
            variant="outlined"
           ></v-text-field>
            </v-col>
            <v-col
            cols="2"
            >
            <v-text-field
            type="string"
            v-model="item.itemCost"
            density="compact"

            variant="outlined"
           ></v-text-field>
            </v-col>
            <v-col cols="1" >
            <span > {{ setCost(itemCounter) }}</span>
            
            </v-col>
         
            <v-col cols="2">
             <v-btn class="bg-blue-darken-4 mr-1" @click="addItem(itemCounter)" ><v-icon>mdi-plus</v-icon></v-btn>
               <v-btn  class="bg-blue-lighten-1" @click="removeItem(itemCounter)"><v-icon>mdi-plus</v-icon></v-btn>
            
            </v-col>
           
         </v-row>

         
    
    
       <v-row>
         <v-col cols="3">
           Total Cost:  {{ getTotalCost() }}
         </v-col>
       </v-row>
    
   
          </v-container>


          <v-btn size="large" color="indigo-darken-3" class="mb-4" @click="submit">Submit</v-btn>
        </v-form>
    
    </div>
    


   

     

 </template>
   
   
   
<script setup>
   
import {ref, onMounted, useTransitionState} from 'vue'
import { useCustomStore } from '../stores/custom';
import Items from '../components/Customtrip/Items.vue';
import Personnel from '../components/Customtrip/Personnel.vue';
import Meetings from '../components/Customtrip/Meetings.vue';
import Activities from '../components/Customtrip/Activities.vue';
import Objectives from '../components/Customtrip/Objectives.vue';
import { useGlobalStore } from '../stores/global';
import {useToast} from 'vue-toast-notification';
import { useUserStore } from '../stores/users';
import axios from "axios";
import { useRequestsStore } from '../stores/request';
import { storeToRefs } from 'pinia';
import {provide} from "vue"
import { useAuthStore } from '../stores/auth';



var {user, token} = storeToRefs(useAuthStore())

var {getUsersForSupervisor} = useUserStore()

getUsersForSupervisor(user)

var {mappedUsers} = storeToRefs(useUserStore())

var { locations,
    users,
    modes,
    overnight,
    numberOfNights,
    costItems,
    totalCost,
    objectives,
    meetings,
    activities,
    items,
    personnel,
    destination,
    mode,
    accomodationRequired,
    numberOfNights,
    designation,
    purpose,
    startDate,
    endDate,
    form, 
    exist,
    requester} = storeToRefs(useCustomStore())
    
    
    var {
      getNumberOfDays,
    addItem, 
    removeItem,
    getTotalCost,
    setCost,
    submit
    } = useCustomStore();







   
   
</script>


<style scoped>

.v-container{
 

}



</style>
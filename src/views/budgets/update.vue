<template>

<div  class="   pa-10  "> 
  
  <v-divider></v-divider>
  <v-container class="bg-grey-lighten-3">
      <v-row  >
        Fields with * are mandatory
      </v-row>
     </v-container>
     <v-form @submit.prevent="updateBudget" ref=form>       
      <v-container class="elevation-10  mb-10">
         <v-row><v-col cols="12" class="text-h4">Travel Information</v-col></v-row>
         <v-row>
           <v-col
             cols="12"
             md="4"
           >
            <v-text-field
             :items="locations"
             v-model="budget.subject"
             label="Subject*"
             :rules="exist"
            ></v-text-field>
           </v-col>
   
           <v-col
             cols="12"
             md="4"
           >
           <v-text-field
             v-model="budget.brand"
             label="Brand*"
             :rules="exist"
           ></v-text-field>
           </v-col>

           <v-col
           cols="12"
           md="4"
           >
           <v-text-field
             v-model="budget.destination"
             label="destination*"
             :rules="exist"
           ></v-text-field>

           </v-col>
     
   
         </v-row>
         <v-row>
          <v-col
             cols="12"
             md="4"
           >
           <v-text-field 
             name="startDate"
             label="Departure Date*"
             id="startDate"
             type="date"
             v-model="budget.departure_date"
             :rules="exist"
             @change="getNumberOfDays"
           ></v-text-field>
           </v-col>
           <v-col
             cols="12"
             md="4"
           >
           <v-text-field 
             name="endDate"
             label="Arrival Date*"
             id="endDate"
             type="date"
             v-model="budget.arrival_date"
             :rules="exist"
             @change="getNumberOfDays"
           ></v-text-field>
           </v-col>
             <v-col
             cols="12"
             md="4"
           >
           <v-text-field 
             name="Travel Duration"
             label="Travel Duration*"
             id="id"
             type="text"
             v-model="budget.numberOfDays"
             :rules="exist"
           ></v-text-field>
           </v-col>


           <v-col
             cols="12"
             md="4"
           >
           <v-text-field
             name="traveller Email"
             label="Number of Travelers*"
             id="traveler's email"
             type="text"
             v-model="budget.numberOfTravelers"
             :rules="exist"
             
           ></v-text-field>
           </v-col>
 
         </v-row>

       </v-container >


       <v-container class="elevation-10 mt-10">
         <v-row>
           <v-col md="12" class="text-h4">
                 Travelers
           </v-col>
         </v-row>

         <v-row v-for="(traveler, travelerCounter) in budget.travellerEmails" :key="travelCounter">
               <v-col md="8" >
                    <v-autocomplete
                    :items="mappedUserEmails"
                    v-model="budget.travellerEmails[travelerCounter]"
                    :rules="exist"
                     :label="'Traveler ' + (travelerCounter+1) + ' Email*'"
                    >

                    </v-autocomplete>
               </v-col>    
               
               <v-col md="1">
                    <v-btn class="mt-2" prepend-icon="mdi-plus" color="blue-darken-2" @click="addTraveler(travelerCounter)"></v-btn>
               </v-col>
               <v-col md="1">
                    <v-btn class="mt-2" prepend-icon="mdi-minus" color="red-darken-2" @click="deleteTraveler(travelerCounter)"></v-btn>
               </v-col>
         </v-row>
       </v-container>



       <!-- budget costing details  -->


       <v-container class="elevation-10 mt-10">
       <v-row>
         <v-col md="12" class="text-h4">
            Budget Information
         </v-col>
       </v-row>


       <v-row>
         <v-col md="4">
            <v-text-field 
            label="Air Ticket Budget*"
            v-model="budget.airTicketBudget"
            name="Air Ticket Budget"
            id="Air Ticket Budget"
            type="text"
            @change="changeTotal"
            :rules="exist"
            />

          
         </v-col>
         <v-col md="4">
           <v-text-field 
            label="Hotel Budget*"
            v-model="budget.hotelBudget"
            name="Hotel Budget"
            id="Hotel Budget"
            type="text"
            @change="changeTotal"
            :rules="exist"
            />

         </v-col>
         <v-col md="4">
               
           <v-text-field 
            label="Total Booking Cost*"
            v-model="budget.totalBookingCost"
            name="Total Booking Cost"
            id="Total Booking Cost"
            type="text"
            :rules="exist"
            />
         </v-col>
       </v-row>


       <v-row>
         <v-col md="4">
           <v-text-field 
            label="Transport Expense*"
            v-model="budget.transportExpense"
            name="Transport Expense"
            id="Transport Expense"
            type="text"
            @change="changeTotal"
            :rules="exist"
            />
         </v-col>

         <v-col md="4">
           <v-text-field 
            label="Incidental Expense*"
            v-model="budget.incidentalExpense"
            name="Incidental Expense"
            id="Incidental Expense"
            type="text"
            @change="changeTotal"
            :rules="exist"
            />
         </v-col>
         <v-col md="4">
           <v-text-field 
            label="Total Trip Budget*"
            v-model="budget.totalTripBudget"
            name="Total Trip Budget"
            id="Total Trip Budget"
            type="text"
            :rules="exist"
            />
         </v-col>
       </v-row>

       </v-container>
 
 
       <v-divider></v-divider>



         <v-container style="margin-bottom:20vh" class="mt-10 bg-grey-lighten-3">
    

      
   
 
 
    <v-btn size="large" color="indigo-darken-3" @click="updateBudget">Update Budget</v-btn>
       </v-container>

      </v-form>

       
   
 
 </div>
 



   

     

 </template>
   
   
   
<script setup>
   
import {ref} from 'vue'
import { useBudgetStore } from '../../stores/budget';
import { useGlobalStore } from '../../stores/global';
import {useHelperStore} from "../../stores/helper";
import {useToast} from 'vue-toast-notification';
import axios from "axios";
import {useRouter, useRoute} from 'vue-router';
import { useUserStore } from '../../stores/users';
import { storeToRefs } from 'pinia';


var {getAllUsers} = useUserStore()

getAllUsers()

var {mappedUserEmails} = storeToRefs(useUserStore())



var {travelMode} = storeToRefs(useHelperStore())


var {initiatedValues} = storeToRefs(useHelperStore())




var {budget, budgets, fileInput, exist, form} = storeToRefs(useBudgetStore())


var {resetBudget, addBudget, getBudgets, deleteBudget, uploadExcel, getBudget, updateBudget, getNumberOfDays, addTraveler, deleteTraveler, changeTotal} = useBudgetStore()



getBudget()




















   
   
</script>



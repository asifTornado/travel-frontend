<template>

    <div  class="   pa-10  "> 
  
     <v-divider></v-divider>
     <v-container class="bg-blue-lighten-5">
      <v-row>
        Fields with * are mandatory
      </v-row>
     </v-container>
     <v-form  @submit.prevent="addBudget" ref=form>
               <v-container class="elevation-5 pa-6">
            <v-row><v-col cols="12" class="text-h4">Travel Information</v-col></v-row>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
               <v-text-field
                :items="locations"
                v-model="budget.subject"
                id="subject"
                label="Subject *"
                :rules="exist"
                density="compact"
               >
           
              
              </v-text-field>
              </v-col>
      
              <v-col
                cols="12"
                md="4"
              >
              <v-text-field
                v-model="budget.brand"
                id="brand"
                label="Brand *"
                density="compact"
                :rules="exist"
              >
             
            
            </v-text-field>
              </v-col>

              <v-col
              cols="12"
              md="4"
              >
              <v-text-field
                v-model="budget.destination"
                label="destination *"
                id="destination"
                :rules="exist"
                density="compact"
              >
            
            
            </v-text-field>

              </v-col>
        
      
            </v-row>
            <v-row>
             <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="startDate"
                label="Departure Date *"
                id="startDate"
                type="date"
                v-model="budget.departure_date"
                :rules="exist"
                @change="getNumberOfDays"
                density="compact"
              >
              
            
            </v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="endDate"
                label="Arrival Date *"
                id="endDate"
                type="date"
                v-model="budget.arrival_date"
                :rules="exist"
                @change="getNumberOfDays"
                density="compact"
              >
              
            
            </v-text-field>
              </v-col>
                <v-col
                cols="12"
                md="4"
              >
              <v-text-field 
                name="Travel Duration"
                label="Travel Duration *"
                id="duration"
                type="text"
                v-model="budget.numberOfDays"
                :rules="exist"
                density="compact"
              ></v-text-field>
              </v-col>


              <v-col
                cols="12"
                md="4"
              >
              <v-text-field
                name="traveller Email"
                label="Number of Travelers *"
                id="traveler's email"
                type="text"
                v-model="budget.numberOfTravelers"
                :rules="exist"
                density="compact"
                
              ></v-text-field>
              </v-col>
    
            </v-row>

          </v-container >


          <v-container class="elevation-4 mt-10">
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
                        :label="'Traveler ' + (travelerCounter+1) + ' Email *'"
                        :rules="exist"
                        density="compact"
                        :id="'traveler' + (travelerCounter + 1)"
                       >
                      

                       </v-autocomplete>
                  </v-col>    
                  
                  <v-col md="1">
                       <v-btn class="mt-2 bg-blue-darken-4"   @click="addTraveler(travelerCounter)">
                      <v-icon>mdi-plus</v-icon>
                      </v-btn>
                  </v-col>
                  <v-col md="1">
                       <v-btn class="mt-2 bg-blue-lighten-2 text-white"   @click="deleteTraveler(travelerCounter)">
                      <v-icon>mdi-minus</v-icon>
                      </v-btn>
                  </v-col>
            </v-row>
          </v-container>



          <!-- budget costing details  -->


          <v-container class="pa-5 elevation-4 mt-10">
          <v-row>
            <v-col md="12" class="text-h4">
               Budget Information
            </v-col>
          </v-row>


          <v-row>
            <v-col md="4">
               <v-text-field 
               label="Air Ticket Budget *"
               v-model="budget.airTicketBudget"
               name="Air Ticket Budget"
               id="Air Ticket Budget"
               type="text"
               @change="changeTotal"
               :rules="exist"
               density="compact"
               />

             
            </v-col>
            <v-col md="4">
              <v-text-field 
               label="Hotel Budget *"
               v-model="budget.hotelBudget"
               name="Hotel Budget"
               id="Hotel Budget"
               type="text"
               @change="changeTotal"
               :rules="exist"
               density="compact"
               />

            </v-col>
            <v-col md="4">
                  
              <v-text-field 
               label="Total Booking Cost *"
               v-model="budget.totalBookingCost"
               name="Total Booking Cost"
               id="Total Booking Cost"
               type="text"
               :rules="exist"
               density="compact"
               />
            </v-col>
          </v-row>


          <v-row>
            <v-col md="4">
              <v-text-field 
               label="Transport Expense *"
               v-model="budget.transportExpense"
               name="Transport Expense"
               id="Transport Expense"
               type="text"
               @change="changeTotal"
               density="compact"
               :rules="exist"
               />
            </v-col>

            <v-col md="4">
              <v-text-field 
               label="Incidental Expense *"
               v-model="budget.incidentalExpense"
               name="Incidental Expense"
               id="Incidental Expense"
               type="text"
               @change="changeTotal"
               density="compact"
               :rules="exist"
               />
            </v-col>
            <v-col md="4">
              <v-text-field 
               label="Total Trip Budget *"
               v-model="budget.totalTripBudget"
               name="Total Trip Budget"
               id="Total Trip Budget"
               type="text"
               density="compact"
               :rules="exist"
               />
            </v-col>
          </v-row>

          </v-container>
    
    
          <v-divider></v-divider>

            <v-container style="margin-bottom:2vh" class="mt-4 bg-blue-lighten-5" >
       

         
      
    
    
       <v-btn size="large" color="indigo-darken-3 mt-5" type="submit">Add Budget</v-btn>
          </v-container>


        </v-form>
 
      
    
    </div>
    


   

     

 </template>
   
   
   
<script setup>
   import { useUserStore } from '../../stores/users';
   import { useBudgetStore } from '../../stores/budget';
   import { storeToRefs } from 'pinia';
   import {useHelperStore} from "../../stores/helper"
  
   var {addBudget, resetBudget, getNumberOfDays, addTraveler, deleteTraveler, changeTotal} = useBudgetStore()

   resetBudget()

   var {getAllUsers} = useUserStore()
   
   getAllUsers()
   
   var {travelMode} = useHelperStore()
   
   


   var {mappedUserEmails} = storeToRefs(useUserStore()) 
   
   var {budget, form, exist} = storeToRefs(useBudgetStore())










   
   
</script>



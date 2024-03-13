<template>


<v-main class="h-screen  w-[100vw]  ">

  <div class=" mb-10   mx-10   ">
  

     <v-container class="border border-solid border-black elevation-4 bg-white">
      <span class="font-weight-bold text-h5">  Search </span>    
       <v-row class="bg-white" >
         
         <v-col class="" color="bg-white">  
          <v-text-field  
                name="name"
                label="Name"
                id="name"
                type="text"
                density="compact"
                prepend-inner-icon="mdi-rename-outline"
                variant="outlined"
              
               
                v-model="name">
            </v-text-field>
          </v-col>
          <v-col>  
          <v-text-field 
                name="destination"
                label="Destination"
                id="destination"
                type="text"
                density="compact"
                prepend-inner-icon="mdi-map-marker-outline"
                variant="outlined"
                v-model="destination">
            </v-text-field>
          </v-col>
          <v-col>  
          <v-text-field 
                name="startDate"
                label="Departure Date"
                id="startDate"
                type="text"
                density="compact"
                prepend-inner-icon="mdi-clock-outline"
                variant="outlined"
                v-model="departure_date">
            </v-text-field>
          </v-col>
          <v-col>  
          <v-text-field 
                name="endDate"
                label="Arrival Date"
                id="endDate"
                type="text"
                density="compact"
                prepend-inner-icon="mdi-clock-outline"
                variant="outlined"
                v-model="arrival_date">
            </v-text-field>
          </v-col>
          <v-col>      <v-btn @click="searchBudget" class="mt-1 bg-blue-darken-2">
  Search
</v-btn></v-col>
       </v-row>
       <!-- <v-row class="flex flex-row justify-end">

       </v-row> -->
     </v-container>
  
  </div>




  <v-table fixed-header max-height="40vh" density="compact" class=" bg-white  elevation-4 mx-10 " style="max-height: 40vh;">
        <thead class="bg-blue-lighten-2 ">
          <tr>
            <th class="text-center text-white bg-blue-lighten-2">
              Travellers
            </th>
        
            <th class="text-center text-white bg-blue-lighten-2">
              Purpose
            </th>
            <th class="text-center text-white bg-blue-lighten-2">
              Destination
            </th>
    
            <!-- <th class="text-center text-white bg-blue-lighten-2">
              Mode
            </th> -->
            <th class="text-center text-white bg-blue-lighten-2">
              Start Date
            </th>    
            <th class="text-center text-white bg-blue-lighten-2">
              End Date
            </th>
            <th class="text-center text-white bg-blue-lighten-2">
              Initiated
            </th>
            <th class="bg-blue-lighten-2">

            </th>
            <th class="text-center text-white bg-blue-lighten-2">
          
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(budget, budgetCounter) in budgets"
            :key="budgetCounter" class=" " 
          >
            <td >
              <v-chip close label  class="pa-2 ma-1" v-for="(traveler, travelerCounter) in budget.travelers" :key="travelerCounter">
              {{ traveler.empName }}
            </v-chip>
          </td>
           
            <td >{{ budget.subject }}</td>
            <td >{{ budget.destination }}</td>
            <!-- <td >{{ budget.mode }}</td> -->
            <td >{{ budget.departure_date }}</td>
            <td >{{ budget.arrival_date }}</td>
            <td>{{ budget.initiated }}</td>
            <td @click="showRequest(budget)" class="hover:cursor-pointer hover:bg-green-500 hover:text-white">Check</td>
            <td v-if="budget.initiated == 'No'" @click="initiate(budget)" class="hover:cursor-pointer hover:bg-blue-500 hover:text-white">Initiate</td>
          </tr>
        </tbody>
      </v-table>

    </v-main>

    <v-overlay
          :model-value="overlay"
          contained
          scrim="blue"
          class="align-center justify-center"
        >
     <div class="flex flex-col justify-center items-center bg-white p-5 border-2 border-solid border-black">   
      <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    <div class="mt-2 text-bold font-black">Initiating Trip Please Wait</div>
        </div>
        </v-overlay>


</template>


<script setup>
import {ref} from 'vue'
import axios from "axios"
import { useGlobalStore } from '../stores/global';
import {useRouter} from 'vue-router'
import {useBudgetStore} from "../stores/budget";
import { storeToRefs } from 'pinia';

var {initiate, searchBudget, showRequest} = useBudgetStore()


var { name, destination, arrival_date, departure_date, overlay,
    budgets} = storeToRefs(useBudgetStore())






    
    



</script>
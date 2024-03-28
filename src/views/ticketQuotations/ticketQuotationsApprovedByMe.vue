<template>


    <SearchBar/>
    
    <div class="mx-16    elevation-4  ">
    
    <v-table class=" elevation-4 " density="compact">
        <thead class="bg-blue-lighten-1 ">
          <tr>
            <th class="text-center text-white">
             Trip Id
            </th>
            <!-- <th class="text-center text-white">
              Brand
            </th> -->
            <th class="text-center text-white">
              Subject
            </th>
            <th class="text-center text-white">
              Destination
            </th>
    
            <th class="text-center text-white">
              Departure Date
            </th>
            <th class="text-center text-white">
              Arrival Date
            </th>    
            <th class="text-center text-white">
               Type
            </th>  
         
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(trip, tripCounter) in filteredTicketQuotations"
            :key="tripCounter" class="hover:cursor-pointer hover:bg-gray-200 hover:font-bold hover:text-black" @click="showTicketQuotations(trip._id)"
          >
            <td >{{ trip.tripId }}</td>
            <!-- <td >{{ trip.brand }}</td> -->
            <td >{{ trip.subject }}</td>
            <td >{{ trip.destination }}</td>
            <td >{{ trip.departure_date }}</td>
            <td >{{ trip.arrival_date }}</td>
            <td v-if="trip.custom == false">Planned</td>
        <td v-else>Unplanned</td>
          
          </tr>
        </tbody>
      </v-table>
    
    </div>
    
    
    
    </template>
    
    <script setup>
   import { storeToRefs } from 'pinia';
    import {useTicketQuotationsStore} from '../../stores/ticketQuotationStore'
    import SearchBar from '../../components/searchBar.vue'
    
    
    var {getTicketQuotationsApprovedByMe, showTicketQuotations} = useTicketQuotationsStore()
    getTicketQuotationsApprovedByMe()
   var {ticketQuotations, filteredTicketQuotations} = storeToRefs(useTicketQuotationsStore())
    
    
    
    
    </script>
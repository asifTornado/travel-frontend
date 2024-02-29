<template>


<SearchBar/>

<div class="mx-16    elevation-4  ">






<v-table class=" elevation-4 " density="compact">
    <thead class="bg-blue-lighten-1 ">
      <tr>
        <th class="text-center text-white">
         Trip Id
        </th>
        <th class="text-center text-white">
          Brand
        </th> 
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
     
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(trip, tripCounter) in filteredTrips"
        :key="tripCounter" class="hover:cursor-pointer hover:bg-gray-200 hover:font-bold hover:text-black" @click="showTrip(trip._id)"
      >
        <td >{{ trip.tripId }}</td>
       <td >{{ trip.brand }}</td> 
        <td >{{ trip.subject }}</td>
        <td >{{ trip.destination }}</td>
        <td >{{ trip.departure_date }}</td>
        <td >{{ trip.arrival_date }}</td>
      
      </tr>
    </tbody>
  </v-table>

</div>



</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useTripStore} from '../stores/trips'
import {ref} from "vue";
import SearchBar from '../components/searchBar.vue'
import { VDataTable } from 'vuetify/labs/VDataTable'

var {getAllTrips, showTrip} = useTripStore()
getAllTrips()
var {trips, filteredTrips} = storeToRefs(useTripStore())
var headers = ref([
      { title: 'Trip Id', align: 'center', sortable: false, key: '_id' },
      { title: 'Brand', align: 'center', key: 'brand' },
      { title: 'Subject', align: 'center', key: 'subject' },
      { title: 'Destination', align: 'center', key: 'destination' },
      { title: 'Departure Date', align: 'center', key: 'departure_date' },
      { title: 'Arrival Date', align: 'center', key: 'arrival_date' },
    ])



</script>
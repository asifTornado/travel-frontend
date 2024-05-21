<template>


    <SearchBarReports :store="useReportStore"/>
    
    <div class="mx-16    " v-if="reportStore.filteredReports">
      <div class="h-[70vh] pl-[2vw] overflow-y-auto">
    <v-table class=" elevation-10" density="compact">
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
              Number of Travelers
            </th>   
            <th class="text-center text-white">
              Budget
            </th>  
            <th class="text-center text-white">
              Actual Cost
            </th> 
            
        
          </tr>
        </thead>
        <tbody>
          <tr
            
            v-for="(report, reportCounter) in reportStore.filteredReports"
            :key="tripCounter" class="hover:cursor-pointer hover:bg-gray-200 hover:font-bold hover:text-black" 
            @click="reportStore.showReport(report._id)"
          >
            <td >{{ report.tripId }}</td>
            <!-- <td >{{ trip.brand }}</td> -->
            <td >{{ report.subject }}</td>
            <td >{{ report.destination }}</td>
            <td >{{ report.departure_date }}</td>
            <td >{{ report.arrival_date }}</td>
            <td >{{ report.numberOfTravelers }}</td>
            <td >{{ report.budget }}</td>
            <td >{{ report.actual_cost }}</td>
          
          </tr>
        </tbody>
      </v-table>
    </div>
    </div>
    
    
    
    </template>
    
    <script setup>
    import { storeToRefs } from 'pinia';
    import {useTicketQuotationsStore} from '../../stores/ticketQuotationStore'
    import SearchBarReports from '../../components/SearchBarReports.vue';
    import {useReportStore} from "../../stores/report"
    

    var reportStore = useReportStore()

    reportStore.getReports()
    
    
    
    </script>
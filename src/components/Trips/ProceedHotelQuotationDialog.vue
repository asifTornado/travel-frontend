<template>
<v-overlay
:model-value="proceedHotelQuotationDialog"



persistent
scrim="blue"
class="align-center justify-center w-full"
>
<v-container class="bg-white min-w-[80vw] pa-5 ">

    <v-row class="" justify="center" align="center">

        <v-col justify-self="center" align-self="center" md="12" class="bg-white text-center font-weight-bold  text-h6 ">
            Quotation For
        </v-col>
    </v-row>
        
        <v-row class=" bg-white">
            
            <v-col cols v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
                <v-checkbox @change="addOrRemoveTraveler($event, request)" v-if="request.supervisorApproved == true && request.confirmed == true" :label="request.requester.empName" v-model="ticketQuotationSelection" :value="request._id"></v-checkbox>
            </v-col>
            <v-col cols >
                <v-checkbox label="All"  v-if="trip.requests.filter(x => x.supervisorApproved == true && x.departmentHeadApproved == true).length > 1" @change="ticketQuotationAll"  ></v-checkbox>
    </v-col>
    

</v-row> 
<v-container>
   <v-table
    fixed-header
    height="300px"
    width="100px"
    density="compact"
    hover
  >
    <thead>
      <tr class="bg-white">
        <th class="text-center text-h6 text-black font-weight-bold">
          Name
        </th>
        <th class="text-center text-h6 text-black font-weight-bold">
          Total  Cost
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      v-for="(cost, counter) in travelerCosts" :key="counter" 
      class="bg-grey-lighten-5"
      density="compact"
      >
        <td  class=" text-center " justify="center" align="center" >{{ cost.name }}</td>
        <td justify="center" align-self="center" align="center" density="compact"> 
         <v-text-field

         class="text-center mt-3 "
         name="totalcost"
         density="compact"
         id="totalCost"
         variant="solo"
         
         v-model="travelerCosts[counter].totalcost"
       ></v-text-field></td>
      </tr>
    </tbody>
  </v-table>

</v-container>

<v-row class="mt-2">
  
    <v-col md="12" class="text-end">
       <v-btn color="success" class="mr-2" @click="TAddHotelQuote">Proceed</v-btn>
       <v-btn color="warning" @click="proceedHotelQuotationDialog = false">Cancel</v-btn>
    </v-col>

</v-row>
 
</v-container>

</v-overlay>



</template>

<script setup>

import { useTripStore } from '../../stores/trips';
import {storeToRefs} from 'pinia';


var {proceedHotelQuotationDialog, trip, ticketQuotationSelection, travelerCosts} = storeToRefs(useTripStore())
var {TAddHotelQuote, ticketQuotationAll, TAddCustomQuote, addOrRemoveTraveler} = useTripStore()


</script>
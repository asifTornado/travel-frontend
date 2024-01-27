<template>
<v-overlay
:model-value="proceedHotelQuotationDialog"



scrim="blue"
class="align-center justify-center w-full"
>
<v-container class="bg-white min-w-[80vw] pa-5 bg-grey-lighten-2">

    <v-row class="" justify="center" align="center">

        <v-col justify-self="center" align-self="center" md="12" class="bg-white text-center font-weight-bold  text-h6 ">
            Quotation For
        </v-col>
    </v-row>
        
        <v-row class=" bg-white">
            
            <v-col cols v-for="(request, requestCounter) in trip.requests" :key="requestCounter">
                <v-checkbox v-if="request.supervisorApproved == true && request.confirmed == true" :label="request.requester.empName" v-model="ticketQuotationSelection" :value="request._id"></v-checkbox>
            </v-col>
            <v-col cols >
                <v-checkbox label="All" v-if="trip.requests.filter(x => x.supervisorApproved == true).length > 1" @change="ticketQuotationAll"  ></v-checkbox>
    </v-col>
    

</v-row> 

<v-row class="mt-2">
  
    <v-col md="12" class="text-end">
       <v-btn color="success" @click="TAddHotelQuote">Proceed</v-btn>
       <v-btn color="warning" @click="proceedHotelQuotationDialog = false">Cancel</v-btn>
    </v-col>

</v-row>
 
</v-container>

</v-overlay>



</template>

<script setup>

import { useTripStore } from '../../stores/trips';
import {storeToRefs} from 'pinia';


var {proceedHotelQuotationDialog, trip, ticketQuotationSelection} = storeToRefs(useTripStore())
var {TAddHotelQuote, ticketQuotationAll, TAddCustomQuote} = useTripStore()


</script>
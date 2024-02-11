<template>

    <v-dialog
    v-model="ticketBookDialog"
    width="50%"
    height="auto"
    persistent
    >
   
  
<v-card>
  <v-card-text>
   Is this the best refundable economy rate ?
  </v-card-text>
  <v-card-actions class="justify-end">
    <v-btn color="primary"  @click="TTicketBook('Yes')">Yes</v-btn>
    <v-btn color="primary"  @click="TTicketBook('No')">No</v-btn>
    <v-btn color="gray" @click="ticketBookDialog = false">Cancel</v-btn>
  </v-card-actions>

</v-card>
    
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips'
    import { storeToRefs } from 'pinia';
    
    
    
    var {ticketBookDialog, trip, bookSelection, best} = storeToRefs(useTripStore())


    var{bookSelectionAll, TTicketBook} = useTripStore()
     

    
    
    
    
    
    
    
    
    
    
    </script>
    
    
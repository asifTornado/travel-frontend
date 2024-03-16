<template>

    <v-dialog
    v-model="hotelBookDialog"
    width="50%"
    height="auto"
    persistent
    >
   
    <v-card>
      <v-card-text class="text-h5">
       Is this the best refundable economy rate ?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="THotelBook('Yes')">Yes</v-btn>
        <v-btn color="primary"  @click="THotelBook('No')">No</v-btn>
        <v-btn color="gray"  @click="hotelBookDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips'
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelBookDialog, trip, bookSelection, best} = storeToRefs(useTripStore())


    var{bookSelectionAll, THotelBook} = useTripStore()
     

    
    
    
    
    
    
    
    
    
    
    </script>
    
    
<template>

    <v-dialog
    v-model="hotelUnBookDialog"
    width="auto"
    >
    <v-card>
      <v-card-text>
       Are you sure you want to unbook this quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="THotelUnBook">Yes</v-btn>
        <v-btn color="primary"  @click="hotelUnBookDialog = false">No</v-btn>
      
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips';
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelUnBookDialog, trip} = storeToRefs(useTripStore())
    
    var {THotelUnBook} = useTripStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
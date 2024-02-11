<template>

    <v-dialog
    v-model="hotelConfirmDialog"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to confirm this hotel quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="THotelConfirm">Yes</v-btn>
        <v-btn color="primary"  @click="hotelConfirmDialog = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips';
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelConfirmDialog} = storeToRefs(useTripStore())
    
    var {THotelConfirm} = useTripStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
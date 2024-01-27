<template>

    <v-dialog
    v-model="ticketUnBookDialog"
    width="auto"
    >
    <v-card>
      <v-card-text>
       Are you sure you want to unbook this quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="unBook">Yes</v-btn>
        <v-btn color="primary"  @click="ticketUnBookDialog = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips';
    import { storeToRefs } from 'pinia';
    
    
    
    var {ticketUnBookDialog, trip} = storeToRefs(useTripStore())
    
    var {unBook} = useTripStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
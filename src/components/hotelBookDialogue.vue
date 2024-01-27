<template>

    <v-dialog
    v-model="hotelDialogue"
    width="auto"
    >
    <v-card>
      <v-card-text>
       Is this the best refundable economy rate ?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="bookHotel('Yes')">Yes</v-btn>
        <v-btn color="primary"  @click="bookHotel('No')">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelDialogue, request} = storeToRefs(useRequestsStore())
    
    var {bookHotel} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
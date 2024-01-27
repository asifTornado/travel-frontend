<template>

    <v-dialog
    v-model="hotelConfirmDialogue"
    width="auto"
    >
    <v-card>
      <v-card-text>
       Are you sure you want to confirm this hotel quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="hotelConfirm">Yes</v-btn>
        <v-btn color="primary"  @click="hotelConfirmDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelConfirmDialogue} = storeToRefs(useRequestsStore())
    
    var {hotelConfirm} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
<template>

    <v-dialog
    v-model="ticketConfirmDialog"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to confirm this ticket quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="confirm">Yes</v-btn>
        <v-btn color="primary"  @click="ticketConfirmDialog = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {ticketConfirmDialog} = storeToRefs(useRequestsStore())
    
    var {confirm} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
<template>

    <v-dialog
    v-model="hotelunbookDialogue"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to unbook this hotel quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="hotelunbook">Yes</v-btn>
        <v-btn color="primary"  @click="hotelunbookDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {hotelunbookDialogue} = storeToRefs(useRequestsStore())
    
    var {hotelunbook} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
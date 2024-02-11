<template>

    <v-dialog
    v-model="unbookDialogue"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to unbook this quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="unbook">Yes</v-btn>
        <v-btn color="primary"  @click="unbookDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {unbookDialogue, request} = storeToRefs(useRequestsStore())
    
    var {unbook} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
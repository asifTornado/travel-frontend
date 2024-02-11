<template>

    <v-dialog
    v-model="departmentHeadApproveDialogue"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       <v-textarea v-if="approval != 'rejected'"
        name="name"
        label="Message"
        id="id"
       
        v-model="message"
        clearable
      clear-icon="mdi-close-circle"
       ></v-textarea >
       <div v-else>
          Are you sure you want to approve this request?
       </div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="departmentHeadApprove">Proceed</v-btn>
        <v-btn color="primary"  @click="departmentHeadApproveDialogue = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {departmentHeadApproveDialogue, message, approval} = storeToRefs(useRequestsStore())
    
    var {departmentHeadApprove} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
<template>

    <v-dialog
    v-model="superVisorApproveDialogue"
    width="400"
    
    >
    <v-card>
      <v-card-text>
        <v-textarea v-if="approval == 'rejected'"
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
      <v-card-actions class="justify-end" v-if="approval == 'rejected'">
        <v-btn color="primary"  @click="supervisorApprove">Proceed</v-btn>
        <v-btn color="primary"  @click="superVisorApproveDialogue = false">Cancel</v-btn>
      </v-card-actions>
      <v-card-actions class="justify-end" v-else>
        <v-btn color="primary"  @click="supervisorApprove">Yes</v-btn>
        <v-btn color="primary"  @click="superVisorApproveDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
    
    
    var {superVisorApproveDialogue, message, approval} = storeToRefs(useRequestsStore())
    
    var {supervisorApprove} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
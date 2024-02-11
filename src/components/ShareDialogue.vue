<template>

    <v-dialog
    v-model="shareDialogue"
    width="400"
    persistent
    
    >
    <v-card>
      <v-card-text>
      
      <v-combobox :items="mappedUserEmails" label="Recipient" v-model="shareRecipient"> 

      </v-combobox>

      </v-card-text>
   
      <v-card-actions class="justify-end" >
        <v-btn color="primary"  @click="share">Proceed</v-btn>
        <v-btn color="primary"  @click="shareDialogue = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useRequestsStore } from '../stores/request';
    import { storeToRefs } from 'pinia';
    
import { useUserStore } from '../stores/users';
    
    
    var {getAllUsers} = useUserStore()
    getAllUsers()
    var {shareDialogue, shareRecipient} = storeToRefs(useRequestsStore())
    var {mappedUserEmails} = storeToRefs(useUserStore())
    
    
    var {supervisorApprove, share} = useRequestsStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
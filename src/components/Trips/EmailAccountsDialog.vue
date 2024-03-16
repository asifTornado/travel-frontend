<template>

    <v-dialog
    v-model="emailDialogAccounts"
    width="400px"
  
    >
    <v-card>
      <v-card-text>
       Are you sure you want to mail to accounts?
      
  
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="emailRequest()">Yes</v-btn>
        <v-btn color="primary"  @click="emailDialogAccounts = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useTripStore } from '../../stores/trips';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../../stores/users";
    
    
    var {getUserEmails} = useUserStore()
    
    getUserEmails()

    var {userEmails} = storeToRefs(useUserStore())


    var {emailDialogAccounts, emailRecipient, type} = storeToRefs(useTripStore())

    var {emailRequest} = useTripStore()
    
    var {book} = useTripStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
<template>

    <v-dialog
    v-model="accountsTripForwardDialog"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
       Chose Next Email Recipient From Accounts

       <v-combobox :items="mappedUserEmails" v-model="selectedUserEmail"></v-combobox>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="accountsTripForward()">Forward</v-btn>
        <v-btn color="primary"  @click="accountsTripForwardDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import {useTripStore} from "../stores/trips.js"
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../stores/users";
    
    
    

    var {mappedUserEmails} = storeToRefs(useUserStore())

    var {accountsTripForward} = useTripStore()

    var {accountsTripForwardDialog, selectedUserEmail} = storeToRefs(useTripStore())


    
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
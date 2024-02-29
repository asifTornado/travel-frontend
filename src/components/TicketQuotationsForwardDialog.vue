<template>

    <v-dialog
    v-model="ticketQuotationsForwardDialog"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
       Chose Next Email Recipient From Accounts

       <v-combobox :items="mappedUserEmails" v-model="selectedUserEmail"></v-combobox>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="ticketQuotationsForward()">Forward</v-btn>
        <v-btn color="primary"  @click="ticketQuotationsForwardDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import {useTicketQuotationsStore} from '../stores/ticketQuotationStore';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../stores/users";
    
    
    

    var {mappedUserEmails} = storeToRefs(useUserStore())

    var {ticketQuotationsForward} = useTicketQuotationsStore()

    var {ticketQuotationsForwardDialog, selectedUserEmail} = storeToRefs(useTicketQuotationsStore())


    
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
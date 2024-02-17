<template>

    <v-dialog
    v-model="moneyReceiptForwardDialog"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
       Chose Next Email Recipient From Accounts

       <v-combobox :items="mappedUserEmails" v-model="selectedUserEmail"></v-combobox>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="moneyReceiptForward()">Forward</v-btn>
        <v-btn color="primary"  @click="moneyReceiptForwardDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useMoneyReceiptStore } from '../stores/moneyReceiptStore';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../stores/users";
    
    
    

    var {mappedUserEmails} = storeToRefs(useUserStore())

    var {moneyReceiptForward} = useMoneyReceiptStore()

    var {moneyReceiptForwardDialog, selectedUserEmail} = storeToRefs(useMoneyReceiptStore())


    
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
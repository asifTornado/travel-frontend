<template>

    <v-dialog
    v-model="expenseReportForwardDialog"
    width="400px"
    persistent
    >
    <v-card>
      <v-card-text>
       Chose Next Email Recipient From Accounts

       <v-combobox :items="mappedUserEmails" v-model="selectedUserEmail"></v-combobox>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="expenseReportForward()">Forward</v-btn>
        <v-btn color="primary"  @click="expenseReportForwardDialog = false">Cancel</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
   import { useExpenseReportStore } from '../stores/expenseReport';
    import { storeToRefs } from 'pinia';
    import {useUserStore} from "../stores/users";
    
    
    

    var {mappedUserEmails} = storeToRefs(useUserStore())

    var {expenseReportForward} = useExpenseReportStore()

    var {expenseReportForwardDialog, selectedUserEmail} = storeToRefs(useExpenseReportStore())


    
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
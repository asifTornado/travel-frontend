<template>

    <v-dialog
    v-model="disburseDialog"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to disburse the payment for this expense report?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="disburse()">Yes</v-btn>
        <v-btn color="primary"  @click="cancelDisburse()">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>
    
    </template>
    
    
    <script setup>
    
    import { useExpenseReportStore } from '../stores/expenseReport';
    import { storeToRefs } from 'pinia';
    
    
    
    var {disburseDialog} = storeToRefs(useExpenseReportStore())
    
    var {disburse, cancelDisburse} = useExpenseReportStore()
    
    
    
    
    
    
    
    
    
    
    </script>
    
    
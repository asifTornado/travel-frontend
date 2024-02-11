<template>
    <v-dialog
    v-model="ticketRevokeDialog"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to revoke this quotation?
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary"  @click="TTicketRevoke">Yes</v-btn>
        <v-btn color="primary"  @click="ticketRevokeDialog = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>





</template>









<script setup>
import { useTripStore } from '../../stores/trips';
import { storeToRefs } from 'pinia';


var {ticketRevokeDialog} = storeToRefs(useTripStore())

var {TTicketRevoke} = useTripStore()




</script>
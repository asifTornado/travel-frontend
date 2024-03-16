<template>
    <v-dialog
    v-model="hotelRevokeDialogue"
    width="auto"
    persistent
    >
    <v-card>
      <v-card-text>
       Are you sure you want to revoke this hotel quotation?
      </v-card-text>
      <v-card-actions class="justify-end text-h5">
        <v-btn color="primary"  @click="hotelRevoke">Yes</v-btn>
        <v-btn color="primary"  @click="hotelRevokeDialogue = false">No</v-btn>
      </v-card-actions>
    
    </v-card>
    </v-dialog>





</template>









<script setup>
import { useRequestsStore } from '../stores/request';
import { storeToRefs } from 'pinia';


var {hotelRevokeDialogue} = storeToRefs(useRequestsStore())

var {hotelRevoke} = useRequestsStore()




</script>